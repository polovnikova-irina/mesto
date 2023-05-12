//popupTypeEditProfile
const popupTypeEditProfile = document.querySelector('.popup_type_edit-profile');
const openPopupBtnEdit = document.querySelector('.profile__edit-button');
const closePopupBtnEdit = document.querySelector('.popup__close-button_type_edit');
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
const closePopupBtnAdd = document.querySelector('.popup__close-button_type_add-card');
const saveBtnAdd = popupTypeAddCard.querySelector('.popup__save-button');

const namePhotoInput = document.querySelector('.popup__item_el_photo-name');
const nameLinkInput = document.querySelector('.popup__item_el_link');

//photoTemplate
const photoTemplate = document.getElementById('photo-template');
const photoContainer = document.querySelector('.photo');

//popupTypeZoomImage
const popupTypeZoomImage = document.querySelector('.popup_type_zoom-image');
const closePopupBtnZoom = document.querySelector('.popup__close-button_type_zoom-image')
const photoNameInput = document.querySelector('.popup__item_el_photo-name');
const zoomImage = document.querySelector('.popup__image_type_zoom-image');
const zoomImageTitle = document.querySelector('.popup__caption_type_zoom-image');


//function escClosePopup and overlayClosePopup
const handlePopupClose = (evt, popup) => {
  if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')) {
    closePopup(popup);
  }
};

const handlePopupKeyDownByEsc = (evt, popup) => {
  if (evt.key === 'Escape') {
    closePopup(popup);
  }
};


//function openPopup
const openPopup = (popupType) => {
  popupType.classList.add('popup_opened');
  document.addEventListener('keydown', (evt) => handlePopupKeyDownByEsc(evt, popupType));
  document.addEventListener('click', (evt) => handlePopupClose(evt, popupType));
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
  document.removeEventListener('keydown', (evt) => handlePopupKeyDownByEsc(evt, popupType));
  document.removeEventListener('click', (evt) => handlePopupClose(evt, popupType));
};

closePopupBtnEdit.addEventListener('click', () => closePopup(popupTypeEditProfile));
closePopupBtnAdd.addEventListener('click', () => closePopup(popupTypeAddCard));
closePopupBtnZoom.addEventListener('click', () => closePopup(popupTypeZoomImage));

//EditProfile
function handleFormSubmitEditProfile(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popupTypeEditProfile);
}

formElementTypeEdit.addEventListener('submit', handleFormSubmitEditProfile);

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

  photoImage.addEventListener('click', () => {
    zoomCard(photoData);
  });

  const handleDelete = () => {
    photoElement.remove();
  }

  const handleLike = () => {
    photoLikeButton.classList.toggle('photo__like_active');
  }

  photoDeleteButton.addEventListener('click', handleDelete);
  photoLikeButton.addEventListener('click', handleLike);

  return photoElement;
};

//ZoomCard
const zoomCard = (photoData) => {
  openPopup(popupTypeZoomImage);
  zoomImage.src = photoData.link;
  zoomImage.alt = photoData.name;
  zoomImageTitle.textContent = photoData.name;
}

closePopup(popupTypeZoomImage);

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

initialCards.forEach((photo) => {
  const element = createPhotoElement(photo);
  photoContainer.prepend(element);
});

formElementTypeAddCard.addEventListener('submit', handleAddFormSubmit);





