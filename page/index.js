// Объявления

const content = document.querySelector('.content');
const elements = document.querySelector('.elements');
const formElement = document.querySelector('.element__popup');
const elementTemplate = document.querySelector('#element-template').content;
const buttonProfileEdit = document.querySelector('.profile__edit');
const popupProfile = document.querySelector('.profile__popup');
const closeProfile = document.querySelector('.profile__close');
const titleProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__text');
const profileForm = document.querySelector('.profile__form');
const nameInput = document.querySelector('input[name="profile"]');
const jobInput = document.querySelector('input[name="occupation"]');
const closeElement = document.querySelector('.element__close');
const buttonElementAdd = document.querySelector('.profile__button');
const popupImage = document.querySelector('.popup_type_image');
const closeImage = document.querySelector('.image__close');
const placeName = document.querySelector('input[name="place-name"]')
const imageLink = document.querySelector('input[name="image-link"]')

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

// Добавляем первые 6 карточек

for (let i = 0; i < initialCards.length; i++) {
  const cardElementStart = elementTemplate.querySelector('.element').cloneNode(true);
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
  cardElementStart.querySelector('.element__image').addEventListener('click', function (event) {
    const eventPopupImage = event.target;
    popupImage.querySelector('.popup__image').src = eventPopupImage.getAttribute('src');
    popupImage.querySelector('.popup__image').alt = eventPopupImage.getAttribute('alt');
    popupImage.querySelector('.popup__text').textContent = eventPopupImage.getAttribute('alt');
    popupImage.classList.toggle('popup_opened');
  });
  elements.append(cardElementStart);
};

// Кнопка профиля

function openProfilePopup() {
  popupProfile.classList.toggle('popup_opened');
  nameInput.value = titleProfile.textContent;
  jobInput.value = jobProfile.textContent;
};

buttonProfileEdit.addEventListener('click', openProfilePopup);

function closeProfilePopup() {
  popupProfile.classList.remove('popup_opened');
};

closeProfile.addEventListener('click', closeProfilePopup);

function formSubmitHandler(evt) {
  evt.preventDefault();
  const titleProfile = document.querySelector('.profile__title');
  const jobProfile = document.querySelector('.profile__text');
  titleProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  popupProfile.classList.toggle('popup_opened');
}

profileForm.addEventListener('submit', formSubmitHandler);

// Открытие попапа добавления элемента

function openElementPopup() {
  formElement.classList.toggle('popup_opened');
  placeName.value = '';
  imageLink.value = '';
};

buttonElementAdd.addEventListener('click', openElementPopup);

closeElement.addEventListener('click', function () {
  formElement.classList.remove('popup_opened');
});

// Добавление карточки Элементов

function addCard(evt) {
  evt.preventDefault();
  const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
  const popupImage = document.querySelector('.popup_type_image');
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
  cardElement.querySelector('.element__image').addEventListener('click', function (event) {
    const eventPopupImage = event.target;
    popupImage.querySelector('.popup__image').src = eventPopupImage.getAttribute('src');
    popupImage.querySelector('.popup__image').alt = eventPopupImage.getAttribute('alt');
    popupImage.querySelector('.popup__text').textContent = eventPopupImage.getAttribute('alt');
    popupImage.classList.toggle('popup_opened');
  })
  elements.prepend(cardElement);
  formElement.classList.toggle('popup_opened');
}

formElement.addEventListener('submit', addCard);

// Попап изображение

closeImage.addEventListener('click', function () {
  popupImage.classList.remove('popup_opened');
});

// const imageBox = document.querySelectorAll('.element__image');

// imageBox.addEventListener('click', function(event) {
//   const eventPopupImage = event.target;
//   // const lalala = eventPopupImage.closest('.')
//   eventPopupImage.getAttribute('src');
//   console.log(eventPopupImage.getAttribute('src'));
// })

