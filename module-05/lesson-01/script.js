//TODO: Join, Split, ForEach
// Task 1
const arr1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];
const btn1 = document.querySelector(".b-1");
const out1 = document.querySelector(".out-1");
btn1.onclick = fn1;

function fn1() {
  const arr1_res = [];
  arr1.forEach(function (number) {
    arr1_res.push(number * 2);
  });
  out1.textContent = arr1_res.join(", ");
  return out1;
}
// Task 2
const arr2 = [2, 3, 4, 5, 10, 11, 12];
const btn2 = document.querySelector(".b-2");
const out2 = document.querySelector(".out-2");
btn2.onclick = fn2;

function fn2() {
  const arr2_res = [];
  arr2.forEach(function (number) {
    arr2_res.push(number / 2);
  });
  out2.textContent = arr2_res.join(", ");
  return out2;
}
// Task 3
const arr3 = [2, "hello", 3, "hi", 4, "Mazai"];
const btn3 = document.querySelector(".b-3");
const out3 = document.querySelector(".out-3");
btn3.onclick = fn3;

function fn3() {
  const arr3_res = [];
  arr3.forEach(function (item) {
    if (typeof item === "number") {
      arr3_res.push(item);
    }
  });
  out3.textContent = arr3_res.join(", ");
  return out3;
}
// Task 4
const arr4_res = [];
const spans = document.querySelectorAll("span.task-4");
const out4 = document.querySelector(".out-4");

function fn4() {
  spans.forEach(span => {
    arr4_res.push(span.getAttribute("data"));
  });
  out4.textContent = arr4_res.join(", ");
  return arr4_res;
}
fn4();

// Task 5
const arr5_res = [];
const pSpans = document.querySelectorAll("p.task-5");
const pElements = document.querySelectorAll("p.task-5");
const out5 = document.querySelector(".out-5");

function fn5(event) {
  const dataValue = event.currentTarget.getAttribute("data");

  arr5_res.push(dataValue);

  out5.textContent = arr5_res.join(", ");
  console.log("🚀 ~ fn5 ~ arr5_res:", arr5_res);

  return arr5_res;
}
pElements.forEach(p => {
  p.onclick = fn5;
});
// Task 6
const str6 = "helloworld";
const arr6_res = [];
const out6 = document.querySelector(".out-6");
const btn6 = document.querySelector(".b-6");
btn6.onclick = fn6;
function fn6() {
  const arr6_res = str6.split("");
  out6.textContent = arr6_res;
  return out6;
}
// Task 7
const str7 = "hello world hi mazai";
const arr7_res = [];
const out7 = document.querySelector(".out-7");
const btn7 = document.querySelector(".b-7");
btn7.onclick = fn7;
function fn7() {
  const arr7_res = str7.split(" ");
  out7.textContent = JSON.stringify(arr7_res);
  return arr7_res;
}
// Task 8
const arr8 = [1, 2, 66, 77, 15];
const out8 = document.querySelector(".out-8");
const btn8 = document.querySelector(".b-8");
btn8.onclick = fn8;
function fn8() {
  let arr8_res = "";
  arr8_res = arr8.join("-");
  out8.textContent = arr8_res;
  return out8;
}

// Task 9
const arr9 = [
  ["hi", "mahai"],
  ["test", "best"],
];
const out9 = document.querySelector(".out-9");
const btn9 = document.querySelector(".b-9");
let arr9_res = "";
btn9.onclick = fn9;
function fn9() {
  arr9_res = arr9.flat().join("-");
  out9.textContent = arr9_res;
  return out9;
}

// Task 10
const arr10 = { name: "ivan", age: 15, sex: 1, id: 45 };
const out10 = document.querySelector(".out-10");
const btn10 = document.querySelector(".b-10");
let arr10_res = "";
btn10.onclick = fn10;
function fn10() {
  const params = new URLSearchParams(arr10);
  arr10_res = params.toString();
  out10.textContent = arr10_res;
  return out10;
}
//TODO: MAP FILTER
// Task 11
const arr11 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];
const out11 = document.querySelector(".out-11");
const btn11 = document.querySelector(".b-11");
let arr11_res = [];
btn11.onclick = fn11;
function fn11() {
  arr11_res = arr11.map(item => item * 2);
  out11.textContent = arr11_res.join(", ");
  return out11;
}

// Task 12
const arr12 = [2, 3, 4, 5, 10, 11, 12];
const out12 = document.querySelector(".out-12");
const btn12 = document.querySelector(".b-12");
let arr12_res = [];
btn12.onclick = fn12;
function fn12() {
  arr12_res = arr12.map(item => item ** 2);
  out12.textContent = JSON.stringify(arr12_res);
  return out12;
}
// Task 13
const arr13 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11];
const out13 = document.querySelector(".out-13");
const btn13 = document.querySelector(".b-13");
let arr13_res = [];
btn13.onclick = () => {
  arr13_res = arr13.map(item => item.toString());
  out13.textContent = JSON.stringify(arr13_res);
};
// Task 14
const arr14 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11];
const out14 = document.querySelector(".out-14");
const btn14 = document.querySelector(".b-14");
let arr14_res = [];
btn14.onclick = () => {
  arr14_res = arr14.filter(item => typeof item === "number");
  out14.textContent = JSON.stringify(arr14_res);
};

// Task 15
const arr15 = [3, 14, 15, 92, "6"];
const out15 = document.querySelector(".out-15");
const btn15 = document.querySelector(".b-15");
let arr15_res = [];
btn15.onclick = () => {
  arr15_res = arr15.filter(item => typeof item === "number" && item % 2 === 0);
  out15.textContent = JSON.stringify(arr15_res);
};
// Task 16
const arr16 = [3, 14, 15, 92, "6", "5", "hello", 32];
const out16 = document.querySelector(".out-16");
const btn16 = document.querySelector(".b-16");
let arr16_res = [];
btn16.onclick = () => {
  arr16_res = arr16.filter(item => typeof item === "number" && item > 14);
  out16.textContent = JSON.stringify(arr16_res);
};
// Task 17
const arr17 = [
  "Alto`s Adventure",
  "Angry Birds 2",
  "Anno 2205",
  "Assassin`s Creed Chronicles",
];
const out17 = document.querySelector(".out-17");
const btn17 = document.querySelector(".b-17");
let arr17_res = [];
btn17.onclick = () => {
  arr17_res = arr17.map(item => item.toLowerCase());
  out17.textContent = JSON.stringify(arr17_res);
};
// Task 18
const arr18 = [3, 14, 15, 92, 7, 32, 59];
const out18 = document.querySelector(".out-18");
const btn18 = document.querySelector(".b-18");
let arr18_res = [];
btn18.onclick = () => {
  arr18.forEach((item, index) => {
    if (item % 2 === 0) {
      arr18_res.push(index);
    }
  });
  out18.textContent = JSON.stringify(arr18_res);
};
// Task 19
const arr19 = [
  "Quantum Break",
  "Gears of War 4",
  "Mass Effect: Andromeda",
  "Far Cry Primal",
];
const out19 = document.querySelector(".out-19");
const btn19 = document.querySelector(".b-19");
btn19.onclick = fn19;
function fn19() {
  arr19.forEach((item, index) => {
    arr19[index] = item.toLowerCase();
  });
  out19.textContent = arr19;
}
// Task 20
const arr20 = [2, 13, 14, -7, 9, 5, 0, -2, 14];
const out20 = document.querySelector(".out-20");
const btn20 = document.querySelector(".b-20");
btn20.onclick = fn20;
function fn20() {
  arr20.forEach((item, index) => {
    if (item < 0) {
      arr20[index] = 0;
    }
  });
  out20.textContent = arr20;
}
// Task 21
const arr21 = [2, 13, 14, -7, 9, 5, 0, -2, 14];
const out21 = document.querySelector(".out-21");
const btn21 = document.querySelector(".b-21");
let arr21_res = [];
btn21.onclick = () => {
  arr21_res = arr21.filter((item, index) => index % 2 === 0);
  return (out21.textContent = arr21_res);
};
// Task 22
const arr22 = [2, 13, 14, -7, 9, 5, 0, -2, 14];
const out22 = document.querySelector(".out-22");
const btn22 = document.querySelector(".b-22");
btn22.onclick = () => {
  return (out22.textContent = Array.isArray(arr22));
};
// Task 23
const arr23 = [2, 13, 14, -7, 9, 5, 0, -2, 14];
const arr23_num = 6;
const out23 = document.querySelector(".out-23");
const btn23 = document.querySelector(".b-23");
btn23.onclick = () => {
  return (out23.textContent = arr23.includes(arr23_num));
};
// Task 24
const arr24 = ["c", "C", "d", "e", "E"];
const arr14_sum = "D";
const out24 = document.querySelector(".out-24");
const btn24 = document.querySelector(".b-24");
btn24.onclick = () => {
  return (out24.textContent = arr24.includes(arr14_sum.toLowerCase()));
};
// Task 25
const arr25 = [
  {
    name: "Mango",
    pnum: "tr7862",
  },
  {
    name: "Poly",
    pnum: "",
  },
  {
    name: "Ajax",
    pnum: "im7961",
  },
  {
    name: "Didi",
    pnum: "tr786259",
  },
];
const out25 = document.querySelector(".out-25");
const btn25 = document.querySelector(".b-25");
btn25.onclick = fn25;
function fn25() {
  const arr25_res = arr25.filter(
    user => user.pnum !== "" && user.pnum.length === 6
  );
  return out25.textContent = JSON.stringify(arr25_res);
}
//? RESULT:
// [
//   {
//     name: "Mango",
//     pnum: "tr7862",
//   },
//   {
//     name: "Ajax",
//     pnum: "im7961",
//   },
// ];
