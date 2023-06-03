import React from "react";

export const createAccountsTable = (db) => {
  return new Promise((resolve, reject) => {
    console.log("running...");
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS " +
          "accounts " +
          `(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            first_name TEXT NOT NULL,
            last_name TEXT NOT NULL,
            username TEXT NOT NULL UNIQUE,
            email TEXT UNIQUE,
            user_id TEXT DEFAULT (lower(hex(randomblob(4))) || '-' || lower(hex(randomblob(2))) || '-4' || substr(lower(hex(randomblob(2))),2) || '-a' || substr(lower(hex(randomblob(2))),2) || '-%' || lower(hex(randomblob(6))))
          )`,
        [],
        (_, result) => {
          resolve("Table created successfully");
        },
        (_, error) => {
          reject(`Error creating table: ${error.message}`);
        }
      );
    });
  });
};

export const addNewUser = (db, username, first_name, last_name, email) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      console.log("Sending");
      tx.executeSql(
        "INSERT INTO accounts (username, first_name, last_name, email) VALUES (?, ?, ?, ?)",
        [username, first_name, last_name, email],
        (_, result) => {
          resolve(result.insertId);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

export const getAllUserAccounts = (db) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM accounts;",
        [],
        (_, result) => {
          console.log("Rows:", result.rows._array);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

export const getUserAccount = (db, usernameOrEmail) => {
  return new Promise((resolve, reject) => {
    if (!usernameOrEmail) {
      reject(new Error("Username or email is missing"));
      return;
    }
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM accounts WHERE username = ? OR email = ?;",
        [usernameOrEmail, usernameOrEmail],
        (_, result) => {
          if (result.rows.length > 0) {
            resolve(result.rows.item(0));
          } else {
            resolve(null);
          }
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};
