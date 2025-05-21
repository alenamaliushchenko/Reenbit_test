import { useState } from 'react';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatList from './ChatList/ChatList';
import ChatWindow from './ChatWindow/ChatWindow';
import NewChat from './NewChat/NewChat';
import css from './App.module.css';

import chatsData from './data/chats.json';
import messagesData from './data/messages.json';

const App = () => {
  // Функція форматування дати в формат "Місяць словами день, рік"
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    if (isNaN(date)) return dateString; // якщо дата некоректна — повертаємо як є

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  // Формуємо початковий список чатів з останнім повідомленням і відформатованою датою
 const initialChats = chatsData.map(chat => {
  const chatMessages = messagesData.find(m => m.chatId === chat.id)?.messages || [];
  const lastMessage = chatMessages[chatMessages.length - 1];

  return {
    ...chat,
    lastMessage: lastMessage ? lastMessage.text : '',
    time: lastMessage ? formatDate(lastMessage.time) : '',
  };
});


  const [chats, setChats] = useState(initialChats);
  const [selectedChatId, setSelectedChatId] = useState(null);

  const handleNewChat = () => {
    const newChat = {
      id: Date.now(),
      name: 'Новий чат',
      avatar: '/avatars/default.png',
      lastMessage: '',
      time: '',
    };
    setChats(prev => [...prev, newChat]);
    setSelectedChatId(newChat.id);
  };

  return (
    <div className={css.myChat}>
      <ChatHeader onNewChat={handleNewChat} />
      <div className={css.chatContainer}>
        <ChatList 
          chats={chats} 
          selectedChatId={selectedChatId}
          onSelectChat={setSelectedChatId} />
        {selectedChatId ? (
          <ChatWindow chatId={selectedChatId} />
        ) : (
          <NewChat onClick={handleNewChat} />
        )}
      </div>
    </div>
  );
};

export default App;
