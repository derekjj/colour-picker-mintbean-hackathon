import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Colors({ hex }) {
  const [copied, changeCopied] = useState(false);
  const [value] = useState(hex);

  var copy = () => {
    changeCopied(true);
    console.log("Copied: ", copied);
  };

  return (
    <div style={{ backgroundColor: hex }} className="color">
      <CopyToClipboard text={value} onCopy={copy}>
        <div className="hex-value">
          {hex}
          <div text-variant="red">{copied ? "Copied" : null}</div>
        </div>
      </CopyToClipboard>
    </div>
  );
}
