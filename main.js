(()=>{"use strict";var t={inputSelector:".popup__item",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_inactive",inputErrorClass:"popup__item_type_error",errorClass:"popup__item-error_active"},e=document.querySelector(".popup_type_edit-profile"),n=document.querySelector(".profile__edit-button"),r=e.querySelector(".popup__form"),o=document.querySelector(".popup_type_add-card"),i=document.querySelector(".profile__add-button"),a=o.querySelector(".popup__form"),u=document.querySelector(".popup_type_avatar"),c=document.querySelector(".profile__avatar-btn"),l=u.querySelector(".popup__form");function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,y(r.key),r)}}function p(t,e,n){return(e=y(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function y(t){var e=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===s(e)?e:String(e)}var h=function(){function t(e,n,r){var o=this,i=r.handleCardClick,a=r.handleDeleteClick,u=r.handleLikeClick;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,"_handleDeleteCard",(function(){o._handleDeleteClick(o,o._cardId)})),p(this,"_handleLikeCard",(function(){o._handleLikeClick(o._isLiked,o._cardId)})),p(this,"_handleOpenZoomImage",(function(){o._handleCardClick(o._cardData)})),this._cardData=e,this._myId=e.myId,this._cardId=e._id,this._ownerId=e.owner._id,this._likes=e.likes,this._isLiked=!1,this._likesLength=e.likes.length,this._templateSelector=n,this._handleCardClick=i,this._handleDeleteClick=a,this._handleLikeClick=u}var e,n;return e=t,(n=[{key:"deleteCardElement",value:function(){this._element.remove(),this._element=null,this._photoImageElement=null,this._photoLike=null,this._photoDelete=null,this._cardId=null}},{key:"_changeVisibleTrash",value:function(){this._myId!==this._ownerId&&this._photoDelete.remove()}},{key:"_checkLike",value:function(){var t=this;this._likes.forEach((function(e){if(e._id===t._myId)return t._photoLike.classList.add("photo__like_active"),void(t.isLiked=!0)})),this._counter.textContent=this._likesLength}},{key:"toggleLikes",value:function(t){this._photoLike.classList.toggle("photo__like_active"),this._counter.textContent=t.length}},{key:"_getTemplate",value:function(){return document.getElementById(this._templateSelector).content.querySelector(".photo__cell").cloneNode(!0)}},{key:"_setEventListeners",value:function(){this._photoDelete.addEventListener("click",this._handleDeleteCard),this._photoLike.addEventListener("click",this._handleLikeCard),this._photoImageElement.addEventListener("click",this._handleOpenZoomImage)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._photoImageElement=this._element.querySelector(".photo__image"),this._photoLike=this._element.querySelector(".photo__like"),this._photoDelete=this._element.querySelector(".photo__delete"),this._counter=this._element.querySelector(".photo__like-count"),this._photoImageElement.src=this._cardData.link,this._photoImageElement.alt=this._cardData.name,this._element.querySelector(".photo__title").textContent=this._cardData.name,this._changeVisibleTrash(),this._checkLike(),this._setEventListeners(),this._element}}])&&f(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===d(o)?o:String(o)),r)}var o}var v=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._formElement=n,this._button=this._formElement.querySelector(this._submitButtonSelector),this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector))}var e,n;return e=t,(n=[{key:"_showInputError",value:function(t,e){e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(t,e){e.classList.remove(this._inputErrorClass),t.textContent="",t.classList.remove(this._errorClass)}},{key:"_enableSubmitButton",value:function(){this._button.classList.remove(this._inactiveButtonClass),this._button.removeAttribute("disabled")}},{key:"disableSubmitButton",value:function(){this._button.classList.add(this._inactiveButtonClass),this._button.setAttribute("disabled",!0)}},{key:"_hasValidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_toggleSubmitButtonState",value:function(){this._hasValidInput()?this.disableSubmitButton():this._enableSubmitButton()}},{key:"_checkInputValidity",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));t.validity.valid?this._hideInputError(e,t):this._showInputError(e,t)}},{key:"_setEventListeners",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleSubmitButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"resetValidation",value:function(){var t=this;this._inputList.forEach((function(e){var n=t._formElement.querySelector(".".concat(e.id,"-error"));t._hideInputError(n,e)}))}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==b(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===b(o)?o:String(o)),r)}var o}var g=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"renderItem",value:function(t){t.forEach(this._renderer)}}])&&_(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,w(r.key),r)}}function w(t){var e=function(t,e){if("object"!==S(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===S(e)?e:String(e)}var E=function(){function t(e){var n,r,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=function(t){"Escape"===t.key&&i.close()},(r=w(r="_handleEscClose"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._popup=document.querySelector(e)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;document.addEventListener("click",(function(e){var n=e.target.classList.contains("popup"),r=e.target.classList.contains("popup__close-button");(n||r)&&t.close()}))}}])&&k(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==j(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===j(o)?o:String(o)),r)}var o}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=P(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},O.apply(this,arguments)}function C(t,e){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},C(t,e)}function P(t){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},P(t)}var I=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&C(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=P(r);if(o){var n=P(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===j(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,t))._popupImage=e._popup.querySelector(".popup__image_type_zoom-image"),e._imagePopupTitle=e._popup.querySelector(".popup__caption_type_zoom-image"),e}return e=a,(n=[{key:"open",value:function(t){O(P(a.prototype),"open",this).call(this),this._popupImage.src=t.link,this._popupImage.alt=t.name,this._imagePopupTitle.textContent=t.name}}])&&L(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(E);function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function B(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==T(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===T(o)?o:String(o)),r)}var o}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=D(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},R.apply(this,arguments)}function q(t,e){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},q(t,e)}function D(t){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},D(t)}var x=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&q(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=D(r);if(o){var n=D(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===T(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t,e){var n,r=t.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleFormSubmit=r,n._form=n._popup.querySelector(".popup__form"),n._inputList=n._form.querySelectorAll(".popup__item"),n._submitButton=n._form.querySelector(".popup__save-button"),n._initialButtonText=n._submitButton.textContent,n}return e=a,(n=[{key:"_getInputValues",value:function(){var t={};return this._inputList.forEach((function(e){t[e.name]=e.value})),t}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"close",value:function(){R(D(a.prototype),"close",this).call(this),this._form.reset()}},{key:"renderLoading",value:function(t){this._submitButton.textContent=t?"".concat(this._initialButtonText,"..."):this._initialButtonText}},{key:"setEventListeners",value:function(){var t=this;R(D(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues())}))}}])&&B(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(E);function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function z(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==A(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==A(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===A(o)?o:String(o)),r)}var o}var V=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._profileName=document.querySelector(e.nameSelector),this._profileJob=document.querySelector(e.jobSelector),this._profileAvatar=document.querySelector(e.avatarSelector)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,job:this._profileJob.textContent}}},{key:"getAvatarInfo",value:function(){return{avatar:this._profileAvatar.src}}},{key:"setAvatar",value:function(t){this._profileAvatar.src=t}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.job,r=t.avatar;this._profileName.textContent=e,this._profileJob.textContent=n,this._profileAvatar.src=r}}])&&z(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function U(t){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U(t)}function F(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==U(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==U(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===U(o)?o:String(o)),r)}var o}var N=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.baseUrl,this._headers=e.headers,this._authorization=e.headers.authorization}var e,n;return e=t,(n=[{key:"_checkResponce",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:{authorization:this._authorization}}).then(this._checkResponce)}},{key:"getCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:{authorization:this._authorization}}).then(this._checkResponce)}},{key:"sentUsersData",value:function(t){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify({name:t.name,about:t.job})}).then(this._checkResponce)}},{key:"createCard",value:function(t){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify({name:t.name,link:t.link})}).then(this._checkResponce)}},{key:"addAvatar",value:function(t){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify({avatar:t.avatar})}).then(this._checkResponce)}},{key:"deleteCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this._authorization}}).then(this._checkResponce)}},{key:"addLike",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:{authorization:this._authorization}}).then(this._checkResponce)}},{key:"deleteLike",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:{authorization:this._authorization}}).then(this._checkResponce)}}])&&F(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function J(t){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},J(t)}function H(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==J(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==J(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===J(o)?o:String(o)),r)}var o}function M(){return M="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=$(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},M.apply(this,arguments)}function Z(t,e){return Z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Z(t,e)}function $(t){return $=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},$(t)}var G=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Z(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=$(r);if(o){var n=$(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===J(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._form=n._popup.querySelector(".popup__form"),n._handleFormSubmit=e,n._submitButton=n._form.querySelector(".popup__save-button"),n._initialButtonText=n._submitButton.textContent,n}return e=a,(n=[{key:"setEventListeners",value:function(){var t=this;M($(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._item,t._cardId)}))}},{key:"renderLoading",value:function(t){this._submitButton.textContent=t?"Удаление...":this._initialButtonText}},{key:"open",value:function(t,e){M($(a.prototype),"open",this).call(this),this._item=t,this._cardId=e}}])&&H(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(E);function K(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var Q=new N({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-69",headers:{authorization:"9ec885fb-bc6f-4c8c-9e39-a212b12d1d1a","Content-Type":"application/json"}}),W=new v(t,r);W.enableValidation();var X=new v(t,a);X.enableValidation();var Y=new v(t,l);Y.enableValidation();var tt=new V({nameSelector:".profile__title",jobSelector:".profile__subtitle",avatarSelector:".profile__avatar"}),et=new x({handleFormSubmit:function(t){et.renderLoading(!0),Q.sentUsersData(t).then((function(t){tt.setUserInfo({name:t.name,job:t.about,avatar:t.avatar}),et.close()})).catch((function(t){console.log("Ошибка:",t)})).finally((function(){it.renderLoading(!1)}))}},".popup_type_edit-profile");et.setEventListeners();var nt=new E(".popup_type_edit-profile");n.addEventListener("click",(function(){W.resetValidation(),W.disableSubmitButton(),et.setInputValues(tt.getUserInfo()),nt.open()})),nt.setEventListeners();var rt=new I(".popup_type_zoom-image"),ot=new E(".popup_type_add-card");i.addEventListener("click",(function(){ot.open(),X.disableSubmitButton(),X.resetValidation()})),ot.setEventListeners();var it=new x({handleFormSubmit:function(t){it.renderLoading(!0),Q.createCard(t).then((function(t){t.myId=t.owner._id,ct(t),it.close()})).catch((function(t){console.log("Ошибка:",t)})).finally((function(){it.renderLoading(!1)}))}},".popup_type_add-card");it.setEventListeners();var at=new g({renderer:function(t){ct(t)}},".photo");rt.setEventListeners();var ut=new G(".popup_type_confirm",(function(t,e){ut.renderLoading(!0),Q.deleteCard(e).then((function(e){console.log("карточка удалена с сервера",e),t.deleteCardElement(),ut.close()})).catch((function(t){console.log("Ошибка при удалении карточки:",t)})).finally((function(){ut.renderLoading(!1)}))}));ut.setEventListeners();var ct=function(t){var e=new h(t,"photo-template",{handleCardClick:function(t){return rt.open(t)},handleDeleteClick:function(t,e){console.log("handleDeleteClickcardData:",t,e),ut.open(t,e)},handleLikeClick:function(t,n){t?Q.deleteLike(n).then((function(t){e.toggleLikes(t.likes)})).catch((function(t){console.log("Ошибка при удалении лайка:",t)})):Q.addLike(n).then((function(t){e.toggleLikes(t.likes)})).catch((function(t){console.log("Ошибка при добавлении лайка:",t)})).finally()}}),n=e.generateCard();at.addItem(n)},lt=new E(".popup_type_avatar");c.addEventListener("click",(function(){lt.open(),Y.disableSubmitButton(),Y.resetValidation()})),lt.setEventListeners();var st=new x({handleFormSubmit:function(t){st.renderLoading(!0),Q.addAvatar(t).then((function(t){tt.getAvatarInfo(t.avatar),tt.setAvatar(t.avatar),st.close()})).catch((function(t){console.log("Ошибка при обновлении аватара:",t)})).finally((function(){st.renderLoading(!1)}))}},".popup_type_avatar");st.setEventListeners(),Promise.all([Q.getInfo(),Q.getCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,u=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(u.push(r.value),u.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(e,n)||function(t,e){if(t){if("string"==typeof t)return K(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?K(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];i.forEach((function(t){return t.myId=o._id})),at.renderItem(i.reverse()),tt.setUserInfo({name:o.name,job:o.about,avatar:o.avatar})})).catch((function(t){console.log("Ошибка при загрузке данных о пользователе:",t)})).finally()})();