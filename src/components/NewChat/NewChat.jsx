import { FiPlus } from "react-icons/fi";
import css from './NewChat.module.css';

const NewChat = ({ onClick }) => {
    return (
        <button onClick={onClick} className={css.btnNewChat}>
          <FiPlus /> Новий чат
        </button>
    );
};


export default NewChat