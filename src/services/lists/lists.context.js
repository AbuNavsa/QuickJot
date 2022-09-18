import React, { useState, createContext, useEffect, useMemo } from "react";

import { listsRequest, listsTransform } from "./lists.service";

export const ListsContext = createContext();

export const ListsContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("");
  const [lists, setLists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword = keyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
    if (!searchKeyword.length) {
      // Don't do anything
    }

    setIsLoading(true);
    setTimeout(() => {
      listsRequest(undefined, searchKeyword)
        .then(listsTransform)
        .then((results) => {
          setIsLoading(false);
          setLists(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 0);
  };

  useEffect(() => {
    onSearch();
  }, []);

  return (
    <ListsContext.Provider
      value={{
        lists,
        isLoading,
        error,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </ListsContext.Provider>
  );
};
