import { useSelector } from "react-redux";
import { getSearchResult, getIsLoading, getIsError } from "redux/selectors";
import ReactPaginate from "react-paginate";
import styles from "./styles.module.scss";

const Pagination = ({ currentPage, setCurrentPage, maxPage }) => {
  const searchResult = useSelector(getSearchResult);
  const isLoading = useSelector(getIsLoading);
  const isError = useSelector(getIsError);

  const pageHandler = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  return (
    <>
      {searchResult.length > 0 && !isLoading && !isError && (
        <section className={styles.container}>
          <ReactPaginate
            onPageChange={pageHandler}
            pageRangeDisplayed={5}
            pageCount={maxPage}
            forcePage={currentPage - 1}
            breakLabel="..."
            previousLabel="Previous"
            nextLabel="Next"
            className={styles.paginationList}
            pageClassName={styles.item}
            breakClassName={styles.btn}
            activeClassName={styles.active}
            previousClassName={styles.btn}
            nextClassName={styles.btn}
            disabledClassName={styles.disabled}
            marginPagesDisplayed={1}
            renderOnZeroPageCount={null}
          />
        </section>
      )}
    </>
  );
};

export default Pagination;
