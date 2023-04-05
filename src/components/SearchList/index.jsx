import { useSelector } from "react-redux";
import {
  getSearchResult,
  getIsLoading,
  getIsError,
  getCurrentPage,
} from "redux/selectors";
import { Bars } from "react-loader-spinner";
import SearchItem from "./SearchItem";
import styles from "./styles.module.scss";

const SearchList = () => {
  const itemsList = useSelector(getSearchResult);
  const isLoading = useSelector(getIsLoading);
  const isError = useSelector(getIsError);
  const currentPage = useSelector(getCurrentPage);

  const startIndex = (currentPage - 1) * 3;
  const finsihIndex = startIndex + 3;

  return (
    <section className={styles.section}>
      {isLoading ? (
        <div className={styles.spinerContainer}>
          <Bars
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : isError ? (
        <div className={styles.spinerContainer}>
          <h3>something went wrong</h3>
        </div>
      ) : itemsList.length > 0 ? (
        <ul>
          {itemsList.slice(startIndex, finsihIndex).map((item) => (
            <SearchItem data={item} key={item.id} />
          ))}
        </ul>
      ) : (
        <div className={styles.spinerContainer}>
          <h3>No repository was found for your request</h3>
        </div>
      )}
    </section>
  );
};

export default SearchList;
