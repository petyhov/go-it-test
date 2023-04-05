import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchRepositories } from "redux/operations";

import { SearchInput, SearchList, Pagination } from "./components";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRepositories({ query: "react" }));
  }, [dispatch]);

  return (
    <div className="container">
      <SearchInput />
      <SearchList />
      <Pagination />
    </div>
  );
};

export default App;
