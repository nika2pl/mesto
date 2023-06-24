export default class UserInfo {
  constructor(usernameSelector, descriptionSelector) {
    this._userName = usernameSelector;
    this._userDescription = descriptionSelector;
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
