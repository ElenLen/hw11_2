//для работы всего сценария в «современном» режиме.
"use strict";

//Получаем необходимые элементы DOM
// поле ввода
const taskInput = document.getElementById("taskInput");
// кнока добавить
const addButton = document.getElementById("addButton");
// список
const taskList = document.getElementById("taskList");

//Обработчик события клика на кнопку "Добавить"
addButton.addEventListener("click", function () {
  //Получаем значение, введенное в поле ввода
  const taskText = taskInput.value;

  //Создаём новый элемент списка
  const newTask = document.createElement("li");

  //Устанавливаем текст задачи внутри созданного элемента списка
  newTask.textContent = taskText;

  //Добавляем созданный элемент списка в нужное место на странице
  taskList.append(newTask);

  //Очищаем поле ввода после добавления задачи
  taskInput.value = "";
});

// Обработчик при нажатии на запись в списке
taskList.addEventListener("click", function (evt) {
  // Проверяем, что кликнули на элемент списка
  const evtTarget = evt.target;
  // Если условие выполняется, то переключаем состояние выполнения задачи,
  //добавляя или удаляя класс у элемента списка (element.classList.toggle)
  if (evt.target.tagName === "LI") {
    // оформляем зачеркнутый стиль
    evtTarget.classList.toggle(`completed`);
  }
});
