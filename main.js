(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{x:()=>z});var t={url:"https://mesto.nomoreparties.co/v1/plus-cohort-3",headers:{authorization:"f68065c2-c2c9-4105-91f3-fd9167b5a96e","Content-Type":"application/json"}};function n(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}var o=document.querySelector('input[name="profile"]'),r=document.querySelector('input[name="occupation"]'),c=document.querySelector('input[name="avatar"]'),a={cardId:"",item:""};function u(e){e.target.classList.contains("popup_opened")&&k(e.target)}function i(e){"Escape"===e.key&&k(document.querySelector(".popup_opened"))}var l={formSelector:".popup__box",inputSelector:".popup__item",fieldsetSelector:".popup__profile",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__item_error",errorClass:"popup__input-error_visible"},s=document.querySelector(".popup_type_profile"),d=document.querySelector(".popup_type_card-add"),p=document.querySelector(".popup_type_image"),m=document.querySelector(".popup_type_avatar"),f=document.querySelector(".popup_type_delete"),_=document.querySelector(".profile__title"),v=document.querySelector(".profile__text"),h=document.querySelector(".profile__avatar"),y=document.querySelector(".elements"),S=p.querySelector(".popup__image"),q={button:"Сохранить",buttonLoad:"Сохранение..."},b={button:"Создать",buttonLoad:"Создание..."},L={button:"Да",buttonLoad:"Удаление..."};function E(e){e.classList.add("popup_opened"),document.addEventListener("keydown",i),e.addEventListener("click",u)}function k(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",i),e.removeEventListener("click",u)}function C(e,t,n){var o=n.querySelector(".popup__button");e?(o.textContent=t.buttonLoad,o.disabled=!0):(o.textContent=t.button,o.disabled=!1)}var g=function(e,t){e.disabled=!0,e.classList.add(t.inactiveButtonClass)},x=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n.inactiveButtonClass),t.disabled=!1):g(t,n)},B=document.querySelector('input[name="image"]'),D=document.querySelector('input[name="place"]');function O(e,o){var r=document.querySelector("#element-template").content.querySelector(".element").cloneNode(!0),c=r.querySelector(".element__image"),u=r.querySelector(".element__trash"),i=r.querySelector(".element__like"),l=r.querySelector(".element__hearth");return c.src=e.link,c.alt=e.name,i.textContent=e.likes.length,e.likes.some((function(e){return e._id===o}))?l.classList.add("element__hearth_active"):l.classList.remove("element__hearth_active"),r.querySelector(".element__text").textContent=e.name,l.addEventListener("click",(function(){return function(e,o){var r,c=o.querySelector(".element__hearth"),a=o.querySelector(".element__like");c.classList.contains("element__hearth_active")?(r=e._id,fetch("".concat(t.url,"/cards/likes/").concat(r),{method:"DELETE",headers:t.headers}).then(n)).then((function(e){c.classList.remove("element__hearth_active"),a.textContent=e.likes.length})).catch((function(e){console.log(e)})):function(e){return fetch("".concat(t.url,"/cards/likes/").concat(e),{method:"PUT",headers:t.headers}).then(n)}(e._id).then((function(e){c.classList.add("element__hearth_active"),a.textContent=e.likes.length})).catch((function(e){console.log(e)}))}(e,r)})),e.owner._id===o?u.addEventListener("click",(function(){return t=e._id,n=u,E(f),a={cardId:t,item:n};var t,n})):u.remove(),c.addEventListener("click",(function(){return t=e,S.src=t.link,S.alt=t.name,p.querySelector(".popup__text").textContent=t.name,void E(p);var t})),r}var P,T=document.querySelector(".profile__edit"),A=document.querySelector(".profile__button"),j=document.querySelector(".profile__avatar-box"),w=s.querySelector(".popup__close"),N=d.querySelector(".popup__close"),I=p.querySelector(".popup__close"),J=m.querySelector(".popup__close"),H=f.querySelector(".popup__close");P=l,Array.from(document.querySelectorAll(P.formSelector)).forEach((function(e){!function(e,t){e.addEventListener("submit",(function(e){e.preventDefault()}));var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);x(n,o,t),n.forEach((function(r){r.addEventListener("input",(function(){!function(e,t,n){t.validity.valid?function(e,t,n){var o=e.querySelector("#".concat(t.name,"-error"));t.classList.remove(n.inputErrorClass),o.textContent="",o.classList.remove(n.errorClass)}(e,t,n):function(e,t,n,o){var r=e.querySelector("#".concat(t.name,"-error"));t.classList.add(o.inputErrorClass),r.textContent=n,r.classList.add(o.errorClass)}(e,t,t.validationMessage,n)}(e,r,t),x(n,o,t)}))}))}(e,P)})),I.addEventListener("click",(function(){k(p)})),j.addEventListener("click",(function(){return function(e){E(m);var t=m.querySelector(e.formSelector),n=t.querySelector(e.submitButtonSelector);t.reset(),g(n,e)}(l)})),J.addEventListener("click",(function(){k(m)})),m.addEventListener("submit",(function(e){var o;e.preventDefault(),C(!0,q,m),(o={avatar:c.value},fetch("".concat(t.url,"/users/me/avatar"),{method:"PATCH",headers:t.headers,body:JSON.stringify({avatar:o.avatar})}).then(n)).then((function(e){h.src=e.avatar,k(m)})).catch((function(e){console.log(e)})).finally((function(e){C(!1,q,m)}))})),H.addEventListener("click",(function(){k(f)})),f.addEventListener("submit",(function(e){var o;e.preventDefault(),C(!0,L,f),(o=a.cardId,fetch("".concat(t.url,"/cards/").concat(o),{method:"DELETE",headers:t.headers}).then(n)).then((function(e){a.item.closest(".element").remove(),k(f)})).catch((function(e){console.log(e)})).finally((function(e){C(!1,L,f)}))})),A.addEventListener("click",(function(){return function(e){E(d);var t=d.querySelector(e.formSelector),n=t.querySelector(e.submitButtonSelector);t.reset(),g(n,e)}(l)})),N.addEventListener("click",(function(){k(d)})),d.addEventListener("submit",(function(e){var o;e.preventDefault(),C(!0,b,d),(o={link:B.value,name:D.value},fetch("".concat(t.url,"/cards"),{method:"POST",headers:t.headers,body:JSON.stringify({name:o.name,link:o.link})}).then(n)).then((function(e){y.prepend(O(e,z)),k(d)})).catch((function(e){console.log(e)})).finally((function(e){C(!1,b,d)}))})),s.addEventListener("submit",(function(e){var c;e.preventDefault(),C(!0,q,s),(c={name:o.value,about:r.value},fetch("".concat(t.url,"/users/me"),{method:"PATCH",headers:t.headers,body:JSON.stringify({name:c.name,about:c.about})}).then(n)).then((function(e){_.textContent=e.name,v.textContent=e.about,k(s)})).catch((function(e){console.log(e)})).finally((function(e){C(!1,q,s)}))})),w.addEventListener("click",(function(){k(s)})),T.addEventListener("click",(function(){E(s),o.value=_.textContent,r.value=v.textContent}));var z="";fetch("".concat(t.url,"/users/me"),{headers:t.headers}).then(n).then((function(e){v.textContent=e.about,_.textContent=e.name,h.src=e.avatar,z=e._id})).then((function(){fetch("".concat(t.url,"/cards"),{headers:t.headers}).then(n).then((function(e){e.forEach((function(e){y.append(O(e,z))}))})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))})();