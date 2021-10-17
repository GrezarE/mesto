// Объявления

const content = document.querySelector('.content');
const elements = document.querySelector('.elements');
const elementTemplate = document.querySelector('#element-template').content;
const buttonProfileEdit = document.querySelector('.profile__edit');
const titleProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__text');
const nameInput = document.querySelector('input[name="profile"]');
const jobInput = document.querySelector('input[name="occupation"]');
const buttonElementAdd = document.querySelector('.profile__button');
const placeName = document.querySelector('input[name="place-name"]');
const imageLink = document.querySelector('input[name="image-link"]');
const profilePopup = document.querySelector('.popup_type_profile');
const elementPopup = document.querySelector('.popup_type_card-add');
const imagePopup = document.querySelector('.popup_type_image');
const profileCloseButton = profilePopup.querySelector('.popup__close')
const elementCloseButton = elementPopup.querySelector('.popup__close')
const imageCloseButton = imagePopup.querySelector('.popup__close');
const imagePopupLink = imagePopup.querySelector('.popup__image');
const elementForm = elementPopup.querySelector('.popup__box');


//тестирую

function closeOverlay(event) {
  const popup = document.querySelector('.popup_opened')
  if (event.target === popup) {
    popup.classList.remove('popup_opened')
  }
}

profilePopup.addEventListener('click', closeOverlay);
elementPopup.addEventListener('click', closeOverlay);
imagePopup.addEventListener('click', closeOverlay);

//закончил тест

// Функции открытия и закрытия попапа

function openPopup(popup) {
  popup.classList.add('popup_opened')
};

function closePopup(popup) {
  popup.classList.remove('popup_opened')
};

// Функции разметки карточек

function changeLikeHearth(event) {
  const eventTargetLike = event.target;
  eventTargetLike.classList.toggle('element__hearth_active');
};

function deleteCard(evt) {
  const eventTrash = evt.target;
  const listItem = eventTrash.closest('.element');
  listItem.remove();
};

function openCardImage(event) {
  const eventPopupImage = event.target;
  imagePopupLink.src = eventPopupImage.src;
  imagePopupLink.alt = eventPopupImage.alt;
  imagePopup.querySelector('.popup__text').textContent = eventPopupImage.getAttribute('alt');
  openPopup(imagePopup);
};

function createCard(name, link) {
  const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
  const cardElementImage = cardElement.querySelector('.element__image');
  cardElementImage.src = link;
  cardElementImage.alt = name;
  cardElement.querySelector('.element__text').textContent = name;
  cardElement.querySelector('.element__hearth').addEventListener('click', changeLikeHearth);
  cardElement.querySelector('.element__trash').addEventListener('click', deleteCard);
  cardElementImage.addEventListener('click', openCardImage);
  return cardElement;
}

// Добавляем первые 6 карточек

initialCards.forEach(function (item) {
  elements.append(createCard(item.name, item.link));
});

// Добавление карточки Элементов

function addCard(evt) {
  evt.preventDefault();
  elements.prepend(createCard(placeName.value, imageLink.value));
  closePopup(elementPopup)
}

elementPopup.addEventListener('submit', addCard);

// Кнопка профиля

function openProfilePopup() {
  openPopup(profilePopup);
  nameInput.value = titleProfile.textContent;
  jobInput.value = jobProfile.textContent;
};

buttonProfileEdit.addEventListener('click', openProfilePopup);

function crossProfilePopup() {
  closePopup(profilePopup);
};

profileCloseButton.addEventListener('click', crossProfilePopup);

function handleProfileSubmit(evt) {
  evt.preventDefault();
  const titleProfile = document.querySelector('.profile__title');
  const jobProfile = document.querySelector('.profile__text');
  titleProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(profilePopup);
}

profilePopup.addEventListener('submit', handleProfileSubmit);

// Открытие попапа добавления элемента

function openElementPopup() {
  openPopup(elementPopup);
  elementForm.reset();
};

buttonElementAdd.addEventListener('click', openElementPopup);

elementCloseButton.addEventListener('click', function () {
  closePopup(elementPopup);
});

// Попап изображение

imageCloseButton.addEventListener('click', function () {
  closePopup(imagePopup);
});

