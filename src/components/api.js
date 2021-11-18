const myAPIConfig = {
  url: "https://mesto.nomoreparties.co/v1/plus-cohort-3",
  headers: {
    authorization: "f68065c2-c2c9-4105-91f3-fd9167b5a96e",
    "Content-Type": "application/json",
  },
};

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  // return Promise.reject(res.json());
  return Promise.reject(`Ошибка: ${res.statusText}`);
}

// class Api {
//   constructor(obj) {
//     (this.url = obj.url), (this.headers = obj.headers);
//   }

//   _checkResponse(res) {
//     if (res.ok) {
//       return res.json();
//     }
//     return Promise.reject(`Ошибка: ${res.statusText}`);
//   }

//   userStartData() {
//     return fetch(`${this.url}/users/me`, {
//       headers: this.headers,
//     }).then(this._checkResponse);
//   }

//   requestCard() {
//     return fetch(`${this.url}/cards`, {
//       headers: this.headers,
//     }).then(this._checkResponse);
//   }

//   changeAvatar(user) {
//     return fetch(`${this.url}/users/me/avatar`, {
//       method: "PATCH",
//       headers: this.headers,
//       body: JSON.stringify({
//         avatar: user.avatar,
//       }),
//     }).then(this._checkResponse);
//   }

//   cardAddRequest(obj) {
//     return fetch(`${this.url}/cards`, {
//       method: "POST",
//       headers: this.headers,
//       body: JSON.stringify({
//         name: obj.name,
//         link: obj.link,
//       }),
//     }).then(this._checkResponse);
//   }

//   removeCard(cardId) {
//     return fetch(`${this.url}/cards/${cardId}`, {
//       method: "DELETE",
//       headers: this.headers,
//     }).then(this._checkResponse);
//   }

//   userChangeData(user) {
//     return fetch(`${this.url}/users/me`, {
//       method: "PATCH",
//       headers: this.headers,
//       body: JSON.stringify({
//         name: user.name,
//         about: user.about,
//       }),
//     }).then(this._checkResponse);
//   }

//   likeCheck(cardId) {
//     return fetch(`${this.url}/cards/likes/${cardId}`, {
//       headers: this.headers,
//     }).then(this._checkResponse);
//   }

//   addLike(cardId) {
//     return fetch(`${this.url}/cards/likes/${cardId}`, {
//       method: "PUT",
//       headers: this.headers,
//     }).then(this._checkResponse);
//   }

//   deleteLike(cardId) {
//     return fetch(`${this.url}/cards/likes/${cardId}`, {
//       method: "DELETE",
//       headers: this.headers,
//     }).then(this._checkResponse);
//   }
// }

// export const api1 = new Api(myAPIConfig);


export const requestCard = () =>
  fetch(`${myAPIConfig.url}/cards`, {
    headers: myAPIConfig.headers,
  }).then(checkResponse);

export const userStartData = () =>
  fetch(`${myAPIConfig.url}/users/me`, {
    headers: myAPIConfig.headers,
  }).then(checkResponse);

export const cardAddRequest = (obj) =>
  fetch(`${myAPIConfig.url}/cards`, {
    method: "POST",
    headers: myAPIConfig.headers,
    body: JSON.stringify({
      name: obj.name,
      link: obj.link,
    }),
  }).then(checkResponse);

export const changeAvatar = (user) =>
  fetch(`${myAPIConfig.url}/users/me/avatar`, {
    method: "PATCH",
    headers: myAPIConfig.headers,
    body: JSON.stringify({
      avatar: user.avatar,
    }),
  }).then(checkResponse);

export const removeCard = (cardId) =>
  fetch(`${myAPIConfig.url}/cards/${cardId}`, {
    method: "DELETE",
    headers: myAPIConfig.headers,
  }).then(checkResponse);

export const userChangeData = (user) =>
  fetch(`${myAPIConfig.url}/users/me`, {
    method: "PATCH",
    headers: myAPIConfig.headers,
    body: JSON.stringify({
      name: user.name,
      about: user.about,
    }),
  }).then(checkResponse);

export const likeCheck = (cardId) =>
  fetch(`${myAPIConfig.url}/cards/likes/${cardId}`, {
    headers: myAPIConfig.headers,
  }).then(checkResponse);

export const addLike = (cardId) =>
  fetch(`${myAPIConfig.url}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: myAPIConfig.headers,
  }).then(checkResponse);

export const deleteLike = (cardId) =>
  fetch(`${myAPIConfig.url}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: myAPIConfig.headers,
  }).then(checkResponse);
