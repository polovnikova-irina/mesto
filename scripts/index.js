import initialCards from './constants.js';
import { Card } from './card.js';
import { validationConfig } from './formValidator.js';
import { FormValidator } from './formValidator.js';

//popupTypeEditProfile
const popupTypeEditProfile = document.querySelector('.popup_type_edit-profile');
const openPopupBtnEdit = document.querySelector('.profile__edit-button');
const formElementTypeEdit = popupTypeEditProfile.querySelector('.popup__form');
const saveBtnEdit = popupTypeEditProfile.querySelector('.popup__save-button');

const nameInput = document.querySelector('.popup__item_el_title');
const jobInput = document.querySelector('.popup__item_el_subtitle');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

//popupTypeAddCard
const popupTypeAddCard = document.querySelector('.popup_type_add-card');
const openPopupBtnAdd = document.querySelector('.profile__add-button');
const formElementTypeAddCard = popupTypeAddCard.querySelector('.popup__form');
const saveBtnAdd = popupTypeAddCard.querySelector('.popup__save-button');

const namePhotoInput = document.querySelector('.popup__item_el_photo-name');
const nameLinkInput = document.querySelector('.popup__item_el_link');

//photoTemplate
const cardContainer = document.querySelector('.photo');

//popupTypeZoomImage
const popupTypeZoomImage = document.querySelector('.popup_type_zoom-image');
const zoomImage = document.querySelector('.popup__image_type_zoom-image');
const zoomImageTitle = document.querySelector('.popup__caption_type_zoom-image');


//ф-я закрытия попапов нажатием на эск и оверлей
const handlePopupClose = (evt) => {
  const isOverlay = evt.target.classList.contains('popup');
  const isCloseBtn = evt.target.classList.contains('popup__close-button');
  if (isOverlay || isCloseBtn) {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
};

const handlePopupKeyDownByEsc = (evt) => {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
};

//общая функция открытия попапов
const openPopup = (popupType) => {
  popupType.classList.add('popup_opened');
  document.addEventListener('keydown', handlePopupKeyDownByEsc);
  document.addEventListener('click', handlePopupClose);
};

//открытие попапа редактировать профиль
openPopupBtnEdit.addEventListener('click', function() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  saveBtnEdit.classList.add('popup__save-button_inactive');
  saveBtnEdit.setAttribute('disabled', true);
  openPopup(popupTypeEditProfile);
  formElementEditProfile._resetValidation();
});

//открытие попапа добавить карточки
openPopupBtnAdd.addEventListener('click', function() {
  saveBtnAdd.classList.add('popup__save-button_inactive');
  saveBtnAdd.setAttribute('disabled', true);
  openPopup(popupTypeAddCard);
});


//общая функция закрытия попапов
const closePopup = (popupType) => {
  popupType.classList.remove('popup_opened');
  document.removeEventListener('keydown', handlePopupKeyDownByEsc);
  document.removeEventListener('click', handlePopupClose);
};

//ф-я редактирования профиля при заполнении
function handleFormSubmitEditProfile(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popupTypeEditProfile);
}

formElementTypeEdit.addEventListener('submit', handleFormSubmitEditProfile);

//ф-я увеличения фото
const openZoomImage = (cardData) => {
  openPopup(popupTypeZoomImage);
  zoomImage.src = cardData.link;
  zoomImage.alt = cardData.name;
  zoomImageTitle.textContent = cardData.name;
};

//coздание начальных карточек при загрузке страницы
initialCards.forEach((item) => {
  const card = new Card(item, 'photo-template', openZoomImage);
  const cardElement = card.generateCard();
  cardContainer.prepend(cardElement);
});

//ф-я создания и добавления новой карточки в контейнер
const handleAddFormSubmit = (evt) => {
  evt.preventDefault();

    const card = {
    name: namePhotoInput.value,
    link: nameLinkInput.value
  };

  const element = new Card(card, 'photo-template', openZoomImage);
  cardContainer.prepend(element.generateCard());
  console.log(element)
  console.log(cardContainer)
  formElementTypeAddCard.reset();

 closePopup(popupTypeAddCard)
};

formElementTypeAddCard.addEventListener('submit', handleAddFormSubmit);

//Валидация форм
const formElementEditProfile = new FormValidator(validationConfig, formElementTypeEdit);
formElementEditProfile.enableValidation();

const formElementAddCard = new FormValidator(validationConfig, formElementTypeAddCard);
formElementAddCard.enableValidation();






