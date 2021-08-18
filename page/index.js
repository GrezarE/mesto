
const content = document.querySelector('.content');
const elements = document.querySelector('.elements');
const formElement = document.querySelector('.element__popup');

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

const elementTemplate = document.querySelector('#element-template').content;

for (let i = 0; i < initialCards.length; i++) {

  let cardElementStart = elementTemplate.querySelector('.element').cloneNode(true);

  cardElementStart.querySelector('.element__image').src = initialCards[i].link;
  cardElementStart.querySelector('.element__image').alt = initialCards[i].name;
  cardElementStart.querySelector('.element__text').textContent = initialCards[i].name;

  cardElementStart.querySelector('.element__hearth').addEventListener('click', function (event) {
    const eventTargetLike = event.target;
    eventTargetLike.classList.toggle('element__hearth_active');
  });

  cardElementStart.querySelector('.element__trash').addEventListener('click', function (evt) {
    const eventTrash = evt.target;
    const listItem = eventTrash.closest('.element');
    listItem.remove();
  });
  elements.append(cardElementStart);
}

// Профиль

const buttonProfileEdit = document.querySelector('.profile__edit');
const popupProfile = document.querySelector('.profile__popup');
const closeProfile = document.querySelector('.profile__close');
const titleProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__text');

buttonProfileEdit.addEventListener('click', function () {
  popupProfile.classList.toggle('popup_opened');
});

closeProfile.addEventListener('click', function () {
  popupProfile.classList.remove('popup_opened');
});

const profileForm = document.querySelector('.profile__form');
const nameInput = document.querySelector('input[name="profile"]');
const jobInput = document.querySelector('input[name="occupation"]');
const closeElement = document.querySelector('.element__close');
const buttonProfile = document.querySelector('.profile__button');

buttonProfile.addEventListener('click', function () {
  formElement.classList.toggle('popup_opened');
});

closeElement.addEventListener('click', function () {
  formElement.classList.remove('popup_opened');
});

// Кнопка профиля

function formSubmitHandler(evt) {
  evt.preventDefault();
  const titleProfile = document.querySelector('.profile__title');
  const jobProfile = document.querySelector('.profile__text');
  titleProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  popupProfile.classList.toggle('popup_opened');
}

profileForm.addEventListener('submit', formSubmitHandler);

// Добавление карточки Элементов

function addCard(evt) {
  evt.preventDefault();
  let cardElement = elementTemplate.querySelector('.element').cloneNode(true);

  const placeName = document.querySelector('input[name="place-name"]')
  const imageLink = document.querySelector('input[name="image-link"]')

  cardElement.querySelector('.element__image').src = imageLink.value;
  cardElement.querySelector('.element__image').alt = placeName.value;
  cardElement.querySelector('.element__text').textContent = placeName.value;

  cardElement.querySelector('.element__hearth').addEventListener('click', function (event) {
    const eventTargetLike = event.target;
    eventTargetLike.classList.toggle('element__hearth_active');
  });

  cardElement.querySelector('.element__trash').addEventListener('click', function (evt) {
    const eventTrash = evt.target;
    const listItem = eventTrash.closest('.element');
    listItem.remove();
  });

  elements.prepend(cardElement);

  formElement.classList.toggle('popup_opened');
}

formElement.addEventListener('submit', addCard);

