import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const classListForm = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
  templateCard: '#card-template'
};

const profileName = document.querySelector('.profile__name');
const profilePosition = document.querySelector('.profile__about')

const nameInput = document.querySelector('.popup__input_data_name');
const jobInput = document.querySelector('.popup__input_data_position');

const placeInput = document.querySelector('.popup__input_data_place');
const imageInput = document.querySelector('.popup__input_data_image');

const formEditProfileElement = document.forms["popup__edit-profile-form"];
const formAddCardElement = document.forms["popup__add-card-form"];

const editButton = document.querySelector('.profile__edit-button');
const addCardButton = document.querySelector('.profile__add-button');

const popupEditProfile = document.querySelector('#popup-edit-profile');
const popupAddCard = document.querySelector('#popup-add-card');

const galleryList = document.querySelector('.gallery__list');

const popupImage = document.querySelector('.popup__image');
const popupDescription = document.querySelector('.popup__description');
const popupZoomPicture = document.querySelector('.popup_zoom');

const closeButtons = document.querySelectorAll('.popup__close-button');

const openPopup = function (popup) {
  document.addEventListener('keydown', handleEscButton);
  popup.classList.add('popup_opened');
}

const closePopup = function (popup) {
  document.removeEventListener('keydown', handleEscButton);
  popup.classList.remove('popup_opened');
}

function createCard(card) {
  const newCard = new Card({ name: card.name, image: card.link }, classListForm.templateCard, handleCardClick);

  return newCard;
}


initialCards.forEach((card) => {
  const newCard = createCard(card);
  galleryList.append(newCard.renderCard());
});


function handleCardClick(name, link) {
  popupImage.src = this._image;
  popupImage.alt = this._name;
  popupDescription.textContent = this._name;

  openPopup(popupZoomPicture);
}

// обработчики клика на крестик и оверлей
const popups = document.querySelectorAll('.popup')

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
    if (evt.target.classList.contains('popup__close-button')) {
      closePopup(popup)
    }
  })
})

// handle esc button
const handleEscButton = (evt) => {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  };
};

const addCardValidate = new FormValidator(classListForm, popupAddCard);
addCardValidate.enableValidationCheck();

const editProfileValidate = new FormValidator(classListForm, popupEditProfile);
editProfileValidate.enableValidationCheck();


// handle add card button
addCardButton.addEventListener('click', function () {
  addCardValidate.toggleButtonState();
  openPopup(popupAddCard);
})

// handle edit profile button
editButton.addEventListener('click', function () {
  editProfileValidate.toggleButtonState();
  nameInput.value = profileName.textContent;
  jobInput.value = profilePosition.textContent;

  openPopup(popupEditProfile);
})

// handle form submit
const handleProfileFormSubmit = function (evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profilePosition.textContent = jobInput.value;

  closePopup(popupEditProfile);
}

const handleAddCardFormSubmit = function (evt) {
  evt.preventDefault();

  const newCard = new Card({ name: placeInput.value, image: imageInput.value }, classListForm.templateCard, handleCardClick);
  galleryList.prepend(newCard.renderCard());

  evt.target.reset()

  closePopup(popupAddCard);
}



formAddCardElement.addEventListener('submit', handleAddCardFormSubmit);
formEditProfileElement.addEventListener('submit', handleProfileFormSubmit);


export { popupZoomPicture, popupImage, popupDescription, handleEscButton };
