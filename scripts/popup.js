export default class Popup {
  constractor(popupSelector) {
      this._popup = popupSelector;
    }

  openPopup() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  closePopup() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.closePopup();
    }
  }

  setEventListeners() {
    document.addEventListener('click', (evt) => {
    const isOverlay = evt.target.classList.contains("popup");
    const isCloseBtn = evt.target.classList.contains("popup__close-button");
    if (isOverlay || isCloseBtn) {
      this.closePopup();
    }
  })
  }
}

