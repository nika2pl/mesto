export class Card {
  constructor(object, templateElem, { handleClick, handleDeleteClick, handleLikeClick }, userId) {
    this._id = object._id;
    this._name = object.name;
    this._link = object.link;

    this._likes = object.likes;
    this._likeCount = this._likes.length;

    this._ownerId = object.owner._id;
    this._userId = userId;

    this._template = templateElem;
    this._elementCard = document.querySelector(this._template).content.querySelector('.gallery__card').cloneNode(true);

    this._elementName = this._elementCard.querySelector('.gallery__title');
    this._elementImage = this._elementCard.querySelector('.gallery__image');
    this._elementLike = this._elementCard.querySelector('.gallery__like-button');
    this._elementLikeCount = this._elementCard.querySelector('.gallery__like-count');
    this._elementDelete = this._elementCard.querySelector('.gallery__delete-button');

    this._handleCardClick = handleClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  }


  generateCard() {
    this._setEventListeners();

    this._elementName.textContent = this._name;

    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;

    this._elementLikeCount.textContent = this._likeCount;

    // toogle button state
    if (this._ownerId !== this._userId) {
      this._elementDelete.classList.add('gallery__delete-button_inactive');
    }

    // toogle like state
    if (this._likeCount > 0) {
      this._likes.forEach((e) => {
        if(e._id == this._userId){
          this._elementLike.classList.add('gallery__like_button_active');
        }
      })
    }

    return this._elementCard;
  }

  _setEventListeners() {
    // toogle like
    this._elementLike.addEventListener('click', event => this._handleLikeClick(this._id))
    // delete card
    this._elementDelete.addEventListener('click', event => this._handleDeleteClick(this._id))
    // zoom picture
    this._elementImage.addEventListener('click', event => this._handleCardClick(this._name, this._link));
  }

  deleteCard() {
    this._elementCard.remove();
  }

  isLiked = () => {
    return this._elementLike.classList.contains('gallery__like_button_active');
  }

  setLike(count) {
    this._elementLike.classList.add('gallery__like_button_active');
    this._elementLikeCount.textContent = count;
  }

  setDislike(count) {
    this._elementLike.classList.remove('gallery__like_button_active');
    this._elementLikeCount.textContent = count;

  }

}
