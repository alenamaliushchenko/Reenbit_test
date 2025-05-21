import React from 'react';
import messagesData from '../data/messages.json';
import chats from '../data/chats.json';
import css from './ChatWindow.module.css';

const ChatWindow = ({ chatId }) => {
  const chat = chats.find(c => c.id === chatId);
  const messagesEntry = messagesData.find(entry => entry.chatId === chatId);
  const messages = messagesEntry ? messagesEntry.messages : [];

  return (
    <div className={css.chatWindow}>
      <h3 className={css.chatTitle}>{chat?.name}</h3>
      <div className={css.messagesContainer}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.sender === 'me' ? css.myMessage : css.otherMessage}
          >
            <p className={css.messageText}>
                {msg.sender !== 'me' && <strong>{msg.sender}:</strong>} {msg.text}
            </p>

            <small className={css.messageTime}>{msg.time}</small>
          </div>
        ))}
      </div>
    </div>
  );
};


export default ChatWindow