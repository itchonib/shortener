import { useState } from "react";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import axios from "axios";

const UrlConvertForm = ({ assignShortUrl }) => {
  const [errorState, setErrorState] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      if (!e.target.longUrl.value) {
        setErrorState("A valid URL is required to proceed");
        return;
      }

      if (!e.target.longUrl.value.includes("http://")) {
        setErrorState(
          'Please make sure your URL is in the proper format. Ex: "http://gatherly.io"'
        );
        return;
      }
      const { data } = await axios.post("/api/url", {
        longUrl: e.target.longUrl.value,
      });
      assignShortUrl(data.shortUrl);
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        id={"longUrl"}
        label="Enter your url below"
        error={errorState}
      />
      <Button copy="snip it" type="submit" />
    </form>
  );
};

export default UrlConvertForm;
