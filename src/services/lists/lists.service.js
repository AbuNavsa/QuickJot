import { mocks } from "./mock";
import camelize from "camelize";

export const listsRequest = (list = "lists") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[list];

    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

export const listsTransform = ({ results = [] }) => {
  const mappedLists = results.map((list) => {
    return {
      ...list,
      isLocked: list.isLocked === 1,
      isDeleted: list.isComplete === 1,
      isShared: list.isShared === 1,
    };
  });

  return camelize(mappedLists);
};
