import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import css from "./UserMenu.module.css"

export default function UserMenu() {
const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <p>
        Welcome, <span className={css.username}>{user.name}</span>
      </p>
      <button
        type="button"
        className={css.button}
        onClick={() => dispatch(logOut())}
      >
        Log Out
      </button>
    </div>
  );
}
