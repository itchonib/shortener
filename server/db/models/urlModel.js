const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Link = require("../../helper/link");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const UrlSchema = new Schema(
  {
    longUrl: {
      type: String,
      required: true,
      trim: true,
    },
    shortUrl: {
      type: String,
      unique: true,
    },
  },
  { timestamp: true }
);

UrlSchema.plugin(AutoIncrement, { inc_field: "urlCounter" });

UrlSchema.pre("save", async function (next) {
  const url = this;
  if (url.isModified("longUrl")) {
    url.shortUrl = await new Link(url.longUrl).shortenLink(url.urlCounter);
  }
  next();
});

const Url = mongoose.model("Url", UrlSchema);
module.exports = Url;
