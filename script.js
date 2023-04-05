let popup = document.querySelector(".popup");
let popupContainer = document.querySelector(".popup__container");
let openPopupButton = document.querySelectorAll('.profile__edit-button');
let closePopupButton = document.querySelector(".popup__close-button");

openPopupButton.forEach((button) => { // Перебираем все кнопки
  button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
      e.preventDefault(); // Предотвращаем дефолтное поведение браузера
      popup.classList.add('popup_opened'); // Добавляем класс 'active' для фона
      popupContainer.classList.add('popup__container_opened'); // И для самого окна
  })
});

closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
  popup.classList.remove('popup_opened'); // Убираем активный класс с фона
  popupContainer.classList.remove('popup__container_opened'); // И с окна
});

