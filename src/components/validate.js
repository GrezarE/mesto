const showInputError = (
  formElement,
  inputElement,
  errorMessage,
  configData
) => {
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
  inputElement.classList.add(configData.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(configData.errorClass);
};

const hideInputError = (formElement, inputElement, configData) => {
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
  inputElement.classList.remove(configData.inputErrorClass);
  errorElement.textContent = "";
  errorElement.classList.remove(configData.errorClass);
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const checkInputValidity = (formElement, inputElement, configData) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      configData
    );
  } else {
    hideInputError(formElement, inputElement, configData);
  }
};

const toggleButtonState = (inputList, buttonElement, configData) => {
  if (!hasInvalidInput(inputList, configData)) {
    buttonElement.classList.remove(configData.inactiveButtonClass);
  } else {
    buttonElement.classList.add(configData.inactiveButtonClass);
  }
};

function setEventListeners(formElement, configData) {
  formElement.addEventListener("submit", (evt) => {
    evt.preventDefault();
  });
  const inputList = Array.from(
    formElement.querySelectorAll(configData.inputSelector)
  );
  const submitButton = formElement.querySelector(
    configData.submitButtonSelector
  );

  toggleButtonState(inputList, submitButton, configData);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement, configData);
      toggleButtonState(inputList, submitButton, configData);
    });
  });
}

export const enableValidation = (configData) => {
  const formList = Array.from(
    document.querySelectorAll(configData.formSelector)
  );
  formList.forEach((formElement) => {
    setEventListeners(formElement, configData);
  });
};
