import initialCards from "./constants.js";
import { Card } from "./card.js";
import { validationConfig } from "./formValidator.js";
import { FormValidator } from "./formValidator.js";
import Section from "./section.js";
import Popup from "./popup.js";

//popupTypeEditProfile
const popupTypeEditProfile = document.querySelector('.popup_type_edit-profile');
const openPopupBtnEdit = document.querySelector(".profile__edit-button");
const formElementTypeEdit = popupTypeEditProfile.querySelector(".popup__form");

const nameInput = document.querySelector(".popup__item_el_title");
const jobInput = document.querySelector(".popup__item_el_subtitle");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");

//popupTypeAddCard
const popupTypeAddCard = document.querySelector(".popup_type_add-card");
const openPopupBtnAdd = document.querySelector(".profile__add-button");
const formElementTypeAddCard = popupTypeAddCard.querySelector(".popup__form");
const namePhotoInput = document.querySelector(".popup__item_el_photo-name");
const nameLinkInput = document.querySelector(".popup__item_el_link");

//photoTemplate
const cardContainer = '.photo';

//popupTypeZoomImage
const popupTypeZoomImage = document.querySelector(".popup_type_zoom-image");
const zoomImage = document.querySelector(".popup__image_type_zoom-image");
const zoomImageTitle = document.querySelector(".popup__caption_type_zoom-image");

/*//ф-я закрытия попапов нажатием на эск и оверлей
const handlePopupClose = (evt) => {
  const isOverlay = evt.target.classList.contains("popup");
  const isCloseBtn = evt.target.classList.contains("popup__close-button");
  if (isOverlay || isCloseBtn) {
    const popupOpened = document.querySelector(".popup_opened");
    closePopup(popupOpened);
  }
};*/

/*const handlePopupKeyDownByEsc = (evt) => {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector(".popup_opened");
    closePopup(popupOpened);
  }
};*/

/*//общая функция открытия попапов
const openPopup = (popupType) => {
  popupType.classList.add("popup_opened");
  document.addEventListener("keydown", handlePopupKeyDownByEsc);
  document.addEventListener("click", handlePopupClose);
};*/

/*//открытие попапа редактировать профиль
openPopupBtnEdit.addEventListener("click", function () {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  formElementEditProfile.disableSubmitButton();
  openPopup(popupTypeEditProfile);
  formElementEditProfile.resetValidation();
});*/

/*//открытие попапа добавить карточки
openPopupBtnAdd.addEventListener("click", function () {
  formElementAddCard.disableSubmitButton();
  openPopup(popupTypeAddCard);
});*/

/*//общая функция закрытия попапов
const closePopup = (popupType) => {
  popupType.classList.remove("popup_opened");
  document.removeEventListener("keydown", handlePopupKeyDownByEsc);
  document.removeEventListener("click", handlePopupClose);
};*/

//ф-я редактирования профиля при заполнении
function handleFormSubmitEditProfile(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popupTypeEditProfile);
}

formElementTypeEdit.addEventListener("submit", handleFormSubmitEditProfile);

//ф-я увеличения фото
const openZoomImage = (cardData) => {
  openPopup(popupTypeZoomImage);
  zoomImage.src = cardData.link;
  zoomImage.alt = cardData.name;
  zoomImageTitle.textContent = cardData.name;
};

/*//общая функция возвращения новой карточки
  function createCard(cardData) {
  const card = new Card(cardData, "photo-template", openZoomImage);
  const cardElement = card.generateCard();
  return cardElement;
}*/

//общая ф-я добавления карточки в контейнер
function addCard(container, card) {
  container.prepend(card);
}

/*//coздание начальных карточек при загрузке страницы
initialCards.forEach((item) => {
  addCard(cardContainer,createCard(item));
});*/

//ф-я создания и добавления новой карточки в контейнер
const handleAddFormSubmit = (evt) => {
  evt.preventDefault();

  const card = {
    name: namePhotoInput.value,
    link: nameLinkInput.value,
  };

  addCard(cardContainer, createCard(card));

  formElementTypeAddCard.reset();

  closePopup(popupTypeAddCard);
};

formElementTypeAddCard.addEventListener("submit", handleAddFormSubmit);

//Валидация форм
const formElementEditProfile = new FormValidator(
  validationConfig,
  formElementTypeEdit
);
formElementEditProfile.enableValidation();

const formElementAddCard = new FormValidator(
  validationConfig,
  formElementTypeAddCard
);
formElementAddCard.enableValidation();

//создание и добавл карточки инишиалкард в контейнер
const initialCardList = new Section({
  items: initialCards,
  renderer: (cardData) => {
    const card = new Card(cardData, "photo-template", openZoomImage);
    const cardElement = card.generateCard();
    initialCardList.addItem(cardElement);
  }
  },
    cardContainer
)

initialCardList.renderItem();

/*//открытие закрытие попапов
const openPopupBtnEdit = new Popup(popupTypeEditProfile);


const openPopupBtnAdd*/
const popup = new Popup('.popup_type_edit-profile');
openPopupBtnEdit.addEventListener('click', () => {
  popup.openPopup();
});


