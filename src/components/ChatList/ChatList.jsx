// import chats from '../data/chats.json';
import messages from '../data/messages.json';
import css from './ChatList.module.css';
const ChatList = ({ chats, onSelectChat, selectedChatId }) => {
    const chatsWithLastMessage = chats.map(chat => {
    const chatMessages = messages.find(m => m.chatId === chat.id)?.messages || [];
    const lastMessage = chatMessages[chatMessages.length - 1];
    
    return {
      ...chat,
      lastMessageText: lastMessage?.text || 'No messages yet',
      lastMessageTime: lastMessage?.time || ''
    };
  });

    return (
    <aside className={css.chatSidebar}>
      <h1 className={css.titleSidebar}>Chats</h1>
      <ul className={css.chatList}>
        {chatsWithLastMessage.map(chat => (
          <li
            key={chat.id}
            onClick={() => onSelectChat(chat.id)}
            className={`${css.chatListItem} ${selectedChatId === chat.id ? css.active : ''}`}
          >
            <img src={chat.avatar} alt={chat.name} />
            <div className={css.chatContent}>
              <div className={css.chatTop}>
                <span className={css.chatName}>{chat.name}</span>
                <span className={css.chatTime}>{chat.lastMessageTime}</span>
              </div>
              <p className={css.chatPreview}>{chat.lastMessageText}</p>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default ChatList;