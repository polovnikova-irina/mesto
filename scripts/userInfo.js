export default class UsreInfo {
  constructor(nameSelector, informationSelector) {
    this._nameSelecor = document.querySelector(nameSelector);
    this._informationSelector = document.querySelector(informationSelector);
  }

  getUserInfo() {
    //возвращает объект с данными пользователя.
    //Этот метод пригодится когда данные пользователя нужно будет
    //подставить в форму при открытии.
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
  }

  setUserInfo() {
    // принимает новые данные пользователя и добавляет их на страницу.
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
  }
}
