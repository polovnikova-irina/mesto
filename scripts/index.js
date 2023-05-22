//import { Card } from './Card';

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
const photoNameInput = document.querySelector('.popup__item_el_photo-name');
const zoomImage = document.querySelector('.popup__image_type_zoom-image');
const zoomImageTitle = document.querySelector('.popup__caption_type_zoom-image');


//function escClosePopup and overlayClosePopup
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


//function openPopup
const openPopup = (popupType) => {
  popupType.classList.add('popup_opened');
  document.addEventListener('keydown', handlePopupKeyDownByEsc);
  document.addEventListener('click', handlePopupClose);
};

openPopupBtnEdit.addEventListener('click', function(evt) {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  //disableBtn(saveBtnEdit, { inactiveButtonClass: 'popup__save-button_inactive'});
  openPopup(popupTypeEditProfile);
});

openPopupBtnAdd.addEventListener('click', function(evt) {
  //disableBtn(saveBtnAdd, { inactiveButtonClass: 'popup__save-button_inactive'});
  openPopup(popupTypeAddCard);
});


//function сlosePopup
const closePopup = (popupType) => {
  popupType.classList.remove('popup_opened');
  document.removeEventListener('keydown', handlePopupKeyDownByEsc);
  document.removeEventListener('click', handlePopupClose);
};

//EditProfile
function handleFormSubmitEditProfile(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popupTypeEditProfile);
}

formElementTypeEdit.addEventListener('submit', handleFormSubmitEditProfile);

//ZoomCard
const zoomCard = (cardData) => {
  openPopup(popupTypeZoomImage);
  zoomImage.src = cardData.link;
  zoomImage.alt = cardData.name;
  zoomImageTitle.textContent = cardData.name;
};

//generate and add Card
initialCards.forEach((item) => {
  const card = new Card(item, 'photo-template');
  const cardElement = card.generateCard();
  cardContainer.prepend(cardElement);
});

//AddPhoto
const handleAddFormSubmit = (evt) => {
  evt.preventDefault();

    const card = {
    name: namePhotoInput.value,
    link: nameLinkInput.value
  };

  const element = createPhotoElement(card);
  photoContainer.prepend(element);

 formElementTypeAddCard.reset();

 closePopup(popupTypeAddCard)
};

formElementTypeAddCard.addEventListener('submit', handleAddFormSubmit);





const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__item_type_error',
  errorClass: 'popup__item-error_active'
};

class FormValidator {
  constructor(obj, formElement) {
    this._inputSelector = obj.inputSelector;
    this._submitButtonSelector = obj.submitButtonSelector;
    this._inactiveButtonClass = obj.inactiveButtonClass;
    this._inputErrorClass = obj.inputErrorClass;
    this._errorClass = obj.errorClass;
    this._formElement = formElement;
  }

  _showInputError(errorTextElement, input) {
    input.classList.add(this._errorClass);
    errorTextElement.textContent = input.validationMessage;
  }

  _hideInputError(errorTextElement, input) {
    input.classList.remove(this._errorClass);
    errorTextElement.textContent = '';
  }

  _checkInputValidity(input) {
    const errorTextElement = this._formElement.querySelector(`.${input.id}-error`);
    input.validity.valid ? this._hideInputError(errorTextElement, input) : this._showInputError(errorTextElement, input);
  }

  _setEventListeners() {
    this._inputList.forEach(input => {
    input.addEventListener('input', () => {
    this._checkInputValidity(input);
    //this._toggleButtonState();
      })
    })
  }

  enableValidation() {
    this._button = this._formElement.querySelector(this._submitButtonSelector);
    this._inputList = this._formElement.querySelectorAll(this._inputSelector);
    this._setEventListeners();
  }
}

const popupEditProfile = new FormValidator(validationConfig, popupTypeEditProfile);
console.log(popupTypeEditProfile);
popupEditProfile.enableValidation();




