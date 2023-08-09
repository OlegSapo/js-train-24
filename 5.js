console.log("Завдання: 5 ==============================");

// Створюємо функцію task5, яка буде використовувати проміси.
function task5() {
  // Створюємо змінну counter яка буде лічильником та присвоюємо значення 0
  let counter = 0;
  // Створюємо проміс з іменем intervalPromise.
  let intervalPromise = new Promise((resolve, reject) => {
    // Використовуємо функцію setInterval, щоб імітувати асинхронну операцію яка повторюється кожну секунду
    // збільшуючи лічильник на 1
    // Виводимо в консоль `Значення лічильника: ${counter}`
    let intervalId = setInterval(() => {
      counter++;
      console.log(`Значення лічильника: ${counter}`);
      // Коли лічильник досягає 5, використовуємо clearInterval та викликаємо resolve, який повертає значення лічильника.
      if (counter >= 5) {
        clearInterval(intervalId);
        resolve(counter);
      }
    }, 1000);
  });
  // Використовуємо .then метод для отримання значення, яке було передане у функцію resolve() в нашому промісі, та виводимо його в консоль.
  intervalPromise.then((value) => console.log(value));
  // Використовуємо .catch метод для обробки випадків, коли проміс переходить в стан "rejected". Та виводимо в консоль помилку.
  intervalPromise.catch(new Error(() => console.log("Error")));
  // Обробляємо помилку, якщо вона виникне
  // Ми використовуємо .finally метод для виконання дій незалежно від того, в якому стані завершився наш проміс, та виводимо повідомлення "Завершення лічильника"
  intervalPromise.finally(() => console.log("Завершення лічильника"));
  // Виконуємо код після завершення проміса
}
// Викликаємо функцію task5
task5();
