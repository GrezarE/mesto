export default class Card {
  constructor(
    // Что то дофига получается, но ладно
    { data, handleCardClic, userId, apiLikeAdd, apiLikeDel, apiCardDel },
    selector
  ) {
    // Селектор для template
    this._selector = selector;
    // Раскидываем дата
    this._data = data;
    // this._link = data.link;
    // this._name = data.name;
    // this._likeLength = data.likes.length;
    // фунция открытия попапа с картинкой, делаем после класса попапа
    this._handleCardClick = handleCardClic;
    // Id
    this._userId = userId;
    // api функционал, присваиваем в index.js
    this._apiLikeAdd = apiLikeAdd;
    this._apiLikeDel = apiLikeDel;
    this._apiCardDel = apiCardDel;
  }

  // Находим в template и клонируем содержимое
  _getElement() {
    const cardElement = document
      .querySelector(this._selector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }
  // Функция лайкания
  _likeButtonHandler() {
    if (!eventTarget.classList.contains("element__icon_active")) {
      this._apiLikeAdd(this._data._id)
        .then((card) => {
          // Выставляем лайки
          this._element.querySelector(".element__likes").textContent =
            card.likes.length;
          // Добавляем активную иконку
          this._element
            .querySelector(".element__icon")
            .classList.add("element__icon_active");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      this._apiLikeDel(this._data._id)
        .then((card) => {
          // Выставляем лайки
          this._element.querySelector(".element__likes").textContent =
            card.likes.length;
          // Убираем активную иконку
          this._element
            .querySelector(".element__icon")
            .classList.remove("element__icon_active");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  _setEventListener() {
    this._element
      .querySelector(".element__button-delete")
      .addEventListener("click", () => {});
    this._element
      .querySelector(".element__icon")
      .addEventListener("click", () => {
        this._likeButtonHandler();
      });
  }
  createCard() {
    this._element = this._getElement();
    this._setEventListener
    return this._element;
  }
}
