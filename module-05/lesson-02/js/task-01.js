// Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім"я користувача через prompt та викликає callback функцію
// greet(name) - колбек, що приймає ім"я та виводить у консоль рядок "Привіт < name > "
// Потрібно реалізувати перевірку, що prompt не порожній
function letMeSeeYourName(callback) {
  const name = prompt("Введіть ваше ім'я");
  if (name && name.trim() !== "") {
    callback(name);
  } else {
    console.log("Ім'я не виведено!");
    };
}
function greet(name) {
  console.log(`Привіт ${name}`);
};
document.querySelector(".btn1").addEventListener("click", () => {
    letMeSeeYourName(greet);
})
