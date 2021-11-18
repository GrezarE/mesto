export default class FormValidator {
  constructor( data , element) {
    this._data = data;
    this._element = element;
  }
  _getInputList() {
    const inputList = Array.from(
      this._element.querySelectorAll(this._data.inputSelector)
    );
    return inputList;
  }
  _getButtonElement() {
    const submitButton = this._element.querySelector(
      this._data.submitButtonSelector
    );
    return submitButton;
  }

  _hasInvalidInput() {
    return this._imputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState() {
    if (!this._hasInvalidInput()) {
      this._buttonElement.classList.remove(this._data.inactiveButtonClass);
      this._buttonElement.disabled = false;
    } else {
      this._buttonElement.disabled = true;
      this._buttonElement.classList.add(this._data.inactiveButtonClass);
    }
  }
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }
  _hideInputError(inputElement) {
    this._errorElement = this._element.querySelector(
      `#${inputElement.name}-error`
    );
    inputElement.classList.remove(this._data.inputErrorClass);
    this._errorElement.textContent = "";
    this._errorElement.classList.remove(this._data.errorClass);
  }

  _showInputError(inputElement) {
    this._errorElement = this._element.querySelector(
      `#${inputElement.name}-error`
    );
    inputElement.classList.add(this._data.inputErrorClass);
    this._errorElement.textContent = inputElement.validationMessage;
    this._errorElement.classList.add(this._data.errorClass);
  }

  _setEventListeners() {
    this._element.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._imputList = this._getInputList();
    this._buttonElement = this._getButtonElement();

    this._imputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._setEventListeners(this._element, this._data);
  }
}
