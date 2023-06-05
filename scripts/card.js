export class Card {
  constructor(cardData, templateSelector, handleCardClick) {
    this._cardData = cardData;
    this._templateSelector = templateSelector;
    this._handleCardClick= handleCardClick;
  }

  _handleDelete = () => {
    this._element.remove();
    this._element = null;
  };

  _handleLike = () => {
    this._element
      .querySelector(".photo__like")
      .classList.toggle("photo__like_active");
  };

  _handleOpenZoomImage = () => {
    this._handleCardClick.open(this._cardData);
  };

  _setEventListeners() {
    this._element
      .querySelector(".photo__delete")
      .addEventListener("click", this._handleDelete);
    this._element
      .querySelector(".photo__like")
      .addEventListener("click", this._handleLike);
    this._element
      .querySelector(".photo__image")
      .addEventListener("click", this._handleOpenZoomImage);
  }

  _getTemplate() {
    const cardTemplate = document.getElementById(this._templateSelector);
    const cardElement = cardTemplate.content
      .querySelector(".photo__cell")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._photoImageElement = this._element.querySelector(".photo__image");

    this._photoImageElement.src = this._cardData.link;
    this._photoImageElement.alt = this._cardData.name;
    this._element.querySelector(".photo__title").textContent = this._cardData.name;

    return this._element;
  }
}
