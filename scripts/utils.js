const profilePopup = document.querySelector(".popup_type_profile");
const elementPopup = document.querySelector(".popup_type_card-add");
const imagePopup = document.querySelector(".popup_type_image");

export function openPopup(popup) {
  popup.classList.add("popup_opened");
}

export function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

export { profilePopup, elementPopup, imagePopup };
