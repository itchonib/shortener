const Hashids = require("hashids");

class Link {
  constructor(url) {
    this.url = url;
  }

  shortenLink = async (counter) => {
    const hashids = new Hashids(this.url, 5);
    const randomNum = Math.floor(Math.random() * 100);
    const linkId = hashids.encode(counter, randomNum);
    return process.env.BASE_URL + '/' + linkId;
  };
}

module.exports = Link;
