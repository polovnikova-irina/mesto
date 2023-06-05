import Popup from "./popup.js";

export default class PopupWithForm extends Popup {
  constructor({ handleFormSubmit }, popupSelector) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {// сбор данных из полей
     // достаём все элементы полей
    this._inputList = this._popupSelector.querySelectorAll('.popup__item');
    // создаём пустой объект
    this._formValues = {};
    // добавляем в этот объект значения всех полей
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    })
    // возвращаем объект значений
    return this._formValues;
  }

  _setEventListeners() {
    super._setEventListeners();
    this._popup.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues())
    })
  }

  close() {
    super.close();
    this._popup.reset();
  }
}
