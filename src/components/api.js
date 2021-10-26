const myAPIConfig = {
  url: "https://mesto.nomoreparties.co/v1/plus-cohort-3",
  headers: {
    authorization: "f68065c2-c2c9-4105-91f3-fd9167b5a96e",
    "Content-Type": "application/json",
  },
};

export const requestCard = () =>
  fetch(`${myAPIConfig.url}/cards`, {
    headers: myAPIConfig.headers,
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });

export const userStartData = () =>
  fetch(`${myAPIConfig.url}/users/me`, {
    headers: myAPIConfig.headers,
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });

export const cardAddRequest = (obj) =>
  fetch(`${myAPIConfig.url}/cards`, {
    method: "POST",
    headers: myAPIConfig.headers,
    body: JSON.stringify({
      name: obj.name,
      link: obj.link,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });

export const changeAvatar = (user) =>
  fetch(`${myAPIConfig.url}/users/me/avatar`, {
    method: "PATCH",
    headers: myAPIConfig.headers,
    body: JSON.stringify({
      avatar: user.avatar,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });

export const removeCard = (cardId) =>
  fetch(`${myAPIConfig.url}/cards/${cardId}`, {
    method: "DELETE",
    headers: myAPIConfig.headers,
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });

export const userChangeData = (user) =>
  fetch(`${myAPIConfig.url}/users/me`, {
    method: "PATCH",
    headers: myAPIConfig.headers,
    body: JSON.stringify({
      name: user.name,
      about: user.about,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });

export const likeCheck = (cardId) =>
  fetch(`${myAPIConfig.url}/cards/likes/${cardId}`, {
    headers: myAPIConfig.headers,
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });

export const addLike = (cardId) =>
  fetch(`${myAPIConfig.url}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: myAPIConfig.headers,
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });

export const deleteLike = (cardId) =>
  fetch(`${myAPIConfig.url}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: myAPIConfig.headers,
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
