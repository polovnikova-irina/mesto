export default class UserInfo {
  constructor(infoConfig) {
    this._profileName = document.querySelector(infoConfig.nameSelector);
    this._profileJob = document.querySelector(infoConfig.jobSelector);
    this._profileAvatar = document.querySelector(infoConfig.avatar);
   }


   getUserInfo() {
    //возвращает объект с данными пользователя
    return {
      name: this._profileName.textContent,
      job: this._profileJob.textContent
    };
  }

  setUserInfo(formData) {
    // принимает новые данные пользователя и добавляет их на страницу.
    this._profileAvatar.textContent = formData.avatar;
    this._profileName.textContent = formData.name;
    this._profileJob.textContent = formData.job;
  }
}
