import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchRepositories } from "redux/operations";

import { SearchInput, SearchList, Pagination } from "./components";

const App = () => {
  const [searchValue, setSearchValue] = useState("react");
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchRepositories({ query: searchValue, page: currentPage, setMaxPage })
    );
  }, [dispatch, currentPage, searchValue]);

  const inputHandler = (event) => {
    const query = event.target.value.toLowerCase();
    setCurrentPage(1);
    if (query === "") {
      return setSearchValue("react");
    }
    setSearchValue(query);
  };

  return (
    <div className="container">
      <SearchInput inputHandler={inputHandler} />
      <SearchList />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        maxPage={maxPage}
      />
    </div>
  );
};

export default App;
