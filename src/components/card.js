import { openPopup, closePopup, imagePopup, elementPopup } from "./utils.js";
import { initialCards } from "./initial-сards.js";

const elements = document.querySelector(".elements");

function changeLikeHearth(event) {
  const eventTargetLike = event.target;
  eventTargetLike.classList.toggle("element__hearth_active");
}

function deleteCard(evt) {
  const eventTrash = evt.target;
  const listItem = eventTrash.closest(".element");
  listItem.remove();
}

function openCardImage(data) {
  const imagePopupLink = imagePopup.querySelector(".popup__image");
  imagePopupLink.src = data.link;
  imagePopupLink.alt = data.name;
  imagePopup.querySelector(".popup__text").textContent = data.name;
  openPopup(imagePopup);
}

function createCard(cardData) {
  const elementTemplate = document.querySelector("#element-template").content;
  const cardElement = elementTemplate.querySelector(".element").cloneNode(true);
  const cardElementImage = cardElement.querySelector(".element__image");
  cardElementImage.src = cardData.link;
  cardElementImage.alt = cardData.name;
  cardElement.querySelector(".element__text").textContent = cardData.name;
  cardElement.querySelector(".element__hearth").addEventListener("click", changeLikeHearth);
  cardElement.querySelector(".element__trash").addEventListener("click", deleteCard);
  cardElementImage.addEventListener("click", () => openCardImage(cardData));
  return cardElement;
}

export function addCard(evt) {
  evt.preventDefault();
  const cardData = {
    link: document.querySelector('input[name="image"]').value,
    name: document.querySelector('input[name="place"]').value,
  };
  elements.prepend(createCard(cardData));
  closePopup(elementPopup);
}

initialCards.forEach(function (item) {
  elements.append(createCard(item));
});
