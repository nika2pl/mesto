import './index.css';

import * as config from '../components/utils/config.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import UserInfo from '../components/UserInfo.js';
import { Card } from '../components/Card.js';
import { FormValidator } from "../components/FormValidator.js";
import Api from '../components/Api.js'

let uId;

const popupAreUSure = new PopupWithConfirmation(config.classListForm.popupConfirm);
popupAreUSure.setEventListeners();

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-70',
  headers: {
    authorization: 'abd16267-99d7-4c32-91d5-36491ad6a75d',
    'Content-Type': 'application/json'
  }
});

const createCard = (item) => {
  const card = new Card(item, '#card-template', {
    handleClick: (name, image) => {
      popupWithImage.open(name, image);
    },
    handleDeleteClick: (id) => {
      popupAreUSure.open(id);
      popupAreUSure.setConfirm(() => {
        popupAreUSure.setLoadingState('Удаление...');
        api.deleteCard(id).then(() => {
          card.deleteCard();
          popupAreUSure.close();
          popupAreUSure.setLoadingState('Да');
        }).catch(err => {
          console.log(err)
        });
      });
    },
    handleLikeClick: (id) => {
      const isLiked = card.isLiked();

      if (!isLiked) {
        api.like(id).then((data) => {
          card.setLike(data.likes.length);
        }).catch((err) => console.log(err))
      } else {
        api.dislike(id).then((data) => {
          card.setDislike(data.likes.length);
        }).catch((err) => console.log(err))
      }
    }
  }, uId);

  return card.generateCard();
}

const cardList = new Section({
  renderer: (item) => {
    cardList.addItem(createCard(item));
  }
}, config.classListForm.galleryList);


// popup zoom image listener
const popupWithImage = new PopupWithImage(config.classListForm.popupZoom, config.classListForm.zoomUrl, config.classListForm.zoomDesc);
popupWithImage.setEventListeners();


// popup add card listener
const formAddCardValidator = new FormValidator(config.classListForm, config.popupAdd);
formAddCardValidator.enableValidationCheck();

const popupAddForm = new PopupWithForm(config.classListForm.formAddPhoto, {
  handleSubmitForm: (item) => {
    popupAddForm.setLoadingState('Сохранение...');
    api.addCard(item)
      .then((data) => {
        cardList.addItem(createCard(data));
        popupAddForm.setLoadingState('Создать');
        popupAddForm.close();
      }).catch((err) => console.log(err))
  }
});

config.openAddPopup.addEventListener('click', () => {
  formAddCardValidator.disableSubmitButton();
  popupAddForm.open();
});

popupAddForm.setEventListeners();


// avatar edit button listener
const formAvatarEditValidator = new FormValidator(config.classListForm, document.querySelector(config.classListForm.popupAvatarEdit));
formAvatarEditValidator.enableValidationCheck();

const popupAvatarEdit = new PopupWithForm(config.classListForm.popupAvatarEdit, {
  handleSubmitForm: (item) => {
    popupAvatarEdit.setLoadingState('Сохранение...');
    api.changeAvatar({ avatar: item.link })
      .then((data) => {
        document.querySelector(config.classListForm.profileAvatar).src = data.avatar;
        popupAvatarEdit.setLoadingState('Сохранить');
        popupAvatarEdit.close();
      }).catch((err) => console.log(err))
  }
})
popupAvatarEdit.setEventListeners();

config.profileAvatarEditButton.addEventListener('click', () => {
  popupAvatarEdit.open();
});


// popup edit profile listener
const userInfo = new UserInfo(config.classListForm.profileName, config.classListForm.profileDesc, config.classListForm.profileAvatar);
const formEditProfileValidator = new FormValidator(config.classListForm, config.popupEditProfile);
formEditProfileValidator.enableValidationCheck();

const userPopupForm = new PopupWithForm(config.classListForm.formEditProfile, {
  handleSubmitForm: (item) => {
    userPopupForm.setLoadingState('Сохранение...');
    api.setUserInfo({ name: item.profile__name, about: item.profile__position })
      .then((data) => {
        userInfo.setUserInfo(data);
        userPopupForm.setLoadingState('Сохранить');
        userPopupForm.close();
      }).catch((err) => console.log(err))
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


Promise.all([api.getInitialCards(), api.getUserInfo()]).then(([cards, uData]) => {
  // render userInfo from api
  userInfo.setUserInfo(uData);
  uId = uData._id;

  // render cards from api
  cardList.renderItems(cards.reverse());
}).catch((err) => { console.log(`Ошибка: ${err}`) });
