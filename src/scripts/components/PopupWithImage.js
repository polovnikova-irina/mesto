import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector('.popup__image_type_zoom-image');
    this._imagePopupTitle = this._popup.querySelector('.popup__caption_type_zoom-image');
  }

  open(cardData) {
    super.open();
    this._popupImage.src = cardData.link;
    this._popupImage.alt = cardData.name;
    this._imagePopupTitle.textContent = cardData.name;
  }
}
