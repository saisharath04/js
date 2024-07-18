const cart = ["shoes", "cloths", "belt"];

createOrder(cart)
  .then((orderId) => {
    return processPayment(orderId);
  })
  .then((paymentId) => {
    return showOrderDetails(paymentId);
  })
  .then((res) => {
    console.log("result:", res);
  })
  .catch((err) => {
    console.log(err.message);
  });

function isValidCart(cart) {
  return cart.length !== 0;
}

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!isValidCart(cart)) {
      const error = new Error("Please add atleast one item");
      reject(error);
    } else {
      resolve("123456");
    }
  });
  return pr;
}

function processPayment(orderId) {
  return new Promise((resolve, reject) => {
    if (orderId) {
      const paymentId = "hdfc1234";
      resolve(paymentId);
    } else {
      const error = new Error("payment is not success");
      reject(error);
    }
  });
}

function showOrderDetails(paymentId) {
  return new Promise((resolve, reject) => {
    if (paymentId) {
      resolve(cart);
    } else {
      const error = new Error("Invalid payment ID");
      reject(error);
    }
  });
}
