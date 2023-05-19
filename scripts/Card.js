//import { initialCards } from './constants.js';

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

class Card {
  constructor(cardData, templateSelector) {
    this._cardData = cardData;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
     const cardTemplate = document.getElementById(this._templateSelector);
    const cardElement = cardTemplate.content.querySelector('.photo__cell').cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.photo__image').src = this._cardData.link;
    this._element.querySelector('.photo__image').alt = this._cardData.name;
    this._element.querySelector('.photo__title').textContent = this._cardData.name;

    return this._element;
  }

  _handleDelete = () => {
    this._element.remove();
    this._element = null;
  }

  _handleLike = () => {
    this._element.querySelector('.photo__like').classList.toggle('photo__like_active');
  }

  _setEventListeners() {
    this._element.querySelector('.photo__delete').addEventListener('click', this._handleDelete);
    this._element.querySelector('.photo__like').addEventListener('click', this._handleLike);
    this._element.querySelector('.photo__image').addEventListener('click', () => {
    zoomCard(this._cardData);
    });
  }
}

//export { Card };
