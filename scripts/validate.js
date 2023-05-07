const showError = (formElement, inputElement, errorMessage, { inputErrorClass, errorClass }) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    errorElement.textContent = errorMessage;
    inputElement.classList.add(inputErrorClass);
    errorElement.classList.add(errorClass);
};

const hideError = (formElement, inputElement, { inputErrorClass, errorClass }) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    errorElement.textContent = '';
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
};

const updateValidationState = (formElement, inputElement, config) => {
    console.log(inputElement);
    console.log(formElement)
    if (!inputElement.validity.valid) {
        showError(formElement, inputElement, inputElement.validationMessage, config);
    } else {
        hideError(formElement, inputElement, config);
    }
};

const initEventListeners = (formElement, { inputSelector, submitButtonSelector, ...config }) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);

    updateSubmitBtnValidationState(inputList, buttonElement, config);

    inputList.forEach(function (inputElement) {
        inputElement.addEventListener('input', function () {
            updateValidationState(formElement, inputElement, config);
            updateSubmitBtnValidationState(inputList, buttonElement, config);
        });
    });
};

const enableValidation = ({ formSelector, ...config }) => {
    const formList = Array.from(document.querySelectorAll(formSelector));

    formList.forEach(function (formElement) {
        initEventListeners(formElement, config);
    });
};

const hasInvalidInput = (inputList) => {
    return inputList.some(function (inputElement) {
        return !inputElement.validity.valid;
    });
};

const updateSubmitBtnValidationState = (inputList, buttonElement, { inactiveButtonClass }) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.disabled = true;
        buttonElement.classList.add(inactiveButtonClass);
    } else {
        buttonElement.disabled = false;
        buttonElement.classList.remove(inactiveButtonClass);
    };
};

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
});