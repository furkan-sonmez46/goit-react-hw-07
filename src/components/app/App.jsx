import ContactForm from "../contactForm/ContactForm";
import SearchBox from "../searchBox/SearchBox";
import ContactList from "../contactList/ContactList";
import css from "./App.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import { selectIsloading, selectError } from "../../redux/contactsSlice";
import Loader from "../loader/Loader";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsloading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div className={css.container}>
        <h1 className={css.mainTitle}>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
        {loading && <Loader />}
        {error && <p>Error: {error}</p>}
      </div>
    </>
  );
}

export default App;
