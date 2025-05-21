import { FiSearch, FiUser, FiPlus } from "react-icons/fi";
import css from './ChatHeader.module.css';

const ChatHeader = ({ onNewChat }) => {
    return(
        <div className={css.header}>
            <div className={css.top}>
                <div className={css.topRight}>
                    <button className={css.loginBtn}>Login in</button>
                </div>
                <div className={css.topLeft}>
                    <FiUser />
                        <span>Мій профіль</span>
                </div>
            </div>

            <div className={css.searchChat}>
                <div className={css.searchWrapper}>
                    <input type="text" placeholder="Search or start new chat" />
                        <FiSearch className={css.searchIcon} />
                </div>
                <button className={css.addBtn} onClick={onNewChat}>
                    <FiPlus />
                </button>
            </div>
        </div>
    );
};

export default ChatHeader
