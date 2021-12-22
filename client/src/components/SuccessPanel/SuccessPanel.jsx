import { useState } from "react";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import Toast from "../Toast/Toast";
import "./SucessPanel.scss";

const SuccessPanel = ({ shortUrl }) => {
  const [message, setMessage] = useState("Link generated!");

  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(shortUrl);
      setMessage("Copied Link!");
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <div className="sucess-panel">
      <div className="success-panel__row">
        <InputField
          label="See your new short link below!"
          id="shortUrl"
          shortUrl={shortUrl}
        />
        <Button copy="copy" handleFn={handleCopy} dataCy={"btn__copy-link"} />
      </div>
      <Toast type="success" message={message} />
    </div>
  );
};

export default SuccessPanel;
