import { useState } from "react";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import axios from "axios";
import validUrl from "valid-url";
import './UrlConvertForm.scss'
import Toast from "../Notification/Notification";

const UrlConvertForm = ({ assignShortUrl }) => {
  const [errorState, setErrorState] = useState("");

  const clearError = () => {
    setErrorState('')
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      if (!e.target.longUrl.value) {
        setErrorState("A valid URL is required to proceed");
        return;
      }

      if (!validUrl.isUri(e.target.longUrl.value)) {
        setErrorState(
          'Please make sure your URL is in a valid format. Ex: "https://gatherly.io"'
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
    <form data-testid="form" onSubmit={handleSubmit}>
      <div className="form__row">
        <InputField
          id={"longUrl"}
          label="Enter your url below"
        />
        <Button copy="snip it" type="submit" dataCy={"btn__submit"} />
      </div>
      {errorState && <Toast clearFn={clearError} type="fail" message={errorState}/>  }
    </form>
  );
};

export default UrlConvertForm;
