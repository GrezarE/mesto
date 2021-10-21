import { openPopup, closePopup, profilePopup, elementPopup } from "./utils.js";

const titleProfile = document.querySelector(".profile__title");
const jobProfile = document.querySelector(".profile__text");
const nameInput = document.querySelector('input[name="profile"]');
const jobInput = document.querySelector('input[name="occupation"]');

export function closeOverlay(event) {
  const popup = document.querySelector(".popup_opened");
  if (event.target === popup) {
    closePopup(popup);
  }
}

export function closeEsc(event) {
  const popup = document.querySelector(".popup_opened");
  if (event.key === "Escape") {
    closePopup(popup);
  }
}

export function openProfilePopup() {
  openPopup(profilePopup);
  nameInput.value = titleProfile.textContent;
  jobInput.value = jobProfile.textContent;
}

export function crossProfilePopup() {
  closePopup(profilePopup);
}

export function handleProfileSubmit(evt) {
  evt.preventDefault();
  const titleProfile = document.querySelector(".profile__title");
  const jobProfile = document.querySelector(".profile__text");
  titleProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(profilePopup);
}

export function openElementPopup() {
  openPopup(elementPopup);
  const elementForm = elementPopup.querySelector(".popup__box");
  const elementButton = elementForm.querySelector(".popup__button")
  elementForm.reset();
  elementButton.classList.add("popup__button_disabled")
}