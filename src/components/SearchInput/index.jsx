import debounce from "lodash.debounce";
import styles from "./styles.module.scss";

const SearchInput = ({ inputHandler }) => {
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
