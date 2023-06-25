export default class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
    this._authorization = options.headers.authorization;
  }

  _checkResponce(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
  }

  getInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: {
        authorization: this._authorization
      }
    })
      .then(this._checkResponce)
  }

  getCards() {
    return fetch(`${this._url}/cards`, {
      headers: {
        authorization: this._authorization
      }
    })
      .then(this._checkResponce)
  }

  sentUsersData(data) {
    return fetch(`${this._url}/users/me`, {
    method: 'PATCH',
    headers: {
      authorization: this._authorization,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: data.name,
      about: data.job
    })
})
  .then(this._checkResponce)
}

createCard(data) {
  return fetch(`${this._url}/cards`, {
    method: 'POST',
    headers: {
      authorization: this._authorization,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: data.name,
      link: data.link
    })
})
  .then(this._checkResponce)
}

addAvatar(data) {
  return fetch(`${this._url}/users/me/avatar`, {
    method: 'PATCH',
    headers: {
      authorization: this._authorization,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      avatar: data.avatar
    })
})
  .then(this._checkResponce)
}

deleteCard(_id) {
  return fetch(`${this._url}/users/cards/${_id}`, {
    method: 'DELETE',
    headers: {
      authorization: this._authorization,
      'Content-Type': 'application/json'
    },
})
  .then(this._checkResponce)
}


}





