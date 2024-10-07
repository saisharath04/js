console.log("1==", this);
console.log("1==", global);
function a() {
  console.log("2==", this);
}
a();
