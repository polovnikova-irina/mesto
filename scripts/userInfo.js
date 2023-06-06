export default class UserInfo {
  constructor(nameSelector, jobSelector) {
    this._profileName = document.querySelector(nameSelector);
    this._profileJob = document.querySelector(jobSelector);
   }

  getUserInfo() {
    //возвращает объект с данными пользователя.
    //Этот метод пригодится когда данные пользователя нужно будет
    //подставить в форму при открытии.
    /*this._nameInput.value = this._profileTitle.textContent;
    this._jobInput.value = this._profileSubtitle.textContent;*/
    return {name: this._profileName.textContent, job: this._profileJob.textContent };
  }

  setUserInfo(formData) {
    // принимает новые данные пользователя и добавляет их на страницу.
    this._profileName.textContent = formData.name;
    this._profileJob.textContent = formData.job;
  }
}
