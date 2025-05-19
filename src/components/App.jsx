import { useState } from 'react';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatList from './ChatList/ChatList';
import NewChat from './NewChat/NewChat';
import css from './App.module.css';


const App = () => {
  const [chats, setChats] = useState([
    {id:1, name: 'Чат з мамою'},
    {id:2, name: 'Робочий чат'}
  ]);
    const handleNewChat = () => {
    const newChat = { id: Date.now(), name: 'Новий чат' };
    setChats(prev => [...prev, newChat]);
  };

   return (
    <div className={css.myChat}>
      <ChatHeader />
      <ChatList chats={chats}/>
      <NewChat onClick={handleNewChat}/>
    </div>  

   )
}

export default App