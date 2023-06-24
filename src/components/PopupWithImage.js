import Popup from '../components/Popup.js';
export default class PopupWithImage extends Popup {
  constructor(popupSelector, zoomImageSelector, zoomDescriptionSelector) {
    super(popupSelector);
    this._zoomImage = this._popup.querySelector(zoomImageSelector);
    this._zoomDesc = this._popup.querySelector(zoomDescriptionSelector);
  }

  open(name, link) {
    this._zoomImage.src = link;
    this._zoomImage.alt = name;
    this._zoomDesc.textContent = name;

    super.open();
  }
}
