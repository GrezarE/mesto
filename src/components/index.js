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
  jobProfile,
  titleProfile,
  avatarLink,
  elements,
  deletePopup,
} from "./utils.js";
import {
  openProfilePopup,
  crossProfilePopup,
  handleProfileSubmit,
  openElementPopup,
  openAvatarPopup,
  changeAvatarImage,
} from "./modal.js";
import { addCard, createCard, deleteCard } from "./card.js";
import { requestCard, userStartData } from "./api.js";

// Объявления
const buttonProfileEdit = document.querySelector(".profile__edit");
const buttonElementAdd = document.querySelector(".profile__button");
const avatarEdit = document.querySelector(".profile__avatar-box");
const profileCloseButton = profilePopup.querySelector(".popup__close");
const elementCloseButton = elementPopup.querySelector(".popup__close");
const imageCloseButton = imagePopup.querySelector(".popup__close");
const avatarCloseButton = avatarPopup.querySelector(".popup__close");
const deleteCloseButton = deletePopup.querySelector(".popup__close");

//Валидация

enableValidation(config);

//Слушатели

imageCloseButton.addEventListener("click", function () {
  closePopup(imagePopup);
});

avatarEdit.addEventListener("click", () => openAvatarPopup(config));
avatarCloseButton.addEventListener("click", function () {
  closePopup(avatarPopup);
});
avatarPopup.addEventListener("submit", changeAvatarImage);

deleteCloseButton.addEventListener("click", function () {
  closePopup(deletePopup);
});
deletePopup.addEventListener("submit", deleteCard);

buttonElementAdd.addEventListener("click", () => openElementPopup(config));
elementCloseButton.addEventListener("click", function () {
  closePopup(elementPopup);
});
elementPopup.addEventListener("submit", addCard);

profilePopup.addEventListener("submit", handleProfileSubmit);
profileCloseButton.addEventListener("click", crossProfilePopup);
buttonProfileEdit.addEventListener("click", openProfilePopup);

export let userId = "";

userStartData()
  .then((result) => {
    jobProfile.textContent = result.about;
    titleProfile.textContent = result.name;
    avatarLink.src = result.avatar;
    userId = result._id;
  })
  .then(() => {
    requestCard()
      .then((result) => {
        result.forEach(function (card) {
          elements.append(createCard(card, userId));
        });
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });
