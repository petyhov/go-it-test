import { useDispatch } from "react-redux";
import debounce from "lodash.debounce";
import { fetchRepositories } from "redux/operations";

import styles from "./styles.module.scss";
import { setSearchValue } from "redux/searchSlice";

const SearchInput = () => {
  const dispatch = useDispatch();

  const inputHandler = (event) => {
    const query = event.target.value.toLowerCase();
    if (query === "") {
      dispatch(setSearchValue("react"));
      return dispatch(fetchRepositories({ query: "react" }));
    }
    dispatch(setSearchValue(query));
    return dispatch(fetchRepositories({ query }));
  };

  const debouncedInputHandler = debounce(inputHandler, 300);

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        onChange={debouncedInputHandler}
        placeholder="Search"
      />
    </div>
  );
};

export default SearchInput;
