function deepCopy(obj) {
  if (typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((entity) => deepCopy(entity));
  }

  const res = {};
  for (let key in obj) {
    res[key] = deepCopy(obj[key]);
  }
  return res;
};

const obj = {
  a: "1",
  b: "2",
  c: {
    aa: "11",
    ab: [1, 2, 3, 4, 5, 6, 7, 8],
    ac: {
      aaa: "111",
      aab: "222",
      aac: "333",
    },
  },
};

const obj2 = deepCopy(obj)
obj2.a = '4'
obj2.c.ab = [9,8,7]
obj2.c.ac.aaa = '444'

console.log(obj)
console.log(obj2);
