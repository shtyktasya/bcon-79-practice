

// 1

const a = 7;
const b = 9;
const result1 = a * b;
console.log("🚀 ~ result1:", result1);


//Task 2//
const out2 = document.querySelector(".out-2");
const c = 7;
const d = 9;
out2.textContent = c / d;
console.log("🚀 ~ out2:", out2);

//Task 3//
const out3 = document.querySelector(".out-3");
const e = 3;
const f = 5;
out3.textContent = e + f;
console.log("🚀 ~ out3:", out3);

//Task 4//
const out4 = document.querySelector(".out-4");
const e1 = "3";
const f1 = 5;
out4.textContent = e1 + f1;
console.log("🚀 ~ out4:", out4);

//Task 5//
const out5 = document.querySelector(".out-5");
const e2 = 3;
const f2 = 0;
out5.textContent = e2 / f2;
console.log("🚀 ~ out5:", out5);

//Task 6//
const out6 = document.querySelector(".out-6");
const e3 = 3;
const f3 = "Hello";
out6.textContent = e3 + f3;
console.log("🚀 ~ out6:", out6);

//Task 7//
const out7 = document.querySelector(".out-7");
const e4 = 3;
const f4 = "Hello";
out7.textContent = e4 * f4;
console.log("🚀 ~ out7:", out7);

//Task 8//
const btn8 = document.querySelector(".b-8");
const input8 = document.querySelector(".i-8");
const out8 = document.querySelector(".out-8");

btn8.onclick = fn8;

function fn8() {
  const userInput8 = input8.value;
  out8.textContent = userInput8;
  input8.value = "";
}

//task 9
const btn9 = document.querySelector(".b-9");
const input9 = document.querySelector(".i-9");
const out9 = document.querySelector(".out-9");
btn9.onclick = t9;

function t9() {
  out9.textContent = input9.value;
  input9.value = "";
}

//Task 10//
const btn10 = document.querySelector(".b-10");
const out10 = document.querySelector(".out-10");
const input10 = document.querySelector(".i-10");

btn10.onclick = t10;

function t10() {
  out10.textContent = input10.value * 20;
  input10.value = "";
}

//Task 11//
const btn11 = document.querySelector(".b-11");
const out11 = document.querySelector(".out-11");
const input11 = document.querySelector(".i-11");

btn11.onclick = t11;

function t11() {
  out11.textContent = input11.value + 55;
  input11.value = "";
}

//Task 12//
const btn12 = document.querySelector(".b-12");
const inputFirstName = document.querySelector(".i-12-2");
const inputLastName = document.querySelector(".i-12-1");
const out12 = document.querySelector(".out-12");
btn12.onclick = t12;

function t12() {
  //out12.textContent = "Hello " + inputLastName.value + " " + inputFirstName.value;//
  out12.textContent = `Hello ${inputLastName.value} ${inputFirstName.value}`;
}

//Task 13//
const btn13 = document.querySelector(".b-13");
const input13_1 = document.querySelector(".i-13-1");
const input13_2 = document.querySelector(".i-13-2");
const out13 = document.querySelector(".out-13");
btn13.onclick = t13;

function t13() {
  const a = Number(input13_1.value);
  const b = Number(input13_2.value);
  out13.textContent = `${a + b}`;
}

//Task 14//
const btn14 = document.querySelector(".b-14");
const input14 = document.querySelector(".i-14");
btn14.onclick = t14;

function t14() {
  input14.value = "Go";
}

//Task 15//
const btn15 = document.querySelector(".b-15");
const input15 = document.querySelector(".i-15");
btn15.onclick = t15;

function t15() {
  input15.style.border = "4px solid red";
}

//Task 16//
const btn16 = document.querySelector(".b-16");
const input16_1 = document.querySelector(".i-16-1");
const input16_2 = document.querySelector(".i-16-2");
const out16 = document.querySelector(".out-16");
btn16.onclick = t16;

function t16() {
  out16.textContent = input16_1.value + input16_2.value;
}

//Task 17//
const btn17 = document.querySelector(".b-17");
const input17 = document.querySelector(".i-17");
const out17 = document.querySelector(".out-17-1");
btn17.onclick = t17;

function t17() {
  out17.textContent = Number.parseFloat(input17.value);
  input17.value = "";
}

//Task 18//
const btn18 = document.querySelector(".b-18");
const input18 = document.querySelector(".i-18");
const out18 = document.querySelector(".out-18");
btn18.onclick = t18;

function t18() {
  const a = Number.parseFloat(input18.value);
  out18.textContent = a;
  input18.value = "";
}

//Task 19//
const btn19 = document.querySelector(".b-19");
const input19_1 = document.querySelector(".i-19-1");
const input19_2 = document.querySelector(".i-19-2");
const out19 = document.querySelector(".out-19");
btn19.onclick = t19;

function t19() {
  out19.textContent =
    Number.parseFloat(input19_1.value) + Number.parseFloat(input19_2.value);
  input19_1.value = "";
  input19_2.value = "";
}

//Task 20//
const btn20 = document.querySelector(".b-20");
const out20 = document.querySelector(".out-20");
let i = 0;
btn20.onclick = t20;

function t20() {
  out20.textContent = `Clicks: ${++i}`;
}
