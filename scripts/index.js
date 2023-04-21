import { initialCards } from "./constants.js"

const popup = document.querySelector('.popup');
const openPopupBtnEdit = document.querySelector('.profile__edit-button');
const closePopupBtnEdit = document.querySelector('.popup__close-button');
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

const togglePopup = (popupType, action) => {
  if (action === 'open') {
    if (popupType === 'editProfile') {
      popupTypeEditProfile.classList.add('popup_opened');
      nameInput.value = profileTitle.textContent;
      jobInput.value = profileSubtitle.textContent;
    } else if (popupType === 'addCard') {
      popupTypeAddCard.classList.add('popup_opened');
    } else if (popupType === 'zoomImage') {
      popupTypeZoomImage.classList.add('popup_opened');
    }
  } else if (action === 'close') {
    if (popupType === 'editProfile') {
      popupTypeEditProfile.classList.remove('popup_opened');
    } else if (popupType === 'addCard') {
      popupTypeAddCard.classList.remove('popup_opened');
    } else if (popupType === 'zoomImage') {
      popupTypeZoomImage.classList.remove('popup_opened');
    }
  }
};

openPopupBtnEdit.addEventListener('click', () => { togglePopup('editProfile', 'open') });
openPopupBtnAdd.addEventListener('click', () => { togglePopup('addCard', 'open') });

closePopupBtnEdit.addEventListener('click', () => { togglePopup('editProfile', 'close') });
closePopupBtnAdd.addEventListener('click', () => { togglePopup('addCard', 'close') });
closePopupBtnZoom.addEventListener('click', () => { togglePopup('zoomImage', 'close') });

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  togglePopup('editProfile', 'close');
}

formElement.addEventListener('submit', handleFormSubmit);

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
  const zoomImage = document.querySelector('.popup__image_type_zoom-image');
  const zoomImageTitle = document.querySelector('.popup__caption_type_zoom-image');

  const zoomCard = () => {
    togglePopup('zoomImage', 'open');
    zoomImage.src = photoData.link;
    zoomImage.alt = photoData.name;
    zoomImageTitle.textContent = photoData.name;
  }
  togglePopup('zoomImage', 'close');
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

  togglePopup('addCard', 'close');
};

initialCards.forEach((photo) => {
  const element = createPhotoElement(photo);
  photoContainer.prepend(element);
});

formElementTypeAddCard.addEventListener('submit', handleAddFormSubmit);



