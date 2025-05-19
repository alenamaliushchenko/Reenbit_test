import css from './ChatList.module.css';
const ChatList = ({ chats = [] }) => {
    return (
        <div className={css.chatSidebar}>
            <h1 className={css.titleSidebar}>Chats</h1>
            <ul className={css.chatList}> 
                {chats.map(chat => (
                    <li key={chat.id} className={css.chatListItem}>
                        <span>{chat.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default ChatList