console.log("Завдання: 2 ==============================");

// Створюємо функцію task2
function task2() {
  // Створюємо функцію promise1
  function promise1() {
    // Повертаємо новий проміс
    return new Promise((resolve, reject) => {
      // Використовуємо setTimeout для імітації асинхронної операції, яка завершується через 2 секунди.
      setTimeout(() => resolve("Проміс 1 виконано"), 2000);
    });
  }
  // Після 2 секунд викликаємо resolve з результатом проміса, який є рядком "Проміс 1 виконано"
  // Створюємо функцію promise2
  function promise2() {
    // Повертаємо новий проміс
    return new Promise((resolve, reject) => {
      // Використовуємо setTimeout для імітації асинхронної операції, яка завершується через 5 секунди.
      // Після 5 секунд викликаємо resolve з результатом проміса, який є рядком "Проміс 2 виконано"
      setTimeout(() => resolve("Проміс 2 виконано"), 5000);
    });
  }
  // Використовуємо Promise.race для визначення, який проміс виконується першим.
  let result = Promise.race([promise1(), promise2()]);
  // Метод повертає новий проміс, який вирішується або відхиляється негайно після розв'язання або відхилення будь-якого з промісів у переданому списку.
  // У разі успіху виводимо результат
  result.then((value) => console.log(value));
  // У разі помилки виводимо повідомлення про помилку
  result.catch(new Error("Error"));
  // Незалежно від результату, виводимо повідомлення про завершення обробки промісів, який є рядом "Завдання 2 завершено"
  result.finally(() => console.log("Завдання 2 завершено"));
}

// Викликаємо функцію task2
task2();
