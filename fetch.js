const url = "https://api.github.com/users/saisharath04";

// using try catch

const fetchUserDetails = () => {
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
    //   console.log("result:", result);
      return result
    })
    .catch((e) => {
      console.log("error:", e);
    });
};


fetchUserDetails().then((res) => {
    console.log("res:",res);
});

//using async await

// const fetchUserDetails2 = async () => {
//   try {
//     const response = await fetch(url);
//     const result = await response.json();
//     console.log(result);
//     return result;
//   } catch (error) {
//     return error;
//   }
// };

// fetchUserDetails2();
