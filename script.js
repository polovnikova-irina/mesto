//Открытие и закрытие попапа
let popup = document.querySelector('.popup');
let popupContainer = document.querySelector('.popup__container');
let openPopupButton = document.querySelector('.profile__edit-button');
let closePopupButton = document.querySelector('.popup__close-button');


function openPopup() {
  popup.classList.add('popup_opened');
}

openPopupButton.addEventListener('click', openPopup);

function closePopup() {
  popup.classList.remove('popup_opened');
}

closePopupButton.addEventListener('click', closePopup);


//Редактирование имени и информации о себе
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__item_el_title');
let jobInput = document.querySelector('.popup__item_el_subtitle');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let closeSaveInformation = document.querySelector('.popup__save-button');

nameInput.value = profileTitle.textContent;
jobInput.value = profileSubtitle.textContent;

function handleFormSubmit (evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
}

formElement.addEventListener('submit', handleFormSubmit);

closeSaveInformation.addEventListener('click', closePopup);

