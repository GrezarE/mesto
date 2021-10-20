import { openPopup, closePopup, profilePopup, elementPopup } from "./utils.js";

export function closeOverlay(event) {
  const popup = document.querySelector(".popup_opened");
  if (event.target === popup) {
    closePopup(popup);
  }
}

export function closeEsc(event) {
  const popup = document.querySelector(".popup_opened");
  if (event.key == "Escape") {
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
  elementForm.reset();
}
