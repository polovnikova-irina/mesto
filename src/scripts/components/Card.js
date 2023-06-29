export default class Card {
  constructor(cardData, templateSelector, { handleCardClick, handleDeleteClick, handleLikeClick }) {
    this._cardData = cardData;
    this._myId = cardData.myId;
    this._cardId = cardData._id;
    this._ownerId = cardData.owner._id;
    this._likes = cardData.likes;
    this._isLiked = false;
    this._likesLength = cardData.likes.length;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  }

  _handleDeleteCard = () => {
    this._handleDeleteClick(this, this._cardId);
  };

  _handleLikeCard  = () => {
    this._handleLikeClick(this._isLiked, this._cardId);
  };

  deleteCardElement() {
    this._element.remove();
    this._element = null;
    this._photoImageElement = null;
    this._photoLike = null;
    this._photoDelete = null;
    this._cardId = null;
  };

  _changeVisibleTrash() {
   if(this._myId !== this._ownerId) {
    this._photoDelete.remove();
   }
  }

  _checkLike() {
    this._likes.forEach(element => {
      if (element._id === this._myId) {
        this._photoLike.classList.add("photo__like_active");
        this.isLiked = true
        return;
      }
    });
    this._counter.textContent = this._likesLength;
  }

  toggleLikes(likes) {
    this._photoLike.classList.toggle("photo__like_active");
    this._counter.textContent = likes.length;
  }

  _handleOpenZoomImage = () => {
    this._handleCardClick(this._cardData);
  };

  _getTemplate() {
    const cardTemplate = document.getElementById(this._templateSelector);
    const cardElement = cardTemplate.content
      .querySelector(".photo__cell")
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    this._photoDelete.addEventListener("click", this._handleDeleteCard);
    this._photoLike.addEventListener("click", this._handleLikeCard);
    this._photoImageElement.addEventListener("click", this._handleOpenZoomImage);
  }

  generateCard() {
    this._element = this._getTemplate();

    this._photoImageElement = this._element.querySelector(".photo__image");
    this._photoLike = this._element.querySelector(".photo__like");
    this._photoDelete = this._element.querySelector(".photo__delete");
    this._counter = this._element.querySelector(".photo__like-count");

    this._photoImageElement.src = this._cardData.link;
    this._photoImageElement.alt = this._cardData.name;
    this._element.querySelector(".photo__title").textContent = this._cardData.name;

    this._changeVisibleTrash();
    this._checkLike();
    this._setEventListeners();


    return this._element;
  }
}

