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

let obj2 = Object.assign({}, obj);  // 1 level
let obj3 = { ...obj };              // 1 level

obj.a = "3";
obj.c.ac.aaa = "114";

// console.log(obj, obj2, obj3);


const obj4 = deepCopy(obj);         // all levels
obj4.a = "4";
obj4.c.ab = [9, 8, 7];
obj4.c.ac.aaa = "444";

// console.log(obj);
// console.log(obj4);

const obj5 = JSON.parse(JSON.stringify(obj)); // all levels
obj5.a = "5";
obj5.c.ab = [6, 7];
obj5.c.ac.aaa = "777";

console.log(obj);
console.log(obj5);
