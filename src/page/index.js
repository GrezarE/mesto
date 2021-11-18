// Экспорт
import "../page/index.css";
import { enableValidation } from "../components/validate.js";
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
} from "../components/utils.js";
import {
  openProfilePopup,
  crossProfilePopup,
  handleProfileSubmit,
  openElementPopup,
  openAvatarPopup,
  changeAvatarImage,
} from "../components/modal.js";
import { addCard, createCard, deleteCard } from "../components/card.js";
import { requestCard, userStartData, api1 } from "../components/api.js";
import FormValidator from "../components/FormValidator.js";

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

// enableValidation(config);

const formList = Array.from(document.querySelectorAll(".popup__box"));
console.log(formList);

formList.forEach((form) => {
  const validation = new FormValidator(config, form);
  validation.enableValidation()
    console.log(validation);
});

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

Promise.all([userStartData(), requestCard()])
  .then((result) => {
    jobProfile.textContent = result[0].about;
    titleProfile.textContent = result[0].name;
    avatarLink.src = result[0].avatar;
    userId = result[0]._id;
    result[1].forEach(function (card) {
      elements.append(createCard(card, userId));
    });
  })
  .catch((err) => {
    console.log(err);
  });
