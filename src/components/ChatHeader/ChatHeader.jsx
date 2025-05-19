import { FiSearch, FiUser } from "react-icons/fi";
import css from './ChatHeader.module.css';

const ChatHeader = () => {
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
                    <input type="text" placeholder="Пошук чатів..." />
                        <FiSearch className={css.searchIcon} />
                </div>
                {/* <NewChat onClick={onNewChat} /> */}
            </div>
        </div>
    );
};

export default ChatHeader
