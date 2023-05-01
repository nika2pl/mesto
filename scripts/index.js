const profileName = document.querySelector('.profile__name');
const profilePosition = document.querySelector('.profile__about')

const nameInput = document.querySelector('.popup__input_data_name');
const jobInput = document.querySelector('.popup__input_data_position');

const placeInput = document.querySelector('.popup__input_data_place');
const imageInput = document.querySelector('.popup__input_data_image');

const formEditProfileElement = document.querySelector('.popup__edit-profile-form');
const formAddCardElement = document.querySelector('.popup__add-card-form');

const editButton = document.querySelector('.profile__edit-button');
const addCardButton = document.querySelector('.profile__add-button');

const popupEditProfile = document.querySelector('#popup-edit-profile');
const popupAddCard = document.querySelector('#popup-add-card');

const galleryList = document.querySelector('.gallery__list');

const popupImage = document.querySelector('.popup__image');
const popupDescription = document.querySelector('.popup__description');
const popupZoomPicture = document.querySelector('.popup_zoom');

const closeButtons = document.querySelectorAll('.popup__close-button');

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

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function handleEditProfileFormSubmit(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profilePosition.textContent = jobInput.value;

    evt.target.reset()

    closePopup(popupEditProfile);
}

function handleAddCardFormSubmit(evt) {
    evt.preventDefault();

    galleryList.prepend(addCard(placeInput.value, imageInput.value));

    evt.target.reset()

    closePopup(popupAddCard);
}

closeButtons.forEach((button) => {
    // находим 1 раз ближайший к крестику попап 
    const popup = button.closest('.popup');
    // устанавливаем обработчик закрытия на крестик
    button.addEventListener('click', () => closePopup(popup));
});

addCardButton.addEventListener('click', function () {
    openPopup(popupAddCard);
})

editButton.addEventListener('click', function () {
    openPopup(popupEditProfile);
})

formEditProfileElement.addEventListener('submit', handleEditProfileFormSubmit);

formAddCardElement.addEventListener('submit', handleAddCardFormSubmit);

const addCard = (name, link) => {
    const contentCardTemplate = document.querySelector('#card-template').content;
    const cardTemplate = contentCardTemplate.querySelector('.gallery__card').cloneNode(true);

    const cardImage = cardTemplate.querySelector('.gallery__image');
    const cardName = cardTemplate.querySelector('.gallery__title');

    cardName.textContent = name;
    cardImage.src = link;
    cardImage.alt = name;

    // handle zoom picture
    cardImage.addEventListener('click', function (evt) {
        popupImage.src = cardImage.src;
        popupImage.alt = cardName.textContent;
        popupDescription.textContent = cardName.textContent;

        popupZoomPicture.classList.add('popup_opened');
    });

    // handle like button
    cardTemplate.querySelector('.gallery__like-button').addEventListener('click', function (evt) {
        evt.target.classList.toggle('gallery__like_button_active');
    });

    // handle remove button
    cardTemplate.querySelector('.gallery__delete-button').addEventListener('click', function (evt) {
        evt.target.closest('.gallery__card').remove();
    });

    return cardTemplate;
};

initialCards.forEach(
    card => {
        galleryList.append(addCard(card.name, card.link))
    }
)