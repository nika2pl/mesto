import { popupZoomPicture, popupImage, popupDescription, handleEscButton } from "./index.js";

class Card {
  constructor(object, templateElem) {
    this._name = object.name;
    this._image = object.image;
    this._template = templateElem;

    this._elementCard = document.querySelector(this._template).content.querySelector('.gallery__card').cloneNode(true);
    this._elementImage = this._elementCard.querySelector('.gallery__image');
    this._elementName = this._elementCard.querySelector('.gallery__title');
    this._elementLike = this._elementCard.querySelector('.gallery__like-button');
    this._elementDelete = this._elementCard.querySelector('.gallery__delete-button');
  }

  renderCard() {
    this._elementName.textContent = this._name;
    this._elementImage.src = this._image;
    this._elementImage.alt = this._name;

    this._clickHandler();

    return this._elementCard;
  }

  _addLikeCard = (event) => {
    event.target.classList.toggle('gallery__like_button_active');
  }

  _deleteCard() {
    this._elementCard.remove();
  }

  _zoomPicture() {
    popupImage.src = this._image;
    popupImage.alt = this._name;
    popupDescription.textContent = this._name;

    popupZoomPicture.classList.add('popup_opened');
    document.addEventListener('keydown', handleEscButton);
  }

  _clickHandler() {
    this._elementLike.addEventListener('click', event => this._addLikeCard(event))
    this._elementDelete.addEventListener('click', event => this._deleteCard(event));
    this._elementImage.addEventListener('click', () => this._zoomPicture())
  }
}

export { Card }; 