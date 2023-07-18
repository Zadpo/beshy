// EmojiMessage.js
import React from 'react';
import './EmojiMessage.css';

const EmojiMessage = ({ message, onInputChange, onCopyClick, copyStatus }) => {
  // Helper function to add the 🤸‍♂️ emoji after each word
  const addEmojiToWords = (text) => {
    const words = text.split(' ');
    const emoji = ' 🤸‍♂️';
    return words.map((word, index) => (
      <React.Fragment key={index}>
        {word}
        {index !== words.length - 1 && emoji}
      </React.Fragment>
    ));
  };

  return (
    <div className="container">
      <div className="emoji-message" id="message-result">
        {addEmojiToWords(message)}
      </div>
      <div>
        <input
          type="text"
          value={message}
          onChange={onInputChange}
          className="emoji-input"
          placeholder="Type your message here..."
        />
        <div className = "copy-button">
        <button onClick={onCopyClick}>Copy</button>
        </div>
        <div className="copy-status">{copyStatus}</div>
      </div>
    </div>
  );
};

export default EmojiMessage;
