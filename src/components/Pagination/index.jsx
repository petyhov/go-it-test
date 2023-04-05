import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentPage,
  getPagesCount,
  getSearchResult,
  getIsLoading,
  getIsError,
} from "redux/selectors";
import styles from "./styles.module.scss";
import { setCurrentPage } from "redux/searchSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(getCurrentPage);
  const pagesCount = useSelector(getPagesCount);
  const searchResult = useSelector(getSearchResult);
  const isLoading = useSelector(getIsLoading);
  const isError = useSelector(getIsError);

  const pagesArr = [];
  for (let i = 0; i < pagesCount; i++) {
    pagesArr.push(i + 1);
  }

  const pageHandler = (page) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <>
      {searchResult.length > 0 && !isLoading && !isError && (
        <section className={styles.container}>
          <button
            className={styles.btn}
            onClick={() => pageHandler(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <ul>
            {pagesArr.map((item, index) => (
              <li
                key={`${item}-${index}`}
                className={`${styles.item} ${
                  currentPage === item && styles.active
                }`}
                onClick={() => pageHandler(item)}
              >
                {item}
              </li>
            ))}
          </ul>
          <button
            className={styles.btn}
            onClick={() => pageHandler(currentPage + 1)}
            disabled={currentPage === pagesCount}
          >
            Next
          </button>
        </section>
      )}
    </>
  );
};

export default Pagination;
