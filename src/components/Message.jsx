import React from "react";
function Message({ message }) {
  const formattedText = message.text
    .split("\n")
    .map((line, index) => {
      const parts = line.split("**");

      return (
        <div key={index} className="message-line">

          {parts.map((part, i) =>
            i % 2 === 1 ? (
              <strong key={i}>
                {part}
              </strong>
            ) : (
              part
            )
          )}

        </div>
      );
    });

  return (
    <div className={`message-row ${message.sender}`}>

      {message.sender === "bot" && (
        <div className="bot-avatar">
          A
        </div>
      )}

      <div className={`message ${message.sender}`}>

        {formattedText}

        {message.color && (
          <div
            className="color-preview"
            style={{
              background: message.color
            }}
          >
            {message.color}
          </div>
        )}

      </div>

      {message.sender === "user" && (
        <div className="user-avatar">
          You
        </div>
      )}

    </div>
  );
}

export default Message;