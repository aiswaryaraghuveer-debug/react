import React,{ useRef, useState } from "react";

function ChatInput({ onSend }) {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!input.trim()) return;

    onSend(input);

    setInput("");

    inputRef.current?.focus();
  };

  const handleKeyDown = (event) => {
    if (
      event.key === "Enter" &&
      !event.shiftKey
    ) {
      event.preventDefault();

      handleSubmit(event);
    }
  };

  return (
    <form
      className="input-container"
      onSubmit={handleSubmit}
    >

      <input
        ref={inputRef}
        value={input}
        onChange={(event) =>
          setInput(event.target.value)
        }
        onKeyDown={handleKeyDown}
        placeholder="Ask me something..."
        autoComplete="off"
      />

      <button
        type="submit"
        className="send-button"
        disabled={!input.trim()}
      >
        ↑
      </button>

    </form>
  );
}

export default ChatInput;