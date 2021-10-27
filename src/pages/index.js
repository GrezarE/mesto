//находим элемент body
const bodyElement = document.querySelector('.page');
//находим кнопку, по которой открывается модальное окно редактирования
const infoButton = bodyElement.querySelector('.info__button');
// находим модальное окно редактирования
const popupInfoElement = bodyElement.querySelector('.popup_option_info');

// находим кнопку "Сохранить" окна редактирования
const ButtonSave = popupInfoElement.querySelector('.form-edit__button-save');
// находим кнопку, по которой открывается модальное окно добавления
const addButton = bodyElement.querySelector('.profile__button-add');
// находим модальное окно добавления
const popupAddElement = bodyElement.querySelector('.popup_option_add');

// находим форму добавления карточек в DOM
const formAddElement = bodyElement.querySelector('[name="add"]');
// Находим поля формы в DOM
const placeInput = formAddElement.querySelector('[name="place"]');
const linkInput = formAddElement.querySelector('[name="link"]');
// Находим форму редактирования в DOM
const formEditElement = bodyElement.querySelector('[name="edit"]');
// Находим поля формы в DOM
const nameInput = formEditElement.querySelector('[name="firstname"]');
const jobInput = formEditElement.querySelector('[name="description"]');
// Выберем элементы, куда должны быть вставлены значения полей
const nameText = bodyElement.querySelector('.info__name');
const jobText = bodyElement.querySelector('.info__description');
// готовый массив с карточками
const initialCards = [
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
// находим список с карточками
const cardsContainer = bodyElement.querySelector('.cards');
// находим модальное окно карточки
const popupCardElement = bodyElement.querySelector('.popup_option_card');



// функция открытия попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

// функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// Обработчик «отправки» формы, хотя пока она никуда отправляться не будет
function formSubmitEditHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы
  // Вставим новые значения с помощью textContent
  nameText.textContent = nameInput.value;
  jobText.textContent = jobInput.value;
  // закрываем форму
  closePopup(popupInfoElement);
}

// функция обработчика кнопки "Лайк"
function likeButtonHandler(button) {
  button.addEventListener('click', function (evt) {
    const eventTarget = evt.target;
    eventTarget.classList.toggle('element__icon_active');
  });
}

// функция обработчика кнопки удаления карточки
function deleteButtonHandler(button) {
  button.addEventListener('click', function (evt) {
    const evtTarget = evt.target;
    // находим нужный элемент - карточку для удаления
    const listItem = evtTarget.closest('.cards__item');
    // удаляем его
    listItem.remove();
  });
}

// функция-обработчик нажатия на клавишу "Escape"
function closePopupHandlerEscape(evt) {
  if (evt.key === "Escape") {
    if (evt.target.classList.contains('info__button')) {
      closePopup(popupInfoElement);
    } else if (evt.target.classList.contains('profile__button-add')) {
      closePopup(popupAddElement);
    } else if (evt.target.classList.contains('element__button-card')) {
      closePopup(popupCardElement);
    };
    bodyElement.removeEventListener('keydown', closePopupHandlerEscape);
  }
}

// функция обработчика клика на карточку
function cardButtonHandler(button) {
  button.addEventListener('click', () => {
    openPopup(popupCardElement);
    // находим элемент, откуда взять нужную ссылку
    const cardLink = button.querySelector('.element__image').getAttribute('src');
    // находим элемент с названием карточки
    const cardTitle = button.nextElementSibling.firstElementChild;
    // находим элемент, куда надо вставить полученную ссылку
    const cardImage = popupCardElement.querySelector('.card__image');
    // находим элемент, куда надо вставить название карточки
    const cardCaption = popupCardElement.querySelector('.card__caption');
    // вставим новые значения
    cardImage.setAttribute('src', cardLink);
    cardImage.setAttribute('alt', cardTitle.textContent);
    cardCaption.textContent = cardTitle.textContent;
    bodyElement.addEventListener('keydown', closePopupHandlerEscape);
  });
}

// функция добавления карточки
function addCard(name, link) {
  // выбираем template и сохраняем в переменную
  const cardTemplate = bodyElement.querySelector('#card-template').content;
  // клонируем содержимое шаблона
  const cardElement = cardTemplate.querySelector('.cards__item').cloneNode(true);
  // добавляем элементу картинку и к ней атрибут alt
  cardElement.querySelector('.element__image').src = link;
  cardElement.querySelector('.element__image').alt = name;
  // добавляем название
  cardElement.querySelector('.element__caption-title').textContent = name;
  // находим кнопку "лайк"
  const likeButton = cardElement.querySelector('.element__icon');
  // добавляем обработчик клика на кнопку "лайк"
  likeButtonHandler(likeButton);
  // находим кнопку удаления карточки
  const deleteButton = cardElement.querySelector('.element__button-delete');
  // добавим обработчик клика на кнопку "удалить"
  deleteButtonHandler(deleteButton);
  // находим кнопку, по которой открывается модальное окно карточки
  const cardButton = cardElement.querySelector('.element__button-card');
  // обработчик клика на кнопку "карточка"
  cardButtonHandler(cardButton);
  return cardElement;
}

// Обработчик «отправки» формы, хотя пока она никуда отправляться не будет
function formSubmitAddHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы
  // добавим элемент в начало контейнера со списком
  cardsContainer.prepend(addCard(placeInput.value, linkInput.value));
  // закрываем форму
  closePopup(popupAddElement);
  // очищаем форму
  evt.target.reset();
}


// функция закрытия попапа кликом на кнопку "закрыть" и оверлей
function closePopupButtonOverlay (popup, evt) {
  const isCloseButtonClicked = evt.target.classList.contains('popup__close-icon');
  const isOverlayClicked = evt.target.classList.contains(popup.classList[1]);
  if (isCloseButtonClicked || isOverlayClicked) {
    closePopup(popup);
  }
}



// добавляем обработчик клика по кнопке "редактировать"
infoButton.addEventListener('click', () => {
  openPopup(popupInfoElement);
  // вставим начальные данные из профиля в поля формы
  nameInput.placeholder = nameText.textContent;
  jobInput.placeholder = jobText.textContent;
  // closePopupEscape(popupInfoElement);
  bodyElement.addEventListener('keydown', closePopupHandlerEscape);
});

// добавляем обработчик клика по кнопке "закрыть" и оверлею
popupInfoElement.addEventListener('click', (evt) => {
  closePopupButtonOverlay(popupInfoElement, evt);
});

// добавляем обработчик клика по кнопке "добавить"
addButton.addEventListener('click', () => {
  openPopup(popupAddElement);
  bodyElement.addEventListener('keydown', closePopupHandlerEscape);
});

// добавляем обработчик клика по кнопке "закрыть" и оверлею
popupAddElement.addEventListener('click', (evt) => {
  closePopupButtonOverlay(popupAddElement, evt);
});

// добавляем обработчик клика по кнопке "закрыть"
popupCardElement.addEventListener('click', (evt) => {
  closePopupButtonOverlay(popupCardElement, evt);
});

// Прикрепляем обработчик к форме редактирования: он будет следить за событием “submit” - «отправка»
formEditElement.addEventListener('submit', formSubmitEditHandler);

// Прикрепляем обработчик к форме добавления карточек: он будет следить за событием “submit” - «отправка»
formAddElement.addEventListener('submit', formSubmitAddHandler);


// перебираем массив
initialCards.forEach((item) => {
  // вызываем функцию addCard
  const cardItem = addCard(item.name, item.link);
  // добавим элемент в конец контейнера со списком
  cardsContainer.append(cardItem);
});