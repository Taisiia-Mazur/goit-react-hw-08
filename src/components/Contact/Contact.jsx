import { MdPhone } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { useState } from "react";
import ModalWindow from "../ModalWindow/ModalWindow";
import css from "./Contact.module.css";

export default function Contact({ contact }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [deleteContactModal, setDeleteContactModal] = useState(false);
  const [editContactModal, setEditContactModal] = useState(false);
  const { name, number } = contact;

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
      <div>
        <div className={css.nameBox}>
          <IoPerson style={{ width: 20, height: 20 }} />
          <p>{name}</p>
        </div>
        <div className={css.contactData}>
          <MdPhone style={{ width: 20, height: 20 }} />
          <p>{number}</p>
        </div>
      </div>

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