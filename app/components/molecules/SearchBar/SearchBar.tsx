"use client";

import { useForm } from "react-hook-form";
import styles from "./searchBar.module.scss";
import { FiSearch } from "react-icons/fi";

type FormData = {
  search: string;
};

const SearchBar = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: "onChange", // important for isValid to update as you type
  });

  const onSearch = (data: FormData) => {
    console.log("Searching for:", data.search);
  };

  return (
    <form onSubmit={handleSubmit(onSearch)} className={styles.searchWrapper}>
      <input
        {...register("search", { required: "Search cannot be empty" })}
        placeholder="Search for anything"
        className={styles.searchInput}
      />

      <button type="submit" className={styles.searchButton} disabled={!isValid}>
        <FiSearch size={20}  color="white"/>
      </button>
    </form>
  );
};

export { SearchBar };
