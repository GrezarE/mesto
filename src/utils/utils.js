export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeEsc);
  popup.addEventListener("click", closeOverlay);
}

export function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeEsc);
  popup.removeEventListener("click", closeOverlay);
}

export function buttonIsLoading(loading, load, item) {
  const popupButton = item.querySelector(".popup__button");
  if (loading) {
    popupButton.textContent = load.buttonLoad;
    popupButton.disabled = true;
  } else {
    popupButton.textContent = load.button;
    popupButton.disabled = false;
  }
}

export const removeButtonActivity = (button, configData) => {
  button.disabled = true;
  button.classList.add(configData.inactiveButtonClass);
};
