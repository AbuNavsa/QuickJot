import React, { useState, createContext, useEffect, useMemo } from "react";

import { listsRequest, listsTransform } from "./lists.service";

export const ListsContext = createContext();

export const ListsContextProvider = ({ children }) => {
  const [lists, setLists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveLists = () => {
    setIsLoading(true);

    setTimeout(() => {
      listsRequest(undefined, "S")
        .then(listsTransform)
        .then((results) => {
          setIsLoading(false);
          setLists(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 1000);
  };

  useEffect(() => {
    retrieveLists();
  }, []);

  return (
    <ListsContext.Provider
      value={{
        lists,
        isLoading,
        error,
      }}
    >
      {children}
    </ListsContext.Provider>
  );
};
