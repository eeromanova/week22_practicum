//Задание 1
//Найдите все формы на странице. При нажатии на кнопку выведите количество найденных форм.
//Подсказка: используйте коллекцию document.forms и свойство length

const paragraph = document.getElementById("practicum");

function makeOne() {
  const allFormsCount = document.forms.length;
  paragraph.textContent = allFormsCount;
  //Ваш код
}

document.querySelector(".b-1").onclick = makeOne;

//Задание 2
//Найдите первую форму на странице. При нажатии на кнопку выведите значение атрибута "name" этой формы.
//Подсказка: используйте коллекцию document.forms и метод getAttribute

const paragraphTwo = document.getElementById("practicum2");

function makeTwo() {
  const firstForm = document.forms.formOne;
  const firstFormName = firstForm.getAttribute("name");
  paragraphTwo.textContent = firstFormName;
  //Ваш код
}

document.querySelector(".b-2").onclick = makeTwo;

//Задание 3
//Найдите последнюю форму на странице. При нажатии на кнопку выведите значение атрибута "name" этой формы.
//Подсказка: используйте коллекцию document.forms и метод getAttribute

const paragraphThree = document.getElementById("practicum3");

function makeThree() {
  const lastForm = document.forms.lastForm;
  const lastFormName = lastForm.getAttribute("name");
  paragraphThree.textContent = lastFormName;
  //Ваш код
}

document.querySelector(".b-3").onclick = makeThree;

//Задание 4
//Найдите все формы на странице и выведите их названия
//При нажатии на кнопку выведите названия всех найденных форм, разделенных запятыми
//Подсказка: Для решения задания вы можете использовать следующую логику:
//- Получите все формы на странице, используя коллекцию document.forms
//- Создайте пустой массив formNames для хранения названий форм
//- Пройдитесь по каждой форме в коллекции и для каждой формы
//- Получите значение атрибута name с помощью метода getAttribute
//- Добавьте полученное название в массив formNames
//- Преобразуйте массив formNames в строку, разделив названия запятыми, с помощью метода join()
//- Выведите полученную строку названий форм в элемент с id practicum4 при нажатии на кнопку

const paragraphFour = document.getElementById("practicum4");

function makeFour() {
  const allForms = document.forms;
  const formNames = [];
  for (let form of allForms) {
    const name = form.getAttribute("name");
    formNames.push(name);
  }
  const names = formNames.join(", ");
  paragraphFour.textContent = names;
  //Ваш код
}

document.querySelector(".b-4").onclick = makeFour;

//Задание 5
//Найдите третью форму на странице, используя document.forms и имя формы (которое вы знаете из задания 4)
//Выведите на страницу количество элементов в форме, используя коллекцию form.elements
//Подсказка: используйте коллекцию document.forms для получения формы по индексу и свойство form.elements.length для получения количества элементов в форме

const paragraphFive = document.getElementById("practicum5");

function makeFive() {
  const thirdForm = document.forms.formThree;
  const thirdFormElements = thirdForm.elements.length;
  paragraphFive.textContent = thirdFormElements;
  //Ваш код
}

document.querySelector(".b-5").onclick = makeFive;

//Задание 6
//Найдите вторую форму на странице, используя document.forms и имя формы (которое вы знаете из задания 4)
//Выведите на страницу количество элементов в форме, используя коллекцию form.elements

const paragraphSix = document.getElementById("practicum6");

function makeSix() {
  //Ваш код
  const secondForm = document.forms.formTwo;
  const secondFormElements = secondForm.elements.length;
  paragraphSix.textContent = secondFormElements;
}

document.querySelector(".b-6").onclick = makeSix;

//Задание 7
//Выведите перечисление названий (name) всех элементов второй формы на экран. В задании 6 вы нашли их количество.
//Подсказка:
//- Используйте document.forms для получения коллекции всех форм на странице
//- Найдите вторую форму в коллекции форм, используя индекс 1 (индексы начинаются с 0)
//- Получите коллекцию элементов формы с помощью свойства elements у второй формы
//- Создайте пустую строку elementsList, которая будет хранить перечисление названий элементов
//- Используя цикл for, переберите элементы формы в коллекции formElements
//- Внутри цикла добавьте текущее название элемента формы (свойство name) в elementsList, добавляя дефис перед названием
//- После цикла выведите текст с перечислением элементов в элемент с id practicum7, используя свойство textContent

const paragraphSeven = document.getElementById("practicum7");

function makeSeven() {
  const secondForm = document.forms.formTwo;
  const secondFormElements = secondForm.elements;
  let elementsList = "";
  for (let element of secondFormElements) {
    const name = element.getAttribute("name");
    elementsList = `${elementsList}-${name}`;
  }
  paragraphSeven.textContent = elementsList;
  //Ваш код
}

document.querySelector(".b-7").onclick = makeSeven;

//Задание 8
//Выведите перечисление названий (name) всех элементов первой формы на экран. В задании 5 вы нашли их количество.

const paragraphEight = document.getElementById("practicum8");

function makeEight() {
  const firstForm = document.forms.formOne;
  const firstFormElements = firstForm.elements;
  let elementsList = "";
  for (let element of firstFormElements) {
    const name = element.getAttribute("name");
    elementsList = `${elementsList}-${name}`;
  }
  paragraphEight.textContent = elementsList;
  //Ваш код
}

document.querySelector(".b-8").onclick = makeEight;

//Задание 9
//Найдите третью форму на странице. Выведите перечисление названий (name) всех элементов формы на экран.

const paragraphNine = document.getElementById("practicum9");

function makeNine() {
  const thirdForm = document.forms.formThree;
  const thirdFormElements = thirdForm.elements;
  let elementsList = "";
  for (let element of thirdFormElements) {
    const name = element.getAttribute("name");
    elementsList = `${elementsList}-${name}`;
  }
  paragraphNine.textContent = elementsList;
  //Ваш код
}

document.querySelector(".b-9").onclick = makeNine;

//Задание 10
//Выведите на экран значенеие radio кнопки четвёртой формы на странице
//Подсказка: используйте коллекцию document.forms для доступа к формам, свойство elements для доступа к элементам формы и свойство value для получения значения radio кнопки

const paragraphTen = document.getElementById("practicum10");

function makeTen() {
  const lastForm = document.forms.lastForm;
  const lastFormElement = lastForm.elements.fourthName;
  paragraphTen.textContent = lastFormElement.value;
  //Ваш код
}

document.querySelector(".b-10").onclick = makeTen;

//Задание 11
//Выведите значения всех опций из первой формы
//Подсказка: используйте коллекцию document.forms для доступа к формам, свойство elements для доступа к элементам формы и свойство value для получения значения выбранной опции
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу select с помощью form.elements и сохраните его в переменную
//- Создайте пустую строку optionsValues, которая будет хранить значения всех опций
//- Используйте цикл или метод forEach для перебора опций в коллекции элемента select
//- Внутри цикла получите значение каждой опции с помощью свойства value и добавьте его в optionsValues
//- Выведите значения опций на страницу

const paragraphEleven = document.getElementById("practicum11");

function makeEleven() {
  const firstForm = document.forms.formOne;
  const firstFormOptions = firstForm.elements.firstSelect;
  let optionsValues = "";
  for (let option of firstFormOptions) {
    const value = option.value;
    optionsValues = `${optionsValues} ${value}`;
  }
  // firstFormOptions.forEach((option)=>{
  // 	const value=option.value;
  // 	optionsValues=`${optionsValues}-${value}`;
  // })
  paragraphEleven.textContent = optionsValues;
  //Ваш код
}

document.querySelector(".b-11").onclick = makeEleven;

//Задание 12
//Выведите значения атрибутов id всех чекбоксов (количество: 3) из второй формы
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к чекбоксам с помощью form.elements и сохраните их в переменные
//- Получите значения атрибутов id всех чекбоксов второй формы

const paragraphTwelve = document.getElementById("practicum12");

function makeTwelve() {
  const secondForm = document.forms.formTwo;
  const checkboxOne = secondForm.elements.checkboxOne;
  const checkboxTwo = secondForm.elements.checkboxTwo;
  const checkboxThree = secondForm.elements.checkboxThree;
  const ids = `${checkboxOne.getAttribute("id")} ${checkboxTwo.getAttribute(
    "id"
  )} ${checkboxThree.getAttribute("id")}`;

  paragraphTwelve.textContent = ids;
  //Ваш код
}
//Ваш код

document.querySelector(".b-12").onclick = makeTwelve;

// Задание 13
//Проверьте была ли выбрана кнопка четвёртой формы
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к radio кнопке с помощью form.elements и сохраните её в переменную
//- Используйте условный оператор (if) для проверки выбранности кнопки
//- Если кнопка выбрана, выведите сообщение "Кнопка выбрана" на страницу
//- Если кнопка не выбрана, выведите сообщение "Кнопка не выбрана" на страницу

const paragraphThirteen = document.getElementById("practicum13");


function checkButton(e) {
  e.preventDefault();
  const lastForm = document.forms.lastForm;
  const lastFormElement = lastForm.elements.fourthName;
  if (lastFormElement.checked) {
    paragraphThirteen.textContent = "Кнопка выбрана"
  } else 
  {paragraphThirteen.textContent = "Кнопка не выбрана"}
  //Ваш код
}

document.querySelector(".b-13").addEventListener("click", checkButton);

//Задание 14
//Проверьте какой вариант выбран в первой форме
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу select с помощью form.elements и сохраните его в переменную
//- Установите выбранным второй вариант: select.selectedIndex = 1;
//- Используйте свойство value выбранной опции для получения выбранного варианта
//- Используйте условный оператор (if) для проверки выбранного варианта
//- Если выбран первый вариант, выведите сообщение "Выбран первый вариант" на страницу
//- Если выбран второй вариант, выведите сообщение "Выбран второй вариант" на страницу
//- Если выбран третий вариант, выведите сообщение "Выбран третий вариант" на страницу

const paragraphFourteen = document.getElementById("practicum14");

function checkOption() {
  const firstForm = document.forms.formOne;
  const firstFormOptions = firstForm.elements.firstSelect;
  firstFormOptions.selectedIndex = 1;
  const value = firstFormOptions.value;
  if (value === "Опция 1") {
    paragraphFourteen.textContent = "Выбран первый вариант";
  } else if (value === "Опция 2") {
    paragraphFourteen.textContent = "Выбран второй вариант";
  } else if (value === "Опция 3"){
    paragraphFourteen.textContent = "Выбран третий вариант";
  }
}

//Ваш код

document.querySelector(".b-14").onclick = checkOption;

//Задание 15
//Добавьте в первую форму выбранную Опцию 3 по умолчанию
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу select с помощью form.elements и сохраните его в переменную
//- Используйте свойство selectedIndex элемента select, чтобы установить выбранный индекс опции по умолчанию
//- Установите значение selectedIndex равным индексу опции, которую вы хотите выбрать по умолчанию

function makeFifteen() {
  const firstForm = document.forms.formOne;
  const firstFormOptions = firstForm.elements.firstSelect;
  firstFormOptions.selectedIndex = 0;
  //Ваш код
}

makeFifteen();

//Задание 16
//Добавьте во вторую форму выбранный Вариант 3 по умолчанию
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу checkbox с помощью form.elements и сохраните его в переменную
//- Используйте свойство checked элемента checkbox, чтобы установить его выбранным по умолчанию
//- Установите значение checked равным true для выбранного варианта

function makeSixteen() {
  const secondForm = document.forms.formTwo;
  const checkboxThree = secondForm.elements.checkboxThree;
  checkboxThree.checked = "true";
  //Ваш код
}

makeSixteen();

//Задание 17
//Проверьте, заполнены ли все поля первой формы перед отправкой
//Подсказка:
//- Получите доступ к каждому полю формы с помощью form.elements и сохраните их в соответствующие переменные
//- Используйте условные операторы (if) для проверки каждого поля на заполненность
//- Если хотя бы одно поле не заполнено, выведите сообщение об ошибке на страницу (элемент для добавления ошибки создан: <p class="error-message" id="errorMessage"></p>)
//- Добавьте слушатель события submit к форме, чтобы выполнить проверку перед отправкой
//- В обработчике события вызовите метод event.preventDefault() для отмены отправки формы в случае ошибки

const formOne = document.forms.formOne;
const firstName = formOne.elements.firstName;
const firstEmail = formOne.elements.firstEmail;
const firstSelect = formOne.elements.firstSelect;
let error = "";
formOne.addEventListener("submit", function (event) {
  event.preventDefault(); //Отмена отправки
  if (!firstName.value ||!firstEmail.value||!firstSelect.value) {
    error = "error";
  }
  if (error === "error") {
    document.getElementById("errorMessage").textContent =
      "Ошибка: одно или несколько полей не заполнено";
  }
  //Ваш код
});

//Задание 18
//Очистите все поля первой формы после отправки
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Используйте метод reset() формы, чтобы очистить все её поля после отправки
//- Добавьте слушатель события addEventListener на первую форму, как вы делали в задании 17
//- В обработчике события вызовите метод event.preventDefault() для отмены отправки формы в случае ошибки

formOne.addEventListener("submit", function (event) {
  event.preventDefault(); //Отмена отправки
  formOne.reset();
  //Ваш код
});

//Задание 19
//При выборе определенной опции из выпадающего списка измените цвет фона страницы
//Подсказка:
//- Получите доступ к элементу select с помощью document.getElementById или другим методом выборки элементов и сохраните его в переменную
//- Используйте событие onchange для отслеживания изменений в выборе опции
//- В обработчике события, используя условные операторы (if), проверьте выбранную опцию
//- В зависимости от выбранной опции, измените цвет фона страницы, используя свойство document.body.style.backgroundColor


firstSelect.onchange = function () {
	if (firstSelect.value==="Опция 1"){document.body.style.backgroundColor='grey'};
	if (firstSelect.value==="Опция 2"){document.body.style.backgroundColor='green'};
	if (firstSelect.value==="Опция 3"){document.body.style.backgroundColor='white'};
	//Ваш код
};

//Задание 20
//Добавьте валидацию для поля Email
//Подсказка:
//- Получите доступ к первой форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к полю Email с помощью form.elements и сохраните его в переменную
//- Используйте событие oninput для отслеживания изменений в поле Email
//- В обработчике события, используя регулярное выражение (RegExp), проверьте введенное значение поля Email
//- В зависимости от результата проверки, измените стиль поля Email (например, установите класс с ошибкой) и отобразите сообщение об ошибке в элементе <p> (добавьте элемент самостоятельно) с помощью свойства textContent.


const errorMessage = document.getElementById("errorMessage");

firstEmail.oninput = function () {
	const regexp=/^[^\s@]+@[^\s@]+.[^\s@]+$/;
	//Ваш код
	let checkEmail=regexp.test(firstEmail.value);
	if (!checkEmail)
	{firstEmail.style.backgroundColor='pink';
	errorMessage.textContent ="Неверный формат E-mail";}
};

//Задание 21
//При отправке второй формы выполняется проверка всех чекбоксов. Если ни один из чекбоксов не выбран, отмените отправку формы и выведите сообщение об ошибке в элементе с id "result21".

document.querySelector(".b-21").onclick = function (event) {
  const checkboxes = document.forms.formTwo.querySelectorAll(
    'input[type="checkbox"]'
  );
  let isChecked = false;

  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      isChecked = true;
    }
  });

  if (!isChecked) {
	event.preventDefault();
	document.getElementById("result21").textContent = "Ошибка: варианты не выбраны";
    //Ваш код
  } else {
    document.getElementById("result21").textContent = "Проверка пройдена";
  }
};

//Задание 22
//При отправке третьей формы выполняется проверка поля Имя на заполненность. Если поле Имя пустое, отмените отправку формы и выведите сообщение об ошибке в элементе с id "result22".

document.querySelector(".b-22").onclick = function (event) {
  const nameInput = document.forms.formThree.elements.thirdName;

  if (nameInput.value.trim() === "") {
	event.preventDefault();
	document.getElementById("result22").textContent = "Поле Имя не заполнено";
    //Ваш код
  } else {
    document.getElementById("result22").textContent = "Проверка пройдена";
  }
};

//Задание 23
//При выборе опции "Я хочу зарегистрироваться" в четвёртой форме кнопка должна быть разблокирована. В противном случае, сделайте кнопку отправки формы заблокированной.
//Подсказка: используйте свойство disabled
const lastForm = document.forms.lastForm;
const lastFormButton = lastForm.elements.fourthButton;
const lastFormCheckbox=lastForm.elements.fourthName;
lastFormCheckbox.addEventListener(
  "change",
  () => {
    if (!lastFormCheckbox.checked) {lastFormButton.disabled=true}
    else {lastFormButton.disabled=false}
  }
);



//Задание 24
//Найдите все поля ввода на странице и установите им атрибут "placeholder" со значением "Введите данные"
//Подсказка: для установки атрибута используйте методы forEach и setAttribute

document.querySelector(".b-24").onclick = function () {
  const inputs = document.querySelectorAll("input");
  for (let i=0; i<inputs.length; i++){
    inputs[i].setAttribute('placeholder', "Введите данные");
  }
  //Ваш код
};

//Задание 25
//При фокусе на любом поле ввода измените его границу на цвет "#00ff00". При потере фокуса восстановите стандартную границу.

document.querySelector(".b-25").onclick = function () {
  const inputs = document.querySelectorAll("input");
  inputs.forEach(function (input) {
    input.addEventListener("focus", function (event) {
      input.style.borderColor="#00ff00";
      //Ваш код
    });

    input.addEventListener("blur", function () {
      input.style.borderColor="#bbb";
      //Ваш код
    });
  });
};

//Задание 26
//При нажатии на кнопку "Задание 26" отобразите в элементе с id "result26" значение placeholder из поля имя в третьей форме

document.querySelector(".b-26").onclick = function (event) {
  event.preventDefault();
  const paragraphTwentySix=document.getElementById('result26');
  const thirdForm = document.forms.formThree;
  const thirdName = thirdForm.elements.thirdName;
  paragraphTwentySix.textContent=thirdName.getAttribute('placeholder');
  //Ваш код
};

//Задание 27
//При изменении значения любого из полей второй формы отобразите сообщение с текстом "Изменение внесено" в элементе с id "result27"

const formTwoInputs = document.querySelectorAll(".secondForm input");

formTwoInputs.forEach(function (input) {
  input.addEventListener("input", function () {
    const paragraphTwentySeven=document.getElementById('result27');
    paragraphTwentySeven.textContent="Изменение внесено";
    //Ваш код
  });
});

//Задание 28
//При выборе любой из опций выпадающего списка в первой форме отобразите сообщение с текстом "Опция выбрана" в элементе с id "result28"

const selectFormThree = document.getElementById("firstSelect");

selectFormThree.addEventListener("change", function () {
  const paragraphTwentyEight=document.getElementById('result28');
  paragraphTwentyEight.textContent="Опция выбрана";
  //Ваш код
});

//Задание 29
//При заполнении всех полей третьей формы выведите их значения в консоль. Используйте JavaScript без использования объекта FormData.

const formThree = document.forms.formThree;
const nameInputThree = formThree.elements.thirdName;
const emailInputThree = formThree.elements.thirdEmail;

function handleSubmitTwentyNine(event) {
  event.preventDefault();

  if (nameInputThree.value && emailInputThree.value) {
    console.log(`${nameInputThree.value}, ${emailInputThree.value}`);
    //Ваш код
  } else {
    console.log("Пожалуйста, заполните все поля формы.");
  }
}

formThree.addEventListener("submit", handleSubmitTwentyNine);

//Задание 30
//При отправке второй формы выведите значения выбранных вариантов в консоль

const formTwo = document.forms.formTwo;
const resultElement = document.getElementById("result30");

formTwo.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const checkboxes = formTwo.querySelectorAll('input[type="checkbox"]:checked');
  const selectedOptions = Array.from(checkboxes).map(
    (checkbox) => checkbox.labels[0].textContent
  );
  console.log(selectedOptions.join(', '));
  resultElement.textContent=selectedOptions.join(', ');

  //Ваш код
}
