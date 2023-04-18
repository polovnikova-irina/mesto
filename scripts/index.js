import { initialCards } from "./constants.js"

const popup = document.querySelector('.popup');
const openPopupBtnEdit = document.querySelector('.profile__edit-button');
const closePopupButton = document.querySelector('.popup__close-button');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__item_el_title');
const jobInput = document.querySelector('.popup__item_el_subtitle');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const photoTemplate = document.getElementById('photo-template');
const photoContainer = document.querySelector('.photo');

const openPopupBtnAdd = document.querySelector('.profile__add-button');
const photoNameInput = document.querySelector('.popup__item_el_photo-name');
const linkInput = document.querySelector('.popup__item_el_link');

const popupTypeEditProfile = document.querySelector('.popup_type_edit-profile');
const popupTypeAddCard = document.querySelector('.popup_type_add-card');
const popupTypeZoomImage = document.querySelector('.popup_type_zoom-image');

//1
function openPopupTypeEditProfile() {
  popupTypeEditProfile.classList.add('popup_opened');
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}

function openPopupTypeAddCard() {
  popupTypeAddCard.classList.add('popup_opened');
}

function openPopupTypeZoomImage() {
  popupTypeZoomImage.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup();
}

formElement.addEventListener('submit', handleFormSubmit);
openPopupBtnEdit.addEventListener('click', openPopupTypeEditProfile);
openPopupBtnAdd.addEventListener('click', openPopupTypeAddCard);

closePopupButton.addEventListener('click', closePopup);


//2
const createPhotoElement = (photoData) => {
  const photoElement = photoTemplate.content.querySelector('.photo__cell').cloneNode(true);

  const photoImage = photoElement.querySelector('.photo__image');
  const photoTitle = photoElement.querySelector('.photo__title');
  const photoDeleteButton = photoElement.querySelector('.photo__delete');
  const photoLikeButton = photoElement.querySelector('.photo__like');

  photoImage.src = photoData.link;
  photoImage.alt = photoData.name;
  photoTitle.textContent = photoData.name;

  const handleDelete = () => {
    photoElement.remove();
  }

  const handleLike = () => {
    photoLikeButton.classList.toggle('photo__like_active');
  }

  photoDeleteButton.addEventListener('click', handleDelete);
  photoLikeButton.addEventListener('click', handleLike);


  const zoomImage = document.querySelector('.popup__image-zoom');
  const zoomImageTitle = document.querySelector('.popup__image-title');

  const zoomCard = () => {
    zoomImage.src = photoData.link;
    zoomImage.alt = photoData.name;
    zoomImageTitle.textContent = photoData.name;
    openPopupTypeZoomImage();
  }

  photoImage.addEventListener('click', zoomCard);

  return photoElement;
};


initialCards.forEach((photo) => {
  const element = createPhotoElement(photo);
  photoContainer.prepend(element);
});





