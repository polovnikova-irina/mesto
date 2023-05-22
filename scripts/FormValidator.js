/*const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__item_type_error',
  errorClass: 'popup__item-error_active'
};

class FormValidator {
  constructor(obj, formElement) {
    this._inputSelector = obj.inputSelector;
    this._submitButtonSelector = obj.submitButtonSelector;
    this._inactiveButtonClass = obj.inactiveButtonClass;
    this._inputErrorClass = obj.inputErrorClass;
    this._errorClass = obj.errorClass;
    this._formElement = formElement;
  }

  _showInputError(errorTextElement, input) {
    input.classList.add(this._errorClass);
    errorTextElement.textContent = input.validationMessage;
  }

  _hideInputError() {
    input.classList.remove(this._errorClass);
    errorTextElement.textContent = '';
  }

  _checkInputValidity(input) {
   const errorTextElement = this._formElement.querySelector(`${this._inputErrorClass.id}${input.name}`);
   input.validity.valid ? this._hideInputError(errorTextElement, input) : this._showInputError(errorTextElement, input);
  }

  _setEventListeners() {
    this._inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
    this._checkInputValidity(input);
    //this._toggleButtonState();
      })
    })
  }

  enableValidation() {
    this._button = this._formElement.querySelector(this._submitButtonSelector);
    this._inputList = this._formElement.querySelectorAll(this._inputSelector);
    this._setEventListeners();
  }
}

const popupEditProfile = new FormValidator(validationConfig, popupTypeEditProfile);
console.log(popupTypeEditProfile);
popupTypeEditProfile.enableValidation();

/*
//обычная
const showInputError = (formElement, inputElement, errorMessage, { inputErrorClass, errorClass }) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
};

const hideInputError = (formElement, inputElement, { inputErrorClass, errorClass }) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, rest) => {
  if (!inputElement.checkValidity()) {
    showInputError(formElement, inputElement, inputElement.validationMessage, rest);
  } else {
    hideInputError(formElement, inputElement, rest);
  }
}

const enableBtn = (button, { inactiveButtonClass }) => {
button.classList.remove(inactiveButtonClass);
button.removeAttribute('disabled');
}

const disableBtn = (button, { inactiveButtonClass }) => {
button.classList.add(inactiveButtonClass);
button.setAttribute('disabled', true);
}

const hasInvalidInput = (formElement) => {
  return formElement.some(item => {
    return !item.validity.valid;
  });
}

const setEventListeners = (formElement, { inputSelector, submitButtonSelector, ...rest }) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const formButton = formElement.querySelector(submitButtonSelector);
  disableBtn(formButton, rest);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, rest);
      if (hasInvalidInput(inputList, rest)) {
        disableBtn(formButton, rest);
      } else {
        enableBtn(formButton, rest);
      }
    });
  });
}

const enableValidation = ({formSelector, ...rest}) => {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, rest);
  });
}

enableValidation(validationConfig);
*/




