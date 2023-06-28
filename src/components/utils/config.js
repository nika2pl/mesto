export const classListForm = {
  galleryList: '.gallery__list',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inputErrorClass: '.popup__input_type_error',
  errorClass: 'popup__input-error_active',
  formEditProfile: '#popup-edit-profile',
  formAddPhoto: '#popup-add-card',
  popupZoom: '.popup_zoom',
  popupConfirm: '.popup_confirm',
  zoomUrl: '.popup__image',
  zoomDesc: '.popup__description',
  inactiveButtonClass: 'popup__button_disabled',
  profileName: '.profile__name',
  profileDesc: '.profile__about',
  profileAvatar: '.profile__avatar',
  popupAvatarEdit: '.popup_avatar-edit'
}

// popup edit profile
export const popupEditProfileForm = document.querySelector('.popup__edit-profile-form');
export const popupEditProfile = document.querySelector('#popup-edit-profile');
export const openEditPopup = document.querySelector('.profile__edit-button');

// popup add card
export const popupAdd = document.querySelector('#popup-add-card');
export const openAddPopup = document.querySelector('.profile__add-button');

// avatar edit button
export const profileAvatarEditButton = document.querySelector('.profile__avatar-edit-button');
