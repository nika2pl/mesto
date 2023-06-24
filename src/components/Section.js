export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._render = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(element) {
    this._container.prepend(element);
  }

  renderItems() {
    this._renderedItems.forEach(this._render)
  }
}
