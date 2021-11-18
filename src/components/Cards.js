function changeLikeHearth(cardData, item) {
  const eventTargetLike = item.querySelector(".element__hearth");
  const likeNumber = item.querySelector(".element__like");
  if (eventTargetLike.classList.contains("element__hearth_active")) {
    deleteLike(cardData._id)
      .then((res) => {
        eventTargetLike.classList.remove("element__hearth_active");
        likeNumber.textContent = res.likes.length;
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    addLike(cardData._id)
      .then((res) => {
        eventTargetLike.classList.add("element__hearth_active");
        likeNumber.textContent = res.likes.length;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export function deleteCard(evt) {
  evt.preventDefault();
  buttonIsLoading(true, buttonText.delete, deletePopup);
  removeCard(delTarget.cardId)
    .then((res) => {
      const eventTrash = delTarget.item;
      const listItem = eventTrash.closest(".element");
      listItem.remove();
      closePopup(deletePopup);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally((res) => {
      buttonIsLoading(false, buttonText.delete, deletePopup);
    });
}
function openCardImage(data) {
  imagePopupLink.src = data.link;
  imagePopupLink.alt = data.name;
  imagePopup.querySelector(".popup__text").textContent = data.name;
  openPopup(imagePopup);
}

export function createCard(cardData, userId) {
  const elementTemplate = document.querySelector("#element-template").content;
  const cardElement = elementTemplate.querySelector(".element").cloneNode(true);
  const cardElementImage = cardElement.querySelector(".element__image");
  const cardDelete = cardElement.querySelector(".element__trash");
  const cardLike = cardElement.querySelector(".element__like");
  const cardHearth = cardElement.querySelector(".element__hearth");
  cardElementImage.src = cardData.link;
  cardElementImage.alt = cardData.name;
  cardLike.textContent = cardData.likes.length;
  if (cardData.likes.some((item) => item._id === userId)) {
    cardHearth.classList.add("element__hearth_active");
  } else {
    cardHearth.classList.remove("element__hearth_active");
  }
  cardElement.querySelector(".element__text").textContent = cardData.name;
  cardHearth.addEventListener("click", () =>
    changeLikeHearth(cardData, cardElement)
  );
  if (cardData.owner._id === userId) {
    cardDelete.addEventListener("click", () =>
      openCardDeletePopup(cardData._id, cardDelete)
    );
  } else {
    cardDelete.remove();
  }
  cardElementImage.addEventListener("click", () => openCardImage(cardData));
  return cardElement;
}





export default class Card {
  constructor({data, handleCardClick}, selector) {
    this._selector = selector;
    this._link = data.link;
    this._name = data.name;
    this._likeLength = cardData.likes.length;
    this._handleCardClick = handleCardClick
  }
    


}
