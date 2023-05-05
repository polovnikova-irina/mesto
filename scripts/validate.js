const showInputError = (formElement, inputElement, errorMessage, { inputErrorClass, errorClass } ) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
}

const hideInputError = (formElement, inputElement, { inputErrorClass, errorClass }) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
}

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.checkValidity()) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement, formElement.validationConfig);
  }
}

const enableBtn = (button, { inactiveButtonClass } ) => {
button.classList.remove(inactiveButtonClass);
button.removeAttribute('disabled');
}

const disableBtn = (button, { inactiveButtonClass }) => {
button.classList.add(inactiveButtonClass);
button.setAttribute('disabled', true);
}

const hasInvalidInput = (formInput) => {
  return formInput.some(item => !item.validity.valid);
}

const setEventListeners = (formElement, { inputSelector, submitButtonSelector } ) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const formButton = formElement.querySelector(submitButtonSelector);
  disableBtn(formButton);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement);
      if (hasInvalidInput(inputList)) {
        disableBtn(formButton, formElement.validationConfig);
      } else {
        enableBtn(formButton, formElement.validationConfig);
      }
    });
  });
}

const enableValidation = ( { formSelector, ...rest }) => {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
  setEventListeners(formElement, rest);
  });
}






