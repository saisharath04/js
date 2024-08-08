let obj1 = {
  firstName: "first_name_1",
  lastName: "last_name_1",
  printName: function () {
    console.log(
      `My first name is ${this.firstName} and last name is ${this.lastName}`
    );
  },
};

let wishUser = function (city, state) {
  console.log(
    `my name is ${this.firstName} ${this.lastName} and I am from ${city},${state}`
  );
};

let obj2 = {
  firstName: "first_name_2",
  lastName: "last_name_2",
};

//func borrowing -> call
// obj1.printName();
// obj1.printName.call(obj2);

// wishUser.call(obj2, 'kadapa','A.P');
// wishUser.call(obj1, 'Bangalore','Karnataka');

//apply only difference is passing params
// wishUser.apply(obj1, ["Bangalore", "Karnataka"]);

//bind it will return function
const res = wishUser.bind(obj2, "kadapa", "A.P");
// console.log(res);
res();
// console.log(res());
