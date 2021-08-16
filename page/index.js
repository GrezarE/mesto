document.querySelector('.profile__edit').addEventListener('click', function () {
  document.querySelector('.popup').classList.toggle('popup_opened');
}, false);


document.querySelector('.popup__close').addEventListener('click', function () {
  document.querySelector('.popup').classList.remove('popup_opened');
}, false);

