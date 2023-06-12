export default class FormValidator {
  constructor(config, formElement) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._formElement = formElement;
  }

  _showInputError() {
    this._input.classList.add(this.__inputErrorClass);
    this._errorTextElement.textContent = this._input.validationMessage;
    this._errorTextElement.classList.add(this._errorClass);
  }

  _hideInputError() {
    this._input.classList.remove(this.__inputErrorClass);
    this._errorTextElement.textContent = "";
    this._errorTextElement.classList.remove(this._errorClass);
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
    return Array.from(this._inputList).some((input) => !input.validity.valid);
  }

  _toggleSubmitButtonState() {
    this._hasValidInput() ? this.disableSubmitButton() : this._enableSubmitButton();
  }

  _checkInputValidity() {
    this._errorTextElement = this._formElement.querySelector(`.${this._input.id}-error`);
    this._input.validity.valid? this._hideInputError() : this._showInputError();
  }

  _setEventListeners() {
    this._inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._input = input;
        this._checkInputValidity();
        this._toggleSubmitButtonState();
      });
    });
  }

  enableValidation() {
    this._button = this._formElement.querySelector(this._submitButtonSelector);
    this._inputList = this._formElement.querySelectorAll(this._inputSelector);
    this._setEventListeners();
  }

  resetValidation() {
    this._inputList.forEach((input) => {
      this._input = input;
      this._hideInputError();
    });
  }
}
