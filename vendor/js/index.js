let profileName = document.querySelector('.profile__name');
let profilePosition = document.querySelector('.profile__position')

let nameInput = document.querySelector('#name_input');
let jobInput = document.querySelector('#job_input');

let formElement = document.querySelector('.popup__form')


document.querySelector('.profile__edit-button').addEventListener('click', function() {
    nameInput.value = profileName.textContent;
    jobInput.value = profilePosition.textContent;

    document.querySelector('#popup-edit-profile').classList.add('popup__opened');
})


document.querySelector('.popup__close-button').addEventListener('click', function() {
    document.querySelector('#popup-edit-profile').classList.remove('popup__opened');
})


function handleFormSubmit (evt) {
    evt.preventDefault();
    
    profileName.textContent = nameInput.value;
    profilePosition.textContent = jobInput.value;
    document.querySelector('#popup-edit-profile').classList.remove('popup__opened');
}

formElement.addEventListener('submit', handleFormSubmit); 