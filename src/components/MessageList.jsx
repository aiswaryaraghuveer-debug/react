import React from "react";
import Message from "./Message";

function MessageList({
  messages,
  isTyping,
  messagesEndRef
}) {
  return (
    <div className="messages">

      {messages.map((message) => (
        <Message
          key={message.id}
          message={message}
        />
      ))}

      {isTyping && (
        <div className="message-row bot">

          <div className="bot-avatar">
            A
          </div>

          <div className="message bot typing">
            <span />
            <span />
            <span />
          </div>

        </div>
      )}

      <div ref={messagesEndRef} />

    </div>
  );
}

export default MessageList;