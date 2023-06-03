import React, { useState, createContext, useEffect } from "react";
import * as SQLite from "expo-sqlite";

import {
  createAccountsTable,
  addNewUser,
  getUserAccount,
  getAllUserAccounts,
} from "./authentication.service";

export const AuthenticationContext = createContext();

const db = SQLite.openDatabase(
  "quickjot_db",
  "1.0",
  "Quickjot Database",
  10 * 1024 * 1024,
  () => console.log("Database opened")
);

// TEMP DATA For guest auth
const email = "abu@test.com";
const first_name = "Abu Bakr";
const last_name = "Navsa";
const username = "abunavsa";
const usernameOrEmail = "abunavsa";

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState([]);

  useEffect(() => {
    onCreateTable(db);
    // onOfflineRegister(db);
    // onOfflineLogin(db, usernameOrEmail);
    // onGetAccounts(db);
  }, []);

  const onCreateTable = (db) => {
    createAccountsTable(db)
      .then((message) => console.log(message))
      .catch((error) => console.log(error));
  };

  const onOfflineLogin = (usernameOrEmail) => {
    if (!usernameOrEmail) {
      console.log("No username given");
    } else {
      setIsLoading(true);
      getUserAccount(db, usernameOrEmail)
        .then((userData) => {
          setIsLoading(false);
          setUser(userData);
          console.log("retrieved user's data...", userData); // remove userData print
        })
        .catch((error) => {
          setIsLoading(false);
          console.log(error);
        });
    }
  };

  const onOfflineRegister = (db) => {
    if (!username || !first_name || !last_name || !email) {
      console.log("Please complete data");
    } else {
      // setIsLoading(true);
      addNewUser(db, username, first_name, last_name, email)
        .then((insertId) => {
          console.log("New user inserted with ID:", insertId);
        })
        .catch((error) => {
          console.log("Error inserting new user:", error);
        });
    }
  };

  const onGetAccounts = (db) => {
    getAllUserAccounts(db)
      .then((message) => console.log(message))
      .catch((error) => console.log(error));
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onOfflineLogin,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
