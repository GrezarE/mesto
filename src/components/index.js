// Экспорт
import "../page/index.css";
import { enableValidation } from "./validate.js";
import {
  profilePopup,
  elementPopup,
  imagePopup,
  closePopup,
  config,
  avatarPopup,
} from "./utils.js";
import {
  // closeOverlay,
  openProfilePopup,
  crossProfilePopup,
  handleProfileSubmit,
  openElementPopup,
  openAvatarPopup,
  changeAvatarImage,
} from "./modal.js";
import { addCard } from "./card.js";

// Объявления
const buttonProfileEdit = document.querySelector(".profile__edit");
const buttonElementAdd = document.querySelector(".profile__button");
const avatarEdit = document.querySelector(".profile__avatar-box");
const profileCloseButton = profilePopup.querySelector(".popup__close");
const elementCloseButton = elementPopup.querySelector(".popup__close");
const imageCloseButton = imagePopup.querySelector(".popup__close");
const avatarCloseButton = avatarPopup.querySelector(".popup__close");


//Валидация

enableValidation(config);

//Слушатели
imageCloseButton.addEventListener("click", function () {
  closePopup(imagePopup);
});

avatarEdit.addEventListener("click", openAvatarPopup);
avatarCloseButton.addEventListener("click", function () {
  closePopup(avatarPopup);
});
avatarPopup.addEventListener("submit", changeAvatarImage)

buttonElementAdd.addEventListener("click", () => openElementPopup(config));
elementCloseButton.addEventListener("click", function () {
  closePopup(elementPopup);
});

profilePopup.addEventListener("submit", handleProfileSubmit);

profileCloseButton.addEventListener("click", crossProfilePopup);

buttonProfileEdit.addEventListener("click", openProfilePopup);

// profilePopup.addEventListener("click", closeOverlay);
// elementPopup.addEventListener("click", closeOverlay);
// imagePopup.addEventListener("click", closeOverlay);
// avatarPopup.addEventListener("click", closeOverlay);

elementPopup.addEventListener("submit", addCard);
