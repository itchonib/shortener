const mongoose = require("mongoose");
const redis = require("redis");
const util = require("util");

const client = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
});
client.hget = util.promisify(client.hget);

client.on("connect", () => {
  console.log("Redis is connected");
});

client.on("end", () => {
  console.log("Redis has disconnected");
});

mongoose.Query.prototype.cache = function (hkey) {
  this.useCache = true;
  this.hashkey = JSON.stringify(hkey || "");
  return this;
};

const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.exec = async function () {
  if (!this.useCache) {
    return exec.apply(this, arguments);
  }

  let key = JSON.stringify(
    Object.assign({}, this.getQuery(), {
      collection: this.mongooseCollection.name,
    })
  );

  const cacheValue = await client.hget(this.hashkey, key);

  if (cacheValue) {
    const doc = JSON.parse(cacheValue);
    console.log("found in cache", doc);

    return Array.isArray(doc)
      ? doc.map((d) => new this.model(d))
      : new this.model(doc);
  }

  const result = await exec.apply(this, arguments);

  if (result) {
    if (Array.isArray(result) && result.length == 0) {
      return null;
    } else {
      client.hset(this.hashkey, key, JSON.stringify(result));
      return result;
    }
  } else {
    return null;
  }
};
