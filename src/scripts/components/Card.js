export default class Card {
  constructor(cardData, templateSelector, handleCardClick ) {
    this._cardData = cardData;
    this._templateSelector = templateSelector;
    this._handleCardClick= handleCardClick;
  }

  _handleDelete = () => {
    this._element.remove();
    this._element = null;
    this._photoImageElement = null;
    this._photoLike = null;
    this._photoDelete = null;
  };

  _handleLike = () => {
    this._photoLike.classList.toggle("photo__like_active");
  };

  _handleOpenZoomImage = () => {
    this._handleCardClick(this._cardData);
  };

  _setEventListeners() {
    this._photoDelete.addEventListener("click", this._handleDelete);
    this._photoLike.addEventListener("click", this._handleLike);
    this._photoImageElement.addEventListener("click", this._handleOpenZoomImage);
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

    this._photoImageElement = this._element.querySelector(".photo__image");
    this._photoLike = this._element.querySelector(".photo__like");
    this._photoDelete = this._element.querySelector(".photo__delete");

    this._photoImageElement.src = this._cardData.link;
    this._photoImageElement.alt = this._cardData.name;
    this._element.querySelector(".photo__title").textContent = this._cardData.name;

    this._setEventListeners();

    return this._element;
  }
}
