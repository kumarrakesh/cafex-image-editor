export const pipe =
  (...functions) =>
  (data) =>
    functions.reduce((nextItem, nextFunction) => nextFunction(nextItem), data);
