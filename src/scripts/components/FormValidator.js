export default class FormValidator {
  constructor(config, formElement) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._formElement = formElement;

    this._button = this._formElement.querySelector(this._submitButtonSelector);
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));

  }

  _showInputError(errorTextElement, inputElement) {
    inputElement.classList.add(this._inputErrorClass);
    errorTextElement.textContent = inputElement.validationMessage;
    errorTextElement.classList.add(this._errorClass);
  }

  _hideInputError(errorTextElement, inputElement) {
    inputElement.classList.remove(this._inputErrorClass);
    errorTextElement.textContent = "";
    errorTextElement.classList.remove(this._errorClass);
  }

  _enableSubmitButton() {
    this._button.classList.remove(this._inactiveButtonClass);
    this._button.removeAttribute("disabled");
  }

  disableSubmitButton() {
    this._button.classList.add(this._inactiveButtonClass);
    this._button.setAttribute("disabled", true);
  }

  _hasValidInput() {
    return this._inputList.some((input) => !input.validity.valid);
  }

  _toggleSubmitButtonState() {
    this._hasValidInput() ? this.disableSubmitButton() : this._enableSubmitButton();
  }

  _checkInputValidity(inputElement) {
    const errorTextElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.validity.valid ?
    this._hideInputError(errorTextElement, inputElement) : this._showInputError(errorTextElement, inputElement);
  }

  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        //проверяем состояние изменения кнопки при каждом изменении символа в любом поле
        this._toggleSubmitButtonState();
      });
    });
  }

  enableValidation() {
    this._setEventListeners();
  }

  resetValidation() {
    this._inputList.forEach((inputElement) => {
      const errorTextElement = this._formElement.querySelector(`.${inputElement.id}-error`);
      this._hideInputError(errorTextElement, inputElement);
    });
  }
}
