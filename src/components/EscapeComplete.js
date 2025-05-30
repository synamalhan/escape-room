import React from "react";

const EscapeComplete = () => {
  return (
    <div className="escape-complete">
      <h1>🎉 You Escaped!</h1>
      <p>...but the house remembers you.</p>
      <img
        src="https://media.giphy.com/media/YTbZzCkRQCEJa/giphy.gif"
        alt="Escape"
        style={{ width: "300px", borderRadius: "12px", margin: "20px 0" }}
      />
      <button
        className="button"
        onClick={() => window.location.reload()}
      >
        Play Again
      </button>
    </div>
  );
};

export default EscapeComplete;
