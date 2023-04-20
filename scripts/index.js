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

const formElementTypeAddCard = document.querySelector('.popup__form_type_add-card');
const closePopupBtnAdd = document.querySelector('.popup__close-button_type_add-card');

const closePopupBtnZoom = document.querySelector('.popup__close-button_type_zoom-image')

//EditProfile
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
  popupTypeEditProfile.classList.remove('popup_opened');
}

function closePopupAdd() {
  popupTypeAddCard.classList.remove('popup_opened');
}

function closePopupZoom() {
  popupTypeZoomImage.classList.remove('popup_opened');
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
closePopupBtnAdd.addEventListener('click', closePopupAdd);
closePopupBtnZoom.addEventListener('click', closePopupZoom);

//6cards,like,delete
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

//zoomImage
  const zoomImage = document.querySelector('.popup__image-zoom');
  const zoomImageTitle = document.querySelector('.popup__image-title');

  const zoomCard = () => {
    openPopupTypeZoomImage();
    zoomImage.src = photoData.link;
    zoomImage.alt = photoData.name;
    zoomImageTitle.textContent = photoData.name;
  }
  closePopupZoom();
  photoImage.addEventListener('click', zoomCard);

  return photoElement;

};

//AddPhoto
const handleAddFormSubmit = (evt) => {
  evt.preventDefault();

  const namePhotoInput = document.querySelector('.popup__item_el_photo-name');
  const nameLinkInput = document.querySelector('.popup__item_el_link');

  const card = {
    name: namePhotoInput.value,
    link: nameLinkInput.value
  };

  const element = createPhotoElement(card);
  photoContainer.prepend(element);

  closePopupAdd();
};

initialCards.forEach((photo) => {
  const element = createPhotoElement(photo);
  photoContainer.prepend(element);
});

formElementTypeAddCard.addEventListener('submit', handleAddFormSubmit);



