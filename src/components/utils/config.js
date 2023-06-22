export const initialCards = [
  {
    place: 'Архыз',
    url: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    place: 'Челябинская область',
    url: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    place: 'Иваново',
    url: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    place: 'Камчатка',
    url: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    place: 'Холмогорский район',
    url: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    place: 'Байкал',
    url: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const classListForm =  {
  galleryList: '.gallery__list',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inputErrorClass: '.popup__input_type_error',
  errorClass: 'popup__input-error_active',
  formEditProfile: '#popup-edit-profile',
  formAddPhoto: '#popup-add-card',
  popupZoom: '.popup_zoom',
  zoomUrl: '.popup__image',
  zoomDesc: '.popup__description',
  inactiveButtonClass: 'popup__button_disabled',
}

// popup edit profile
export const popupEditProfileForm = document.querySelector('.popup__edit-profile-form');
export const popupEditProfile = document.querySelector('#popup-edit-profile');
export const openEditPopup = document.querySelector('.profile__edit-button');
export const profileName = document.querySelector('.profile__name');
export const profileDesc = document.querySelector('.profile__about');
export const inputUserName = popupEditProfileForm.querySelector('.popup__input_data_name');
export const inputUserDescription = popupEditProfileForm.querySelector('.popup__input_data_position');

// popup add card
export const popupAdd = document.querySelector('#popup-add-card');
export const openAddPopup = document.querySelector('.profile__add-button');
