let profileName = document.querySelector('.profile__name');
let profilePosition = document.querySelector('.profile__about')

let nameInput = document.querySelector('.popup__input_data_name');
let jobInput = document.querySelector('.popup__input_data_position');

let formElement = document.querySelector('.popup__form')

let closeButton = document.querySelector('.popup__close-button');
let editButton = document.querySelector('.profile__edit-button');
let popupEditProfile = document.querySelector('#popup-edit-profile');


editButton.addEventListener('click', function () {
    nameInput.value = profileName.textContent;
    jobInput.value = profilePosition.textContent;

    popupEditProfile.classList.add('popup_opened');
})

closeButton.addEventListener('click', function () {
    popupEditProfile.classList.remove('popup_opened');
})

function handleFormSubmit(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profilePosition.textContent = jobInput.value;
    popupEditProfile.classList.remove('popup_opened');
}

formElement.addEventListener('submit', handleFormSubmit); 