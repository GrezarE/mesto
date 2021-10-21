// Экспорт
import '../page/index.css'
import { enableValidation } from "./validate.js";
import { profilePopup, elementPopup, imagePopup, closePopup } from "./utils.js";
import {
  closeOverlay,
  openProfilePopup,
  crossProfilePopup,
  handleProfileSubmit,
  openElementPopup,
} from "./modal.js";
import { addCard } from "./card.js";


// Объявления
const buttonProfileEdit = document.querySelector(".profile__edit");
const buttonElementAdd = document.querySelector(".profile__button");
const profileCloseButton = profilePopup.querySelector(".popup__close");
const elementCloseButton = elementPopup.querySelector(".popup__close");
const imageCloseButton = imagePopup.querySelector(".popup__close");

//Валидация

enableValidation();

//Слушатели
imageCloseButton.addEventListener("click", function () {
  closePopup(imagePopup);
});

buttonElementAdd.addEventListener("click", openElementPopup);

elementCloseButton.addEventListener("click", function () {
  closePopup(elementPopup);
});

profilePopup.addEventListener("submit", handleProfileSubmit);

profileCloseButton.addEventListener("click", crossProfilePopup);

buttonProfileEdit.addEventListener("click", openProfilePopup);

profilePopup.addEventListener("click", closeOverlay);
elementPopup.addEventListener("click", closeOverlay);
imagePopup.addEventListener("click", closeOverlay);

elementPopup.addEventListener("submit", addCard);

// initialCards.forEach(function (item) {
//   elements.append(createCard(item.name, item.link));
// });

//оверлей
//export
// function closeOverlay(event) {
//   const popup = document.querySelector(".popup_opened");
//   if (event.target === popup) {
//     closePopup(popup);
//   }
// }

//ESC
//export
// function closeEsc(event) {
//   const popup = document.querySelector(".popup_opened");
//   if (event.key == "Escape") {
//     closePopup(popup);
//   }
// }

// Функции открытия и закрытия попапа
//export
// function openPopup(popup) {
//   popup.classList.add("popup_opened");
// }
// //export
// function closePopup(popup) {
//   popup.classList.remove("popup_opened");
// }

// Функции разметки карточек
//-
// function changeLikeHearth(event) {
//   const eventTargetLike = event.target;
//   eventTargetLike.classList.toggle("element__hearth_active");
// }
// //-
// function deleteCard(evt) {
//   const eventTrash = evt.target;
//   const listItem = eventTrash.closest(".element");
//   listItem.remove();
// }
//-
// function openCardImage(event) {
//   const eventPopupImage = event.target;
//   const imagePopupLink = imagePopup.querySelector(".popup__image");
//   imagePopupLink.src = eventPopupImage.src;
//   imagePopupLink.alt = eventPopupImage.alt;
//   imagePopup.querySelector(".popup__text").textContent =
//     eventPopupImage.getAttribute("alt");
//   openPopup(imagePopup);
// }

//export
// function createCard(name, link) {
//   const elementTemplate = document.querySelector("#element-template").content;
//   const cardElement = elementTemplate.querySelector(".element").cloneNode(true);
//   const cardElementImage = cardElement.querySelector(".element__image");
//   cardElementImage.src = link;
//   cardElementImage.alt = name;
//   cardElement.querySelector(".element__text").textContent = name;
//   cardElement
//     .querySelector(".element__hearth")
//     .addEventListener("click", changeLikeHearth);
//   cardElement
//     .querySelector(".element__trash")
//     .addEventListener("click", deleteCard);
//   cardElementImage.addEventListener("click", openCardImage);
//   return cardElement;
// }

// Добавляем первые 6 карточек

// Добавление карточки Элементов
//export
// function addCard(evt) {
//   evt.preventDefault();
//   const placeName = document.querySelector('input[name="place"]');
//   const imageLink = document.querySelector('input[name="image"]');
//   elements.prepend(createCard(placeName.value, imageLink.value));
//   closePopup(elementPopup);
// }

// Кнопка профиля
//export
// function openProfilePopup() {
//   openPopup(profilePopup);
//   nameInput.value = titleProfile.textContent;
//   jobInput.value = jobProfile.textContent;
// }
//export
// function crossProfilePopup() {
//   closePopup(profilePopup);
// }
// //export
// function handleProfileSubmit(evt) {
//   evt.preventDefault();
//   const titleProfile = document.querySelector(".profile__title");
//   const jobProfile = document.querySelector(".profile__text");
//   titleProfile.textContent = nameInput.value;
//   jobProfile.textContent = jobInput.value;
//   closePopup(profilePopup);
// }

// Открытие попапа добавления элемента
//export
// function openElementPopup() {
//   openPopup(elementPopup);
//   const elementForm = elementPopup.querySelector(".popup__box");
//   elementForm.reset();
// }

// Попап изображение
