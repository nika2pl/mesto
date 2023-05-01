let profileName = document.querySelector('.profile__name');
let profilePosition = document.querySelector('.profile__about')

let nameInput = document.querySelector('.popup__input_data_name');
let jobInput = document.querySelector('.popup__input_data_position');

let placeInput = document.querySelector('.popup__input_data_place');
let imageInput = document.querySelector('.popup__input_data_image');

let formElement = document.querySelector('.popup__form');
let formAddCardElement = document.querySelector('.popup__add-card-form');

let closeButton = document.querySelector('.popup__close-edit-profile-button');
let closeButtonAddCard = document.querySelector('.popup__close-add-card-button');
let closeButtonZoomPicture = document.querySelector('.popup__close-zoom-picture-button');
let editButton = document.querySelector('.profile__edit-button');
let addCardButton = document.querySelector('.profile__add-button');

let popupEditProfile = document.querySelector('#popup-edit-profile');
let popupAddCard = document.querySelector('#popup-add-card');

let galleryList = document.querySelector('.gallery__list');

let popupImage = document.querySelector('.popup__image');
let popupDescription = document.querySelector('.popup__description');
let popupZoomPicture = document.querySelector('.popup_zoom');

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


addCardButton.addEventListener('click', function () {
    nameInput.value = profileName.textContent;
    jobInput.value = profilePosition.textContent;

    popupAddCard.classList.add('popup_opened');
})

editButton.addEventListener('click', function () {
    nameInput.value = profileName.textContent;
    jobInput.value = profilePosition.textContent;

    popupEditProfile.classList.add('popup_opened');
})

closeButtonAddCard.addEventListener('click', function () {
    popupAddCard.classList.remove('popup_opened');
})

closeButton.addEventListener('click', function () {
    popupEditProfile.classList.remove('popup_opened');
})

closeButtonZoomPicture.addEventListener('click', function () {
    popupZoomPicture.classList.remove('popup_opened');
})

function handleFormSubmit(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profilePosition.textContent = jobInput.value;

    popupEditProfile.classList.remove('popup_opened');
}

formElement.addEventListener('submit', handleFormSubmit);

function handleFormAddCardSubmit(evt) {
    evt.preventDefault();

    galleryList.prepend(addCard(placeInput.value, imageInput.value))
    popupAddCard.classList.remove('popup_opened');
}

formAddCardElement.addEventListener('submit', handleFormAddCardSubmit);

let addCard = (name, link) => {
    let contentCardTemplate = document.querySelector('#card-template').content;
    let CardTemplate = contentCardTemplate.querySelector('.gallery__card').cloneNode(true);

    let cardsImage = CardTemplate.querySelector('.gallery__image');
    let cardName = CardTemplate.querySelector('.gallery__title');

    cardName.textContent = name;
    cardsImage.src = link;
    cardsImage.alt = name;

    // handle zoom picture
    CardTemplate.addEventListener('click', function (evt) {
        popupImage.src = cardsImage.src;
        popupImage.alt = cardName.textContent;
        popupDescription.textContent = cardName.textContent;

        popupZoomPicture.classList.add('popup_opened');
    });

    // handle like button
    CardTemplate.querySelector('.gallery__like-button').addEventListener('click', function (evt) {
        evt.target.classList.toggle('gallery__like_button_active');
    });

    // handle remove button
    CardTemplate.querySelector('.gallery__delete-button').addEventListener('click', function (evt) {
        evt.target.closest('.gallery__card').remove();
    });

    return CardTemplate;
};

initialCards.forEach(
    card => {
        galleryList.append(addCard(card.name, card.link))
    }
)