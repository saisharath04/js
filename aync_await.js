const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    const now = new Date();
    resolve(
      `promise1 - ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
    );
  }, [3000]);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    const now = new Date();
    resolve(
      `promise2 - ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
    );
  }, [4000]);
});

const promiseFn1 = () => {
  return new Promise((resolve) => {
    const now = new Date();
    setTimeout(() => {
      resolve(
        `promiseFn1 - ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
      );
    }, [3000]);
  });
};

const promiseFn2 = () => {
  return new Promise((resolve) => {
    const now = new Date();
    setTimeout(() => {
      resolve(
        `promiseFn2 - ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
      );
    }, [4000]);
  });
};

const func1 = async () => {
    const now = new Date();
  console.log(
    `func1 - ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
  );
  const res1 = await promise1;
  console.log(res1);
  const res2 = await promise2;
  console.log(res2);
};

const func2 = async () => {
    const now = new Date();
  console.log(
    `func2 - ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
  );
  const res1 = await promiseFn1();
  console.log(res1);
  const res2 = await promiseFn2();
  console.log(res2);
};

const func3 = async () => {
    const now = new Date();
  console.log(
    `func3 - ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
  );
};

func1();
func2();
func3();
