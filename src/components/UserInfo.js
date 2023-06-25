export default class UserInfo {
  constructor(usernameSelector, descriptionSelector) {
    this._userName = document.querySelector(usernameSelector);
    this._userDescription = document.querySelector(descriptionSelector);
  }

  setUserInfo(item) {
    this._userName.textContent = item.profile__name;
    this._userDescription.textContent = item.profile__position;
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      description: this._userDescription.textContent
    }
  }
}
