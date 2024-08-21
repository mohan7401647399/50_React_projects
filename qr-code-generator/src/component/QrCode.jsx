import React, { useState } from "react";
import QRCode from "react-qr-code";

const QrCode = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleQrCodeGen() {
    setQrCode(input);
    setInput("");
  }

  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter your value here"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleQrCodeGen}
        >
          Generate
        </button>
      </div>
      <br />
      <div>
        <QRCode id="qr-code" value={qrCode} size={400} bgColor="white" />
      </div>
    </div>
  );
};

export default QrCode;
