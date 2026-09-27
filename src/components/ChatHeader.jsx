import React from "react"; 
import portfolioData from "./data";

function ChatHeader({ onClear }) {
  return (
    <header className="chat-header">

      <div className="profile-section">

        <div className="profile-avatar">
          {portfolioData.name.charAt(0)}

          <span className="online-dot" />
        </div>

        <div>
          <h1>{portfolioData.name}</h1>

          <div className="status">
            <span />
            Portfolio Assistant
          </div>
        </div>

      </div>

      <button
        className="clear-button"
        onClick={onClear}
        title="Clear conversation"
      >
        ↻
      </button>

    </header>
  );
}

export default ChatHeader;