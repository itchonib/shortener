const validUrl = require("valid-url"),
  Url = require("../db/models/urlModel");

exports.shortenUrl = (req, res) => {
  if (!validUrl.isUri(req.body.longUrl)) {
    res.status(400).send(`Not a valid URL. Please try again.`);
    return;
  }

  Url.create(req.body, (error, url) => {
    if (error) {
      console.warn(`Error creating Url Document at ${new Date()}: ${error}}`);
      res
        .status(500)
        .send(`Error creating Url Document at ${new Date()}: ${error}}`);
    } else {
      res.status(201).json(url);
    }
  });
};

exports.findUrl = async (req, res) => {
  try {
    const url = await Url.findOne({
      shortUrl: `${process.env.BASE_URL}/${req.params.id}`,
    });
    res.redirect(url.longUrl);
  } catch (error) {
    res.status(404).send(`Url is not found at ${new Date()}: ${error}}`);
  }
};
