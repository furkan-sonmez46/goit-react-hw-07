import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={css.contactDiv}>
      <div className={css.contactInfo}>
        <p>
          <svg
            className={css.icons}
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="currentColor"
          >
            <path d="M18 22.082v-1.649c2.203-1.241 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h28c0-4.030-5.216-7.364-12-7.918z"></path>
          </svg>
          {contact.name}
        </p>
        <p>
          <svg
            className={css.icons}
            viewBox="0 0 20 20"
            width="20"
            height="20"
            fill="currentColor"
          >
            <path d="M13.75 12.5c-1.25 1.25-1.25 2.5-2.5 2.5s-2.5-1.25-3.75-2.5-2.5-2.5-2.5-3.75 1.25-1.25 2.5-2.5-2.5-5-3.75-5-3.75 3.75-3.75 3.75c0 2.5 2.568 7.568 5 10s7.5 5 10 5c0 0 3.75-2.5 3.75-3.75s-3.75-5-5-3.75z"></path>
          </svg>
          {contact.number}
        </p>
      </div>
      <button className={css.dltButton} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
export default Contact;


