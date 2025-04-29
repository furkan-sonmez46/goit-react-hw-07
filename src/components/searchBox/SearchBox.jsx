import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { useState } from "react";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState(""); 

  const handleChange = (e) => {
    const value = e.target.value;
    setFilter(value); 
    dispatch(changeFilter(value)); 
  };

  return (
    <div className={css.searchBox}>
      <h3 className={css.searchTitle}>Find contacts by name</h3>
      <input
        type="text"
        value={filter} 
        onChange={handleChange}
        placeholder="Search contacts"
      />
    </div>
  );
};

export default SearchBox;
