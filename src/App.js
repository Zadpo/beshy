// App.js
import React, { useState } from 'react';
import EmojiMessage from './EmojiMessage';
import './App.css';

const App = () => {
  const [inputMessage, setInputMessage] = useState('');
  const [copyStatus, setCopyStatus] = useState('');

  const handleInputChange = (event) => {
    setInputMessage(event.target.value);
  };

  const handleCopyClick = () => {
    const messageElement = document.getElementById('message-result');
    const resultMessage = messageElement.textContent;

    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = resultMessage;
    document.body.appendChild(tempTextArea);

    tempTextArea.select();
    document.execCommand('copy');

    document.body.removeChild(tempTextArea);

    setCopyStatus('Copied!');

    // Clear the copy status message after a short delay
    setTimeout(() => {
      setCopyStatus('');
    }, 1500);
  };

  return (
    <div>
      <EmojiMessage
        message={inputMessage}
        onInputChange={handleInputChange}
        onCopyClick={handleCopyClick}
        copyStatus={copyStatus}
      />
    </div>
  );
};

export default App;
