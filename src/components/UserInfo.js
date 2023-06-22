export default class UserInfo {
  constructor(object) {
    this._userName = object.userName;
    this._userDescription = object.userJob;
  }

  setUserInfo(item) {
    this._userName.textContent = item.profile__name;
    this._userDescription.textContent = item.profile__position;
  }

  getUserInfo() {
    return {name: this._userName.textContent, description: this._userDescription.textContent}
  }
}
