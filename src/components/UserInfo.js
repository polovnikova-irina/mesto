export default class UserInfo {
  constructor(nameSelector, jobSelector) {
    this._profileName = document.querySelector(nameSelector);
    this._profileJob = document.querySelector(jobSelector);
   }

   getUserInfo() {
    return {
      name: this._profileName.textContent,
      job: this._profileJob.textContent
    };
  }

  setUserInfo(formData) {
    // принимает новые данные пользователя и добавляет их на страницу.
    this._profileName.textContent = formData.name;
    this._profileJob.textContent = formData.job;
  }
}
