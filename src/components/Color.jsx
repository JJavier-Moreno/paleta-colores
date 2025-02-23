import React, { useState } from "react";

const Color = ({ hexcolor }) => {
  const [copied, setCopied] = useState(false);

  const onHandleClick = () => {
    const textToCopy = `#${hexcolor}`;

    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };

  return (
    <div
      className="color-container"
      style={{ backgroundColor: `#${hexcolor}` }}
    >
      <button className="color-info" onClick={onHandleClick}>
        <p>#{hexcolor}</p>
        <i className="fa-solid fa-copy copy-icon"></i>
      </button>
      {copied && (<p className="estado-porta">¡Copiado!</p>)}
    </div>
  );
};

export default Color;
