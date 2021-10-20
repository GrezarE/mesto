const config = {
  formSelector: ".popup__box",
  inputSelector: ".popup__item",
  fieldsetSelector: ".popup__profile",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__item_error",
  errorClass: "popup__input-error_visible",
};

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.textContent = "";
  errorElement.classList.remove(config.errorClass);
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement)
  }
};

const toggleButtonState = (inputList, buttonElement) => {
  console.log(hasInvalidInput(inputList));
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true
    buttonElement.classList.add(config.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.disabled = false

  }
};

function setEventListeners(formElement) {
  formElement.addEventListener("submit", (evt) => {
    evt.preventDefault();
  });
  const inputList = Array.from(
    formElement.querySelectorAll(config.inputSelector)
  );
  const submitButton = formElement.querySelector(config.submitButtonSelector);
  
  toggleButtonState(inputList, submitButton);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, submitButton);
    });
  });
}

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  console.log(formList);
  formList.forEach((formElement) => {
    setEventListeners(formElement);
  });
};

enableValidation();
