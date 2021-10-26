import {
  openPopup,
  closePopup,
  profilePopup,
  elementPopup,
  removeButtonActivity,
  avatarPopup,
  jobProfile,
  titleProfile,
  avatarLink,
  buttonIsLoading,
  buttonText,
  deletePopup,
} from "./utils.js";
import { changeAvatar, userChangeData } from "./api.js";
import {deleteCard} from "./card.js"

const nameInput = document.querySelector('input[name="profile"]');
const jobInput = document.querySelector('input[name="occupation"]');
const avatarInput = document.querySelector('input[name="avatar"]');
export let delTarget = {
  cardId: '',
  item: ''
}

export function closeOverlay(event) {
  const popup = document.querySelector(".popup_opened");
  if (event.target === popup) {
    closePopup(popup);
  }
}

export function closeEsc(event) {
  const popup = document.querySelector(".popup_opened");
  if (event.key === "Escape") {
    closePopup(popup);
  }
}

export function openProfilePopup() {
  openPopup(profilePopup);
  nameInput.value = titleProfile.textContent;
  jobInput.value = jobProfile.textContent;
}

export function crossProfilePopup() {
  closePopup(profilePopup);
}

export function handleProfileSubmit(evt) {
  evt.preventDefault();
  buttonIsLoading(true, buttonText.save, profilePopup);
  const userNewData = {
    name: nameInput.value,
    about: jobInput.value,
  };
  userChangeData(userNewData)
    .then((result) => {
      console.log(result);
      titleProfile.textContent = result.name;
      jobProfile.textContent = result.about;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally((res) => {
      closePopup(profilePopup);
      buttonIsLoading(false, buttonText.save, profilePopup);
    });
}

export function openCardDeletePopup(cardId, item) {
  openPopup(deletePopup)
  return delTarget = {
    cardId: cardId,
    item: item
  }
}

export function openElementPopup(configData) {
  openPopup(elementPopup);
  const elementForm = elementPopup.querySelector(configData.formSelector);
  const elementButton = elementForm.querySelector(
    configData.submitButtonSelector
  );
  elementForm.reset();
  removeButtonActivity(elementButton, configData);
}

export function openAvatarPopup() {
  openPopup(avatarPopup);
  avatarInput.value = avatarLink.src;
}

export function changeAvatarImage(evt) {
  evt.preventDefault();
  buttonIsLoading(true, buttonText.save, avatarPopup);
  const avatarNewLink = {
    avatar: avatarInput.value,
  };
  changeAvatar(avatarNewLink)
    .then((result) => {
      avatarLink.src = result.avatar;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally((res) => {
      buttonIsLoading(false, buttonText.save, avatarPopup);
      closePopup(avatarPopup);
    });
}
