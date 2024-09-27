import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { FaPhone, FaUser } from "react-icons/fa6";
import css from "../Contact/Contact.module.css";

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  function onDelete(id) {
    dispatch(deleteContact(id));
  }

  return (
    <>
    <div>
          <p className={css.name}>
            <FaUser className={css.svg} />
            {name}
          </p>
          <p className={css.number}>
            <FaPhone className={css.svg} />
            {number}
          </p>
    </div>
        <button className={css.btn} type="button" onClick={() => onDelete(id)}>
          Delete
        </button>
    </>
  );
}
