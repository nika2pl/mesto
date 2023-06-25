import './index.css';

import * as config from '../components/utils/config.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import { Card } from '../components/Card.js';
import { FormValidator } from "../components/FormValidator.js";

const createCard = (item) => {
  const card = new Card({ place: item.place, url: item.url }, '#card-template', {
    handleClick: (name, image) => {
      popupWithImage.open(name, image);
    }
  });

  return card.generateCard();
}

const cardList = new Section({
  items: config.initialCards, renderer: (item) => {
    cardList.addItem(createCard(item));
  }
}, config.classListForm.galleryList);

cardList.renderItems();

// popup zoom image
const popupWithImage = new PopupWithImage(config.classListForm.popupZoom, config.classListForm.zoomUrl, config.classListForm.zoomDesc);
popupWithImage.setEventListeners();

// popup add card
const formAddCardValidator = new FormValidator(config.classListForm, config.popupAdd);
formAddCardValidator.enableValidationCheck();

const popupAddForm = new PopupWithForm(config.classListForm.formAddPhoto, {
  handleSubmitForm: (item) => {
    cardList.addItem(createCard(item));
    popupAddForm.close();
  }
});

config.openAddPopup.addEventListener('click', () => {
  formAddCardValidator.disableSubmitButton();
  popupAddForm.open();
});

popupAddForm.setEventListeners();


// popup edit profile
const userInfo = new UserInfo(config.classListForm.profileName, config.classListForm.profileDesc);
const formEditProfileValidator = new FormValidator(config.classListForm, config.popupEditProfile);
formEditProfileValidator.enableValidationCheck();

const userPopupForm = new PopupWithForm(config.classListForm.formEditProfile, {
  handleSubmitForm: (item) => {
    userInfo.setUserInfo(item);
    userPopupForm.close();
  }
});

config.openEditPopup.addEventListener('click', () => {
  const userconfig = userInfo.getUserInfo();

  formEditProfileValidator.disableSubmitButton();
  userPopupForm.open();

  config.inputUserName.value = userconfig.name;
  config.inputUserDescription.value = userconfig.description;
});

userPopupForm.setEventListeners();

