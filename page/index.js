
const content = document.querySelector('.content');
const elements = document.querySelector('.elements')

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

for (let i = 0; i < initialCards.length; i++) {
  elements.insertAdjacentHTML("afterbegin",
    `<article class="element">
    <img src="${initialCards[i].link}" alt="${initialCards[i].name}" class="element__image">
      <h2 class="element__text">${initialCards[i].name}</h2>
      <button class="element__hearth" type="button"></button>
      <button class="element__trash" type="button"></button>
</article>`);
}

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

const formElement = document.querySelector('.element__popup');
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

function formSubmitHandler(evt) {
  evt.preventDefault();
  const titleProfile = document.querySelector('.profile__title');
  const jobProfile = document.querySelector('.profile__text');
  titleProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  popupProfile.classList.toggle('popup_opened');
}

profileForm.addEventListener('submit', formSubmitHandler);


function addCard(evt) {
  evt.preventDefault();
  const placeName = document.querySelector('input[name="place-name"]')
  const imageLink = document.querySelector('input[name="image-link"]')
  elements.insertAdjacentHTML("afterbegin",
    `<article class="element">
      <img src="${imageLink.value}" alt="${placeName.value}" class="element__image">
        <h2 class="element__text">${placeName.value}</h2>
        <button class="element__hearth" type="button"></button>
        <button class="element__trash" type="button"></button>
</article>`);
  formElement.classList.toggle('popup_opened');
}

formElement.addEventListener('submit', addCard);

// const likeHearth = document.querySelector('.element__hearth');

// console.log(likeHearth)

// likeHearth.addEventListener('click', function () {
//   likeHearth.classList.toggle('element__hearth_active')
// })


