import { useState } from "react";
import Button from "../Button/Button";
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
      <p className="success-panel__message"> See your new short link below! </p>
      <div className="success-panel__link-container">
        <p> {shortUrl} </p>
      </div>
      <Button copy="copy" handleFn={handleCopy} dataCy={"btn__copy-link"} />
      <Toast type="success" message={message} />
    </div>
  );
};

export default SuccessPanel;
