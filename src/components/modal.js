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

const nameInput = document.querySelector('input[name="profile"]');
const jobInput = document.querySelector('input[name="occupation"]');
const avatarInput = document.querySelector('input[name="avatar"]');
export let delTarget = {
  cardId: "",
  item: "",
};

export function closeOverlay(event) {
  if (event.target.classList.contains("popup_opened")) {
    closePopup(event.target);
  }
}

export function closeEsc(event) {
  if (event.key === "Escape") {
    const popup = document.querySelector(".popup_opened");
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
      titleProfile.textContent = result.name;
      jobProfile.textContent = result.about;
      closePopup(profilePopup);
    })
    .catch((err) => {
      console.log(err)
      // return err
      // .then((data) => {
      //   console.log(data.message);
      // })
    })
    .finally((res) => {
      buttonIsLoading(false, buttonText.save, profilePopup);
    });
}

export function openCardDeletePopup(cardId, item) {
  openPopup(deletePopup);
  return (delTarget = {
    cardId: cardId,
    item: item,
  });
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

export function openAvatarPopup(configData) {
  openPopup(avatarPopup);
  const avatarForm = avatarPopup.querySelector(configData.formSelector);
  const avatarButton = avatarForm.querySelector(
    configData.submitButtonSelector
  );
  avatarForm.reset();
  removeButtonActivity(avatarButton, configData);
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
      closePopup(avatarPopup);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally((res) => {
      buttonIsLoading(false, buttonText.save, avatarPopup);
    });
}
