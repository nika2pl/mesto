import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
  constructor(popupSelector, { handleSubmitForm }) {
    super(popupSelector);

    this._handleSubmitForm = handleSubmitForm;

    this._popupForm = this._popup.querySelector('.popup__form');
    this._inputList = this._popupForm.querySelectorAll('.popup__input');
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      // тут вставляем в `value` инпута данные из объекта по атрибуту `name` этого инпута
      input.value = data[input.name];
    });
  }

  _getInputValues() {
    const formValues = {};

    this._inputList.forEach(input => {
      formValues[input.name] = input.value;
    });

    return formValues;
  }

  close() {
    super.close();
    this._popupForm.reset();
  }

  setEventListeners() {
    super.setEventListeners();

    this._popupForm.addEventListener('submit', evt => {
      evt.preventDefault();
      this._handleSubmitForm(this._getInputValues());
    })
  }
}
