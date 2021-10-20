
export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const elements = document.querySelector(".elements");


function changeLikeHearth(event) {
  const eventTargetLike = event.target;
  eventTargetLike.classList.toggle("element__hearth_active");
}

function deleteCard(evt) {
  const eventTrash = evt.target;
  const listItem = eventTrash.closest(".element");
  listItem.remove();
}

function openCardImage(event) {
  const eventPopupImage = event.target;
  imagePopupLink.src = eventPopupImage.src;
  imagePopupLink.alt = eventPopupImage.alt;
  imagePopup.querySelector(".popup__text").textContent =
    eventPopupImage.getAttribute("alt");
  openPopup(imagePopup);
}

function createCard(name, link) {
  const cardElement = elementTemplate.querySelector(".element").cloneNode(true);
  const cardElementImage = cardElement.querySelector(".element__image");
  cardElementImage.src = link;
  cardElementImage.alt = name;
  cardElement.querySelector(".element__text").textContent = name;
  cardElement
    .querySelector(".element__hearth")
    .addEventListener("click", changeLikeHearth);
  cardElement
    .querySelector(".element__trash")
    .addEventListener("click", deleteCard);
  cardElementImage.addEventListener("click", openCardImage);
  return cardElement;
}

function addCard(evt) {
  evt.preventDefault();
  elements.prepend(createCard(placeName.value, imageLink.value));
  closePopup(elementPopup);
}
