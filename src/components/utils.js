const profilePopup = document.querySelector(".popup_type_profile");
const elementPopup = document.querySelector(".popup_type_card-add");
const imagePopup = document.querySelector(".popup_type_image");

import { closeEsc } from "./modal.js";

export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeEsc);
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

export { profilePopup, elementPopup, imagePopup, config};
