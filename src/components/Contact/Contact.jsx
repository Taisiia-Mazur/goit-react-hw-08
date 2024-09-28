import { useState } from "react";
import ModalWindow from "../ModalWindow/ModalWindow";
import css from "./Contact.module.css";


export default function Contact({ contact }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [deleteContactModal, setDeleteContactModal] = useState(false);
  const [editContactModal, setEditContactModal] = useState(false);
  const { name, number } = contact;


  const nameParts = name.split(" ");
  const firstNameInitial = nameParts[0] ? nameParts[0][0] : "";
  const lastNameInitial = nameParts[1] ? nameParts[1][0] : "";


  function openModal(param) {
    if (param === "deleteBtn") {
      setDeleteContactModal(true);
    } else {
      setEditContactModal(true);
    }
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
    setDeleteContactModal(false);
    setEditContactModal(false);
  }

  return (
    <div className={css.contactBox}>
      <div className={css.profileData}>
        <div className={css.avatar}>
      {firstNameInitial}
      {lastNameInitial}
    </div>
    
          <div className={css.profile}>
            <p>{name}</p>
            <p>{number}</p>
          </div>
      </div>

  <div className={css.btn}>
        <button
          type="button"
          className={css.btnDelete}
          onClick={() => openModal("deleteBtn")}
        >
          Delete
        </button>
        <button className={css.btnEdit} type="button" onClick={() => openModal()}>
          Edit contact
        </button>
  </div>

      {modalIsOpen === true && (
        <ModalWindow
          onCloseModal={closeModal}
          modalIsOpen={modalIsOpen}
          contact={contact}
          deleteContactModal={deleteContactModal}
          editContactModal={editContactModal}
        />
      )}
    </div>
  );
}