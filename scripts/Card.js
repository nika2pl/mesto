class Card {
  constructor(object, templateElem, handleCardClick) {
    this._name = object.name;
    this._image = object.image;
    this._template = templateElem;

    this._elementCard = document.querySelector(this._template).content.querySelector('.gallery__card').cloneNode(true);
    this._elementImage = this._elementCard.querySelector('.gallery__image');
    this._elementName = this._elementCard.querySelector('.gallery__title');
    this._elementLike = this._elementCard.querySelector('.gallery__like-button');
    this._elementDelete = this._elementCard.querySelector('.gallery__delete-button');

    this._handleCardClick = handleCardClick;
  }

  _setEventListeners() {
    // toogle like
    this._elementLike.addEventListener('click', event => this._toggleLike(event))
    // delete card
    this._elementDelete.addEventListener('click', event => this._deleteCard(event));
    // zoom picture
    this._elementImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
    });
  }

  renderCard() {
    this._elementName.textContent = this._name;
    this._elementImage.src = this._image;
    this._elementImage.alt = this._name;

    this._setEventListeners()

    return this._elementCard;
  }

  _toggleLike = (event) => {
    event.target.classList.toggle('gallery__like_button_active');
  }

  _deleteCard() {
    this._elementCard.remove();
  }
}

export { Card };
