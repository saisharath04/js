const obj = {
  firstName: "sai",
  lastName: "sharath",
};

//this won't work in arrow functions

const printName = function (city, state, country, pincode) {
  console.log(
    `My name is ${this.firstName} ${this.lastName},I am from ${city},${state},${country},${pincode}`
  );
};

// const printMyName = printName.bind(obj,'kadapa','AP','US','776783');
// printMyName('INDIA','516289');
//output-> My name is sai sharath,I am from kadapa,AP,US,776783

const printMyName = printName.bind(obj, "kadapa", "AP");
printMyName("INDIA", "516289");

Function.prototype.myBind = function (...args) {
  const obj = this;
  return function (...args2) {
    obj.apply(args[0], [...args.splice(1), ...args2]);
  };
};

const printMyName2 = printName.myBind(obj, "kadapa", "ap");
printMyName2("india", "516");
