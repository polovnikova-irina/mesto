import { initialCards } from "./constants.js"

const popup = document.querySelector('.popup');
const openPopupButton = document.querySelector('.profile__edit-button');
const closePopupButton = document.querySelector('.popup__close-button');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__item_el_title');
const jobInput = document.querySelector('.popup__item_el_subtitle');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const photoTemplate = document.getElementById('photo-template');
const photoContainer = document.querySelector('.photo');

const openPopupAddButton = document.querySelector('.profile__add-button');
const photoNameInput = document.querySelector('.popup__item_el_photo-name');
const linkInput = document.querySelector('.popup__item_el_link');


//1
function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  zoomImage.classList.add('popup_opened');
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

openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit);

openPopupAddButton.addEventListener('click', openPopup);


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
    zoomImageTitle.textContent = photoData.name;
    zoomImage.classList.toggle('popup_opened');
    openPopup();
  }

  photoImage.addEventListener('click', zoomCard);

  return photoElement;
};


initialCards.forEach((photo) => {
  const element = createPhotoElement(photo);
  photoContainer.prepend(element);
});





