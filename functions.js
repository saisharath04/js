const obj = {
  first_name: "sai",
  last_name: "sharath",
};

function printName(age, state) {
  console.log(this.first_name, this.last_name, age, state);
}

printName.call(obj, 21, "AP");
printName.apply(obj, [21, "AP"]);

const fun = printName.bind(obj, 23, "KA");
fun();
