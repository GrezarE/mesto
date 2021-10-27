const config = {
  formSelector: ".popup__box",
  inputSelector: ".popup__item",
  fieldsetSelector: ".popup__profile",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__item_error",
  errorClass: "popup__input-error_visible",
};

const profilePopup = document.querySelector(".popup_type_profile");
const elementPopup = document.querySelector(".popup_type_card-add");
const imagePopup = document.querySelector(".popup_type_image");
const avatarPopup = document.querySelector(".popup_type_avatar");
const deletePopup = document.querySelector(".popup_type_delete")
const titleProfile = document.querySelector(".profile__title");
const jobProfile = document.querySelector(".profile__text");
const avatarLink = document.querySelector(".profile__avatar");
const elements = document.querySelector(".elements");
const imagePopupLink = imagePopup.querySelector(".popup__image");


const buttonText = {
  save: {
    button: "Сохранить",
    buttonLoad: "Сохранение...",
  },
  create: {
    button: "Создать",
    buttonLoad: "Создание...",
  },
  delete: {
    button: "Да",
    buttonLoad: "Удаление...",
  },
};

import { closeEsc, closeOverlay } from "./modal.js";

export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeEsc);
  popup.addEventListener("click", closeOverlay);
}

export function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeEsc);
  popup.removeEventListener("click", closeOverlay);

}

export function buttonIsLoading(loading, load, item) {
  const popupButton = item.querySelector('.popup__button')
  if (loading) {
    popupButton.textContent = load.buttonLoad;
    popupButton.disabled = true
  } else {
    popupButton.textContent = load.button
    popupButton.disabled = false

  }
}

export const removeButtonActivity = (button, configData) => {
  button.disabled = true;
  button.classList.add(configData.inactiveButtonClass);
};

export {
  profilePopup,
  elementPopup,
  imagePopup,
  config,
  avatarPopup,
  jobProfile,
  titleProfile,
  avatarLink,
  elements,
  buttonText,
  deletePopup,
  imagePopupLink
};
