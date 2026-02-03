//Підрахунок кількості повторень
//Дано масив:
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const btn2 = document.querySelector(".btn2")
const countFruits = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
console.log("🚀 ~ countFruits:", countFruits)

//Завдання: За допомогою reduce підрахуйте, скільки разів кожен фрукт зустрічається в масиві.
//Очікуваний результат:
//{
 // apple: 3,
 // banana: 2,
 // orange: 1
//}
