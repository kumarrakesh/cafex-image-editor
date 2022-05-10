const isObject = (obj) => obj && Boolean(typeof obj === "object");

/**
 * @param {object} obj
 * @param {string} path
 * @description To avoid ((user || {}).common || {}).name <- these kinds of nesting instead we can use
 *
 * obj -> obj is either an object or an array > {} || []
 * getting length or index also will work for array
 *
 * Ex :
 * getValue([], "length") return 0
 * getValue([5,10], "1") return 10
 * getValue(user, "common.name") -> return "name"
 * getValue({a:{b:c:{d:4}}}, "a.b.c.d") return 4
 *
 *
 */

export const getValue = (obj, path = "") => {
  if (isObject(obj)) {
    return path.split(".").reduce((acc, value) => {
      if (isObject(acc)) {
        acc = acc[value];
      }
      return acc;
    }, obj);
  }
};
