const profilePopup = document.querySelector(".popup_type_profile");
const elementPopup = document.querySelector(".popup_type_card-add");
const imagePopup = document.querySelector(".popup_type_image");
const avatarPopup = document.querySelector(".popup_type_avatar")

import { closeEsc, closeOverlay } from "./modal.js";

export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeEsc);
  popup.addEventListener("click", closeOverlay)
}

export function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeEsc)
}

const config = {
  formSelector: ".popup__box",
  inputSelector: ".popup__item",
  fieldsetSelector: ".popup__profile",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__item_error",
  errorClass: "popup__input-error_visible",
};

export const removeButtonActivity = (button, configData) => {
  button.disabled = true;
  button.classList.add(configData.inactiveButtonClass)
}

export { profilePopup, elementPopup, imagePopup, config, avatarPopup};
