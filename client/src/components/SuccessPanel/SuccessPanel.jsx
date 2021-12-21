import { useState } from "react";
import InputField from "../InputField/InputField";
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
      <InputField
        label="See your new short link below!"
        id="shortUrl"
        shortUrl={shortUrl}
      />
      <Button copy="copy" handleFn={handleCopy} />
      <Toast type="success" message={message} />
    </div>
  );
};

export default SuccessPanel;
