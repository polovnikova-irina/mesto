import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ handleFormSubmit }, popupSelector) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__item');// достаём все элементы полей
  }

  _getInputValues() {// сбор данных всех полей формы 
    // создаём пустой объект
    const formValues = {};
    // добавляем в этот объект значения всех полей
    this._inputList.forEach(input => {
      formValues[input.name] = input.value;
    })
    // возвращаем объект значений
    return formValues;
  }

  setInputValues(formData) {
    //заполнение данными из инпутов когда открывается попап
    this._inputList.forEach(input => {
      input.value = formData[input.name];
    })
  }

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    })
  }

}
