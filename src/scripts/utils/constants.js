export const initialCards = [

  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },

  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },

  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },

  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },

  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },

  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }

];

export const validationConfig = {
  inputSelector: ".popup__item", //сама строка инпута
  submitButtonSelector: ".popup__save-button", //кнопка черная
  inactiveButtonClass: "popup__save-button_inactive", //кнопка белая
  inputErrorClass: "popup__item_type_error", //красн линия
  errorClass: "popup__item-error_active", //опасити 1 чтобы текст ошибки отображался
};

export const infoConfig = {
  nameSelector: ".profile__title",
  jobSelector: ".profile__subtitle",
  avatar: "profile__avatar"
};

//popupTypeEditProfile
const popupTypeEditProfile = document.querySelector('.popup_type_edit-profile');
export const openPopupBtnEdit = document.querySelector(".profile__edit-button");
export const formElementTypeEdit = popupTypeEditProfile.querySelector(".popup__form");

//popupTypeAddCard
const popupTypeAddCard = document.querySelector(".popup_type_add-card");
export const openPopupBtnAdd = document.querySelector(".profile__add-button");
export const formElementTypeAddCard = popupTypeAddCard.querySelector(".popup__form");

//photoTemplate
export const cardContainer = '.photo';
