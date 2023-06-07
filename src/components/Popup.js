export default class Popup {
  constructor(popupSelector) {
      this._popup = document.querySelector(popupSelector);
      this._form = this._popup.querySelector('.popup__form');
    }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  openWithValues(formData) {
    this._form.name.value = formData.name;
    this._form.job.value = formData.job;
    this.open()
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    document.addEventListener('click', (evt) => {
    const isOverlay = evt.target.classList.contains('popup');
    const isCloseBtn = evt.target.classList.contains('popup__close-button');
    if (isOverlay || isCloseBtn) {
      this.close();
    }
  })
  }
}

