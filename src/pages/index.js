//import "./index.css";

import {
  validationConfig,
  infoConfig,
  openPopupBtnEdit,
  formElementTypeEdit,
  openPopupBtnAdd,
  formElementTypeAddCard,
  openPopupBtnAvatar,
  formElementTypeAvatar,
  cardContainer,
} from "../scripts/utils/constants.js";
import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import Section from "../scripts/components/Section.js";
import Popup from "../scripts/components/Popup.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import UserInfo from "../scripts/components/UserInfo.js";
import Api from "../scripts/components/Api.js";

//Валидация формы редактирования профиля
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

//Валидация формы редактирования аватара
const formElementEditAvatar = new FormValidator(
  validationConfig,
  formElementTypeAvatar
);
formElementEditAvatar.enableValidation();


//userInfo
const userInfo = new UserInfo(infoConfig);

//Принятие новых данных пользователя и добавление их на страницу
const popupProfile = new PopupWithForm({
  handleFormSubmit: (userData) => {
    api.sentUsersData(userData)
      .then(res => {
        userInfo.setUserInfo({name: res.name, job: res.about, avatar: res.avatar});
      })
      .catch(err => {
        console.log('Ошибка:', err);
      });
  }
}, ".popup_type_edit-profile");

popupProfile.setEventListeners();

//Класс попап для реадктирования профиля
const profileForm = new Popup(".popup_type_edit-profile");

//Открытие попапа редактирования профиля и редактирование
openPopupBtnEdit.addEventListener("click", () => {
  formElementEditProfile.resetValidation();
  formElementEditProfile.disableSubmitButton();
  popupProfile.setInputValues(userInfo.getUserInfo());
  profileForm.open();
});
profileForm.setEventListeners();

//Увеличить карточку
const popupWithImage = new PopupWithImage(".popup_type_zoom-image");

//Открытие попапа добавления карточки
const popupCard = new Popup(".popup_type_add-card");

openPopupBtnAdd.addEventListener("click", () => {
  popupCard.open();
  formElementAddCard.disableSubmitButton();
  formElementAddCard.resetValidation();
});
popupCard.setEventListeners();

//создание и добавление, открытие карточки
const renderCard = (data) => {
  const card = new Card(data, "photo-template", (data) =>
    popupWithImage.open(data)
  );
  const cardElement = card.generateCard();
  section.addItem(cardElement);
};

//Добавление начальных карточек
const section = new Section(
  {
    renderer: (cardData) => {
      renderCard(cardData);
    },
  },
  cardContainer
);

popupWithImage.setEventListeners();

// Создание и добавление новых карточек при заполнении полей поп-апа
const popupAddCard = new PopupWithForm(
  {
    handleFormSubmit: (cardData) => {
      api.createCard(cardData)
      .then(res => {
        renderCard(res);
      })
      .catch(err => {
        console.log('Ошибка:', err);
      });
    },
  },
  ".popup_type_add-card"
);
popupAddCard.setEventListeners();


//Открытие попапа автара
const popupAvatar= new Popup(".popup_type_avatar");

openPopupBtnAvatar.addEventListener("click", () => {
  popupAvatar.open();
  formElementEditAvatar.disableSubmitButton();
  formElementEditAvatar.resetValidation();
});
popupAvatar.setEventListeners();

// Обновление аватара
const popupAddAvatar = new PopupWithForm(
  {
    handleFormSubmit: (avatarData) => {
      api.addAvatar(avatarData)
      .then(res => {
        console.log(res)
        userInfo.getAvatarInfo(res.avatar);
        userInfo.setAvatar(res.avatar);
      })
      .catch(err => {
        console.log('Ошибка:', err);
      });
    },
  },
  ".popup_type_avatar"
);
popupAddAvatar.setEventListeners();


//СПРИНТ 9

//класс Api
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-69',
  headers: {
    authorization: '9ec885fb-bc6f-4c8c-9e39-a212b12d1d1a',
    'Content-Type': 'application/json'
  }
});

//выполнение Загрузка информации о пользователе с сервера и Добавление карточки с сервера
Promise.all([api.getInfo(), api.getCards()])
.then(([dataUser, dataCard]) => {
  dataCard.forEach(item => item.myId = dataUser._id);
  section.renderItem(dataCard);
  userInfo.setUserInfo({name: dataUser.name, job: dataUser.about, avatar: dataUser.avatar});
})
.catch((err) => {
  console.log('Ошибка:', err);
});

/*//открытие попапа на корзину
const deleteButton = document.querySelector('.photo__delete');
const popup = document.querySelector('.popup_type_avatar');
const openPopup = (popupType) => {
  popupType.classList.add("popup_opened");
}

deleteButton.addEventListener('click', () => {
  openPopup(popup);
});*/

