import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";
import css from "../SearchBox/SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const onChange = (evt) => {
    dispatch(changeFilter(evt.target.value));
  };
  return (
    <div className={css.container}>
      <p className={css.label}>Find contact by name or number</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={onChange}
      />
    </div>
  );
}
