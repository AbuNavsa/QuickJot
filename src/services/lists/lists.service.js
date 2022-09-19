import { mocks } from "./mock";
import camelize from "camelize";

export const listsRequest = (list = "lists", searchTerm = null) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[list];
    let returningData = { "results": [] }; // Created so we don't change the original mock variable

    if (searchTerm) {
      returningData.results = mocks[list]["results"].filter((listItem) => {
        if (listItem.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return listItem;
        }
      });
    } else {
      returningData = mock;
    }

    if (!returningData.results) {
      reject("not found");
    }
    resolve(returningData);
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
