import './index.css';

import {
  initialCards,
  validationConfig,
  openPopupBtnEdit,
  formElementTypeEdit,
  openPopupBtnAdd,
  formElementTypeAddCard,
  cardContainer,
} from "../scripts/utils/constants.js";
import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import Section from "../scripts/components/Section.js";
import Popup from "../scripts/components/Popup.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import UserInfo from "../scripts/components/UserInfo.js";

//Валидация формы редактирования
const formElementEditProfile = new FormValidator(
  validationConfig,
  formElementTypeEdit
);
formElementEditProfile.enableValidation();

//Валидация формы добавления карточек
const formElementAddCard = new FormValidator(
  validationConfig,
  formElementTypeAddCard
);
formElementAddCard.enableValidation();

//userInfo
const userInfo = new UserInfo(".profile__title", ".profile__subtitle");

//Принятие новых данных пользователя и добавление их на страницу
const popupProfile = new PopupWithForm({
  handleFormSubmit: (formData) => {
    userInfo.setUserInfo(formData);
    popupProfile.close();
  }
},
  '.popup_type_edit-profile'
)

popupProfile.setEventListeners();

//Открытие попапа редактирования профиля
const openPopupEditProfile = new Popup('.popup_type_edit-profile');
openPopupBtnEdit.addEventListener('click', () => {
  const currentUserInfo = userInfo.getUserInfo();
  openPopupEditProfile.openWithValues(currentUserInfo);
  formElementEditProfile.disableSubmitButton();
  formElementEditProfile.resetValidation();
});
openPopupEditProfile.setEventListeners();

//Увеличить карточку
const popupWithImage = new PopupWithImage('.popup_type_zoom-image');

//Открытие попапа добавления карточки
const openPopupAddCard = new Popup('.popup_type_add-card');
openPopupBtnAdd.addEventListener('click', () => {
  openPopupAddCard.open();
  formElementAddCard.disableSubmitButton();
  formElementAddCard.resetValidation();
});
openPopupAddCard.setEventListeners();

//создание и добавление карточки
const renderCard = (data) => {
  const card = new Card(data, "photo-template", popupWithImage);
    const cardElement = card.generateCard();
    section.addItem(cardElement);
}

//Добавление начальных карточек
const section = new Section({
  items: initialCards,
  renderer: (cardData) => {
    renderCard(cardData)
  }
}, cardContainer);

popupWithImage.setEventListeners();

section.renderItem();

// Создание и добавление новых карточек при заполнении полей поп-апа
const popupAddCard = new PopupWithForm({
  handleFormSubmit: (formData) => {
    renderCard(formData)
    popupAddCard.close();
  }
}, '.popup_type_add-card');

popupAddCard.setEventListeners();


