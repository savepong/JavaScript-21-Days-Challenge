(() => {
  // เริ่มเขียนโค้ด

  // 1. Class vs Prototype
  // class Person {}

  // const pongsiri = new Person();
  // console.log(pongsiri);

  // 2. What's prototype?
  // const name = "Pongsiri";
  // console.log(name);

  // const arr = [];
  // console.log(arr.__proto__);

  // 3. Prototype chain
  // const name = "Pongsiri";
  // console.log(name.__proto__);
  // console.log(name.toLocaleString());

  // 4. Extend a prototype
  const name = "Pongsiri";
  function sayHello(val) {
    console.log(`Hello ${val}`);
  }

  String.prototype.sayHello = sayHello;
  console.log(name.__proto__);
  name.sayHello("World");
})();
