import { openPopup, closePopup, profilePopup, elementPopup, removeButtonActivity, avatarPopup } from "./utils.js";

const titleProfile = document.querySelector(".profile__title");
const jobProfile = document.querySelector(".profile__text");
const avatarLink = document.querySelector(".profile__avatar")
const nameInput = document.querySelector('input[name="profile"]');
const jobInput = document.querySelector('input[name="occupation"]');
const avatarInput = document.querySelector('input[name="avatar"]');

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

export function openElementPopup(configData) {
  openPopup(elementPopup);
  const elementForm = elementPopup.querySelector(configData.formSelector);
  const elementButton = elementForm.querySelector(configData.submitButtonSelector)
  elementForm.reset();
  removeButtonActivity(elementButton, configData)
}

export function openAvatarPopup() {
  openPopup(avatarPopup);
  avatarInput.value = avatarLink.src
}

export function changeAvatarImage(evt) {
  evt.preventDefault();
  avatarLink.src = avatarInput.value
  closePopup(avatarPopup)
}
