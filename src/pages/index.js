import "./index.css";

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
import Api from "../scripts/components/api.js";
import PopupDeleteCard from "../scripts/components/PopupDeleteCard.js";

//создание класса Api
const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-69",
  headers: {
    authorization: "9ec885fb-bc6f-4c8c-9e39-a212b12d1d1a",
    "Content-Type": "application/json",
  },
});

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

//создание класса userInfo
const userInfo = new UserInfo(infoConfig);

//Принятие новых данных пользователя и добавление их на страницу
const popupProfile = new PopupWithForm(
  {
    handleFormSubmit: (userData) => {
      popupProfile.renderLoading(true);
      api
        .sentUsersData(userData)
        .then((res) => {
          userInfo.setUserInfo({
            name: res.name,
            job: res.about,
            avatar: res.avatar,
          });
          popupProfile.close();
        })
        .catch((err) => {
          console.log("Ошибка при отправке данных пользователя:", err);
        })
        .finally(() => {
          popupProfile.renderLoading(false);
        });
    },
  },
  ".popup_type_edit-profile"
);
popupProfile.setEventListeners();

//Увеличить карточку
const popupWithImage = new PopupWithImage(".popup_type_zoom-image");

// Создание и добавление новых карточек при заполнении полей поп-апа
const popupAddCard = new PopupWithForm(
  {
    handleFormSubmit: (cardData) => {
      popupAddCard.renderLoading(true);
      api
        .createCard(cardData)
        .then((res) => {
          res.myId = res.owner._id;
          renderCard(res);
          popupAddCard.close();
        })
        .catch((err) => {
          console.log("Ошибка при создании карточки:", err);
        })
        .finally(() => {
          popupAddCard.renderLoading(false);
        });
    },
  },
  ".popup_type_add-card"
);
popupAddCard.setEventListeners();

//Открытие попапа добавления карточки
openPopupBtnAdd.addEventListener("click", () => {
  popupAddCard.open();
  formElementAddCard.disableSubmitButton();
  formElementAddCard.resetValidation();
});

//Открытие попапа редактирования профиля и редактирование
openPopupBtnEdit.addEventListener("click", () => {
  formElementEditProfile.resetValidation();
  formElementEditProfile.disableSubmitButton();
  popupProfile.setInputValues(userInfo.getUserInfo());
  popupProfile.open();
});

//класс Section
const section = new Section(
  {
    renderer: (cardData) => {
      renderCard(cardData);
    },
  },
  cardContainer
);
popupWithImage.setEventListeners();

//Попап удаления карточки
const popupDeleteCard = new PopupDeleteCard(
  ".popup_type_confirm",
  (cardElement, cardId) => {
    popupDeleteCard.renderLoading(true);
    api
      .deleteCard(cardId)
      .then(() => {
        cardElement.deleteCardElement();
        popupDeleteCard.close();
      })
      .catch((err) => {
        console.log("Ошибка при удалении карточки:", err);
      })
      .finally(() => {
        popupDeleteCard.renderLoading(false);
      });
  }
);
popupDeleteCard.setEventListeners();

//создание и добавление, открытие карточки, удаление карточки, лайк
const renderCard = (data) => {
  const card = new Card(data, "photo-template", {
    handleCardClick: (data) => popupWithImage.open(data),

    handleDeleteClick: (cardElement, cardId) => {
      popupDeleteCard.open(cardElement, cardId);
    },

    handleLikeClick: () => {
      const isLiked = card.isLikeByMyId();
      if (isLiked) {
        api
          .deleteLike(data._id)
          .then((res) => {
            card.toggleLikes(res.likes);
          })
          .catch((err) => {
            console.log("Ошибка при удалении лайка:", err);
          });
      } else {
        api
          .addLike(data._id)
          .then((res) => {
            card.toggleLikes(res.likes);
          })
          .catch((err) => {
            console.log("Ошибка при добавлении лайка:", err);
          });
      }
    },
  });
  const cardElement = card.generateCard();
  section.addItem(cardElement);
};

//Открытие попапа автара
const popupAvatar = new Popup(".popup_type_avatar");

openPopupBtnAvatar.addEventListener("click", () => {
  popupAvatar.open();
  formElementEditAvatar.disableSubmitButton();
  formElementEditAvatar.resetValidation();
});

// Обновление аватара
const popupAddAvatar = new PopupWithForm(
  {
    handleFormSubmit: (avatarData) => {
      popupAddAvatar.renderLoading(true);
      api
        .addAvatar(avatarData)
        .then((res) => {
          userInfo.getAvatarInfo(res.avatar);
          userInfo.setAvatar(res.avatar);
          popupAddAvatar.close();
        })
        .catch((err) => {
          console.log("Ошибка при обновлении аватара:", err);
        })
        .finally(() => {
          popupAddAvatar.renderLoading(false);
        });
    },
  },
  ".popup_type_avatar"
);
popupAddAvatar.setEventListeners();

//выполнение Загрузка информации о пользователе с сервера и Добавление карточки с сервера
Promise.all([api.getInfo(), api.getCards()])
  .then(([dataUser, dataCard]) => {
    dataCard.forEach((item) => (item.myId = dataUser._id));
    section.renderItem(dataCard.reverse());
    userInfo.setUserInfo({
      name: dataUser.name,
      job: dataUser.about,
      avatar: dataUser.avatar,
    });
  })
  .catch((err) => {
    console.log("Ошибка при загрузке данных о пользователе или карточек:", err);
  })
  .finally();
