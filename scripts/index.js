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
  disableBtn(saveBtnEdit, { inactiveButtonClass: 'popup__save-button_inactive'});
  openPopup(popupTypeEditProfile);
});

openPopupBtnAdd.addEventListener('click', function(evt) {
  disableBtn(saveBtnAdd, { inactiveButtonClass: 'popup__save-button_inactive'});
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





