// Task 1
const obj1 = {
  one: 15,
  two: 16,
  five: 20,
};
const out1 = document.querySelector(".out-1");
const btn1 = document.querySelector(".b-1");
btn1.onclick = fn1;

function fn1() {
  out1.textContent = obj1.two;
}
// Task 2
const obj2 = {
  one: "hello",
  two: "mahai",
  five: "hi",
};
const out2 = document.querySelector(".out-2");
const btn2 = document.querySelector(".b-2");
btn2.onclick = fn2;

function fn2() {
  out2.textContent = obj2["five"];
}

// Task 3
const obj3 = {
  one: "hello",
  two: "mahai",
  five: "hi",
  test: 21,
  odd: "hi",
  mix: "mix",
};
const out3 = document.querySelector(".out-3");
const btn3 = document.querySelector(".b-3");
btn3.onclick = fn3;

function fn3() {
  let result = "";
  for (const key in obj3) {
    if (obj3[key] === "hi") {
      result += obj3[key] + " ";
    }
  }
  result = result.trim(); // прибираємо зайвий пробіл
  out3.textContent = result;
  return result;
}
// Task 4
const obj4 = {
  one: "hello",
  two: "mahai",
  five: "hi",
  test: 21,
  odd: "hi",
  mix: "mix",
};
const out4 = document.querySelector(".out-4");
const btn4 = document.querySelector(".b-4");
btn4.onclick = fn4;
function fn4() {
  let result = "";
  for (const key in obj4) {
    result += key + " " + obj4[key] + " <br>";
  }
  out4.innerHTML = result;
  return result;
}
// Task 5
const obj5 = {
  one: 1,
  two: 2,
};
const out5 = document.querySelector(".out-5");
const btn5 = document.querySelector(".b-5");
btn5.onclick = () => fn5(obj5, out5);
function fn5(obj, outBlock) {
  let result = "";
  for (const key in obj5) {
    result += key + " " + obj5[key] + " <br>";
  }
  outBlock.innerHTML = result;
  return result;
}
// Task 6
const obj6 = {
  b: 17,
  e: 22,
};

// Task 7
const obj7 = {
  b: 17,
  e: 22,
};

// Task 8
const obj8 = {
  b: 17,
  e: 22,
};

// Task 9
const obj9 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 54,
};

// Task 10
const obj10 = {
  k: 22,
  d: 54,
  m: 22,
};

// TODO: Значення для перевірки 22
// TODO: Виклик fn10(a10, 22)

// Task 11
const obj11 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 54,
};

// Task 12
const obj12 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 17,
};

// Task 13
const obj13 = {
  prim: "hello",
  one: 4,
  testt: "vodolii",
  mango: "6",
};

// Task 14
const obj14 = {
  prim: [1, 2, 23],
  one: [3, 4, 5],
  test: [6, 7, 8],
  mango: [9, 10],
};

// Task 15
const obj15 = {
  prim: [1, 2, 23],
  one: [3, 5],
  testt: [6, 7, 8],
  mango: [9, 10],
};

// Task 16
const obj16 = {
  iis8sj: {
    name: "Mango",
    age: 27,
  },
  iiss7j: {
    name: "Poly",
    age: 26,
  },
  s3s8sj: {
    name: "Ajax",
    age: 47,
  },
};

// Task 17
const obj17 = {
  iis8sj: {
    name: "Mango",
    age: 27,
  },
  iiss7j: {
    name: "Poly",
    age: 26,
  },
  s3s8sj: {
    name: "Ajax",
    age: 47,
  },
};

// Task 18
const obj18 = {
  red: ["Akademmistechko", "Nyvky", "Universytet", "Lisova"],
  blue: ["Minska", "Obolon", "Pochaina", "Holosiivska"],
  green: ["Syrets", "Zoloti Vorota", "Klovska", "Vidubichi"],
};

// Task 19
const obj19 = {
  red: ["Akademmistechko", "Nyvky", "Universytet", "Lisova"],
  blue: ["Minska", "Obolon", "Pochaina", "Holosiivska"],
  green: ["Syrets", "Zoloti Vorota", "Klovska", "Vidubichi"],
};

// Task 20
const obj20 = {
  red: [
    ["Akademmistechko", 1],
    ["Nyvky", 0],
    ["Universytet", 3],
    ["Lisova", 1],
  ],
  blue: [
    ["Minska", 1],
    ["Obolon", 0],
    ["Pochaina", 2],
    ["Holosiivska", 0],
  ],
  green: [
    ["Syrets", 1],
    ["Zoloti Vorota", 2],
    ["Klovska", 0],
    ["Vidubichi", 1],
  ],
};
