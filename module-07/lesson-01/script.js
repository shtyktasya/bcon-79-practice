// Task 01
function fn1() {
  document.querySelector(".out-1").textContent = 1;
}
document.querySelector(".b-1").addEventListener("click", fn1);
// Task 02
function fn2() {
  document.querySelector(".out-2").textContent = 2;
}
document.querySelector(".i-2").addEventListener("click", fn2);
// Task 03
function fn3() {
  document.querySelector(".out-3").textContent = 3;
}
document.querySelector(".p-3").addEventListener("click", fn3);
// Task 04
function fn4() {
  const checkbox = document.querySelector(".i-4");
  document.querySelector(".out-4").textContent =
    document.querySelector(".i-4").checked;
}
document.querySelector(".b-4").addEventListener("click", fn4);
// Task 05
const btn5 = document.querySelector(".b-5");
btn5.onclick = fn5;
function fn5() {
  const checkbox = document.querySelector(".i-5");
  const out5 = document.querySelector(".out-5");
  out5.textContent = checkbox.checked ? checkbox.value : false;
}
// Task 06
const btn6 = document.querySelector(".b-6");
const out6 = document.querySelector(".out-6");
const i6 = document.querySelector(".i-6");
btn6.onclick = fn6;
function fn6() {
  out6.textContent = i6.value;
}
// Task 07
const out71 = document.querySelector(".out-71");
const out72 = document.querySelector(".out-72");
const i7 = document.querySelector(".i-7");
const btn7 = document.querySelector(".b-7");
btn7.onclick = fn7;
function fn7() {
  out71.textContent = i7.value;
  out72.textContent = i7.value.length >= 6 ? 1 : 0;
}
// Task 08
const btn8 = document.querySelector(".b-8");
const out8 = document.querySelector(".out-8");
btn8.onclick = fn8;
function fn8() {
  out8.innerHTML = '<div class = "js2">new div</div>';
}
// Task 09
const btn9 = document.querySelector(".b-9");
const out9 = document.querySelector(".out-9");
const radiobox = document.querySelector(".r-9");
btn9.onclick = fn9;
function fn9() {
  out9.textContent = radiobox.checked ? "value radiobutton" : false;
}
// Task 10
const btn10 = document.querySelector(".b-10");
const i10 = document.querySelector(".i-10");
const out10 = document.querySelector(".out-10");
btn10.onclick = fn10;
function fn10() {
  out10.style.background = i10.value;
}
// Task 11
const btn11 = document.querySelector(".b-11");
const in111 = document.querySelector(".i-111");
const in112 = document.querySelector(".i-112");
btn11.onclick = fn11;
function fn11() {
  in112.value = in111.value;
}
// Task 12
const btn12 = document.querySelector(".b-12");
const out12 = document.querySelector(".out-12");
const in12 = document.querySelector(".i-12");
btn12.onclick = fn12;
function fn12() {
  out12.textContent = in12.value;
}
// Task 13
const slider = document.querySelector(".i-13");
const out13 = document.querySelector(".out-13");
slider.addEventListener("input", function () {
  out13.textContent = slider.value;
});
// Task 14

// Task 15

// Task 16

// Task 17

// Task 18

// Task 19

// Task 20
