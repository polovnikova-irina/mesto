import Popup from "./popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector('.popup__image_type_zoom-image');
    this._imagePopupTitle = this._popup.querySelector('.popup__caption_type_zoom-image');
  }

  open(cardData) {
    super.open();
    popupImage.src = cardData.link;
    popupImage.alt = cardData.name;
    imagePopupTitle.textContent = cardData.name;
  }
}
