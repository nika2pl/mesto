import Popup from '../components/Popup.js';
export default class PopupWithImage extends Popup {
  constructor(popupSelector, zoomImageSelector, zoomDesc) {
    super(popupSelector);
    this._zoomImage = document.querySelector(zoomImageSelector);
    this._zoomDesc = document.querySelector(zoomDesc);
  }
  
  open(name, link) {
    this._zoomImage.src = link;
    this._zoomImage.alt = name;
    this._zoomDesc.textContent = name;

    super.open();
  }
}
