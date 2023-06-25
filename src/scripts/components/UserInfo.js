export default class UserInfo {
  constructor(infoConfig) {
    this._profileName = document.querySelector(infoConfig.nameSelector);
    this._profileJob = document.querySelector(infoConfig.jobSelector);
    this._profileAvatar = document.querySelector(infoConfig.avatarSelector);
   }


   getUserInfo() {
    //возвращает объект с данными пользователя
    return {
      name: this._profileName.textContent,
      job: this._profileJob.textContent,
    };
  }

  getAvatarInfo() {
    //возвращает объект с данными пользователя
    return {
      avatar: this._profileAvatar.src
    };
  }

  setAvatar(avatarUrl) {
    this._profileAvatar.src = avatarUrl;
  }

  setUserInfo({name, job, avatar}) {
    // принимает новые данные пользователя и добавляет их на страницу.
    this._profileName.textContent = name;
    this._profileJob.textContent = job;
    this._profileAvatar.src = avatar;
  }
}
