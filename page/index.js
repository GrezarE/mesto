
const content = document.querySelector('.content');
const buttonProfile = document.querySelector('.profile__button');
const buttonProfileEdit = document.querySelector('.profile__edit');
const popupProfile = document.querySelector('.profile__popup');
const profileForm = document.querySelector('.profile__form')
const formElement = document.querySelector('.element__popup');
const closeElement = document.querySelector('.element__close');
const closeProfile = document.querySelector('.profile__close')
const nameInput = document.querySelector('input[name="profile"]');
const jobInput = document.querySelector('input[name="occupation"]');
let titleProfile = document.querySelector('.profile__title');
let jobProfile = document.querySelector('.profile__text')

buttonProfile.addEventListener('click', function () {
  formElement.classList.toggle('popup_opened');
}, false);

closeElement.addEventListener('click', function () {
  formElement.classList.remove('popup_opened');
}, false);

buttonProfileEdit.addEventListener('click', function () {
  popupProfile.classList.toggle('popup_opened');
}, false);

closeProfile.addEventListener('click', function () {
  popupProfile.classList.remove('popup_opened');
}, false);

function formSubmitHandler(evt) {
  evt.preventDefault();
  let jobValue = jobInput.value;
  let nameValue = nameInput.value;
  titleProfile.textContent = nameValue;
  jobProfile.textContent = jobValue;
  popupProfile.classList.toggle('popup_opened');
}

profileForm.addEventListener('submit', formSubmitHandler);



