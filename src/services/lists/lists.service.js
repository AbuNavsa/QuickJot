import { mocks } from "./mock";
import camelize from "camelize";

export const listsRequest = (list = "lists", searchTerm = null) => {
  return new Promise((resolve, reject) => {
    let mock = mocks[list];
    // console.log(">> STRUCTURE", mock);
    // console.log(">> STRUCTURE1", Object(mock)["results"]);
    // console.log(">> STRUCTURE2", mock[0]["results"]);
    console.log(">> Comparing data", mock);

    if (searchTerm) {
      Object(mock)["results"] = mocks[list]["results"].filter((listItem) => {
        if (listItem.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return listItem;
        }
      });
    }
    console.log(">> Comparing data 2", mock);

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
