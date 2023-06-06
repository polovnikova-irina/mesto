import Popup from "./popup.js";

export default class PopupWithForm extends Popup {
  constructor({ handleFormSubmit }, popupSelector) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
  }

  getInputValues() {// сбор данных из полей
     // достаём все элементы полей
    this._inputList = this._form.querySelectorAll('.popup__item');
    // создаём пустой объект
    this._formValues = {};
    // добавляем в этот объект значения всех полей
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    })
    // возвращаем объект значений
    return this._formValues;
  }

  setUserInfo(formData) {
    this._inputList.forEach(input => {
      input.value = formData[input.name];
    })
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this.getInputValues())
    })
  }

  close() {
    super.close();
    this._form.reset();
  }
}
