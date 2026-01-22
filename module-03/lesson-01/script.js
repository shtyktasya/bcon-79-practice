// Task-1

// Task-2
<<<<<<< HEAD
const btn2 = document.querySelector(".b-2");
const ar2 = ["random", true, 2, 15, -5];
btn2.onclick = fn2;
function fn2() {
const out2 = document.querySelector(".out-2");
out2.textContent = `[${ar1}]`;

}


// Task-3
const btn3 = document.querySelector(".b-3");
const ar3 = ["random", true, 2, 15, -5];

btn3.onclick = fn3;

function fn3() {
const out3 = document.querySelector(".out-3");

out3.textContent = ar3.length;
}


// Task-4
const btn4 = document.querySelector(".b-4");
const ar4 = Array.from(Array(10).keys(), x => x + 1);
// the same as Array.from(Array(10).keys(), x => x + 1);      const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

btn4.onclick = fn4;

function fn4() {
const out4 = document.querySelector(".out-4");

out4.textContent = `${ar4[0]} ${ar4[3]} ${ar4[8]}`;
}




// Task-5
const btn5 = document.querySelector(".b-5");
const ar5 = Array.from(Array(10).keys(), x => (x + 1)*10);

btn5.onclick = fn5;

function fn5() {
const out5 = document.querySelector(".out-5");

out5.textContent = `${ar5[0]} ${ar5[2]} ${ar5[3]}`;
}

=======

// Task-3

// Task-4

// Task-5
>>>>>>> 77403f07b994e9760bc20805296fd1904b6c1ff1

// Task-6

// Task-7

// Task-8

// Task-9

<<<<<<< HEAD

const btn9 = document.querySelector(".b-9");
const ar9 = document.querySelector(".out-9");
const out9 = document.querySelector(".out-9");

// const arr8 = [];

// btn8.onclick = fn8;

 //function fn9() 
//const last
// }
// Task-10



function f10() {
  const lastI = ar10.length - 1;
  const out11 = document.querySelector
}
// Task-11

const ar11 = [2, 3, 4, 5, 6, 7];
const btn11 = document.querySelector(".b-11");
const out11 = document.querySelector(".out-11");

btn12.onclick = f11;


function f11() {
  
}
=======
// Task-10

// Task-11

>>>>>>> 77403f07b994e9760bc20805296fd1904b6c1ff1
// Task-12

// Task-13

// Task-14

// Task-15

// Task-16

<<<<<<< HEAD
const ar16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
const btn16 = document.querySelector(".b-16");
const out161 = document.querySelector(".out-16-odd");
const out162 = document.querySelector(".out-16-even");

btn16.onclick = f16;

function f16() {
  let ar16_odd = [];
  let ar16_even = [];

// ar16_even[3] = 222 reminde
let oddCounter = 0;
let evenCounter = 0;

  for (let i = 0; i < ar16.length; i++) {

    if (ar16[i] % 2 === 0) {
      ar16_even[evenCounter] = ar16[i];
      evenCounter += 1; //++
    //2 ------   ar16_even.push(ar16[i]);
    } else {
      ar16_odd[oddCounter] = ar16[i];
      oddCounter += 1;
    // 2------  ar16_odd.push(ar16[i]);
     }
   
  }

// 2-----out161.textContent = ar16_even;
// 2------out162.textContent = ar16_odd;
}

// Task-17

const ar17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
const btn17 = document.querySelector(".b-17");
const out17 = document.querySelector(".out-17");

btn17.onclick = f17;

function f17() {

  // 2 -------  let counter = 0;
  let filteredar17 = [];
  for (let i = 0; i < ar17.length; i++) {
    if (ar17[i] > 3) {
      // counter++ 
      filteredar17.push(ar17[i]);
    }
  }

// out17.textContent = counter;
out17.textContent = filteredar17.length;
}
// 3     17.filter(n => n > 3).length

=======
// Task-17

>>>>>>> 77403f07b994e9760bc20805296fd1904b6c1ff1
// Task-18

// Task-19

// Task-20
