export default class UserInfo {
  constructor(usernameSelector, descriptionSelector, avatarSelector) {
    this._userName = document.querySelector(usernameSelector);
    this._userDescription = document.querySelector(descriptionSelector);
    this._userAvatar = document.querySelector(avatarSelector);
  }

  setUserInfo(item) {
    this._userName.textContent = item.name;
    this._userDescription.textContent = item.about;
    this._userAvatar.src = item.avatar;
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      description: this._userDescription.textContent
    }
  }
}
