export class Card {
  constructor(object, templateElem, { handleClick }) {
    this._name = object.place;
    this._link = object.url;

    this._template = templateElem;
    this._elementCard = document.querySelector(this._template).content.querySelector('.gallery__card').cloneNode(true);

    this._elementName = this._elementCard.querySelector('.gallery__title');
    this._elementImage = this._elementCard.querySelector('.gallery__image');
    this._elementLike = this._elementCard.querySelector('.gallery__like-button');
    this._elementDelete = this._elementCard.querySelector('.gallery__delete-button');

    this._handleCardClick = handleClick;
  }


  generateCard() {
    this._setEventListeners();

    this._elementName.textContent = this._name;

    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    
    return this._elementCard;
  }

  _setEventListeners() {
    // toogle like
    this._elementLike.addEventListener('click', event => this._toggleLike(event))
    // delete card
    this._elementDelete.addEventListener('click', event => this._deleteCard(event));
    // zoom picture
    this._elementImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._image)
    });
  }

  _deleteCard() {
    this._elementCard.remove();
  }

  _toggleLike = (event) => {
    event.target.classList.toggle('gallery__like_button_active');
  }
}