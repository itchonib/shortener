import React, { useState } from "react";
import SuccessPanel from "../../components/SuccessPanel/SuccessPanel";
import UrlConvertForm from "../../components/UrlConvertForm/UrlConvertForm";
import "./Home.scss";

const Home = () => {
  const [shortUrl, setShortUrl] = useState(null);

  const assignShortUrl = (shortUrl) => {
      console.log(shortUrl)
      setShortUrl(shortUrl)
  }
  return (
    <div className="home">
      {!shortUrl ? <UrlConvertForm assignShortUrl={assignShortUrl}/> : <SuccessPanel shortUrl={shortUrl} />}
    </div>
  );
};

export default Home;
