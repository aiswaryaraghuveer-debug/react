import React from "react";
const suggestions = [
  "Who is Ash?",
  "Show me your skills",
  "Tell me about your projects",
  "Roll a dice",
  "Flip a coin",
  "Random number 1 100"
];

function Suggestions({ onSelect }) {
  return (
    <div className="suggestions">

      {suggestions.map((suggestion) => (
        <button
          key={suggestion}
          onClick={() => onSelect(suggestion)}
        >
          {suggestion}
        </button>
      ))}

    </div>
  );
}

export default Suggestions;