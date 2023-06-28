/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/components/utils/config.js
var classListForm = {
  galleryList: '.gallery__list',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inputErrorClass: '.popup__input_type_error',
  errorClass: 'popup__input-error_active',
  formEditProfile: '#popup-edit-profile',
  formAddPhoto: '#popup-add-card',
  popupZoom: '.popup_zoom',
  popupConfirm: '.popup_confirm',
  zoomUrl: '.popup__image',
  zoomDesc: '.popup__description',
  inactiveButtonClass: 'popup__button_disabled',
  profileName: '.profile__name',
  profileDesc: '.profile__about',
  profileAvatar: '.profile__avatar',
  popupAvatarEdit: '.popup_avatar-edit'
};

// popup edit profile
var popupEditProfileForm = document.querySelector('.popup__edit-profile-form');
var popupEditProfile = document.querySelector('#popup-edit-profile');
var openEditPopup = document.querySelector('.profile__edit-button');
var inputUserName = popupEditProfileForm.querySelector('.popup__input_data_name');
var inputUserDescription = popupEditProfileForm.querySelector('.popup__input_data_position');

// popup add card
var popupAdd = document.querySelector('#popup-add-card');
var openAddPopup = document.querySelector('.profile__add-button');

// avatar edit button
var profileAvatarEditButton = document.querySelector('.profile__avatar-edit-button');
;// CONCATENATED MODULE: ./src/components/Section.js
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var Section = /*#__PURE__*/function () {
  function Section(_ref, containerSelector) {
    var renderer = _ref.renderer;
    _classCallCheck(this, Section);
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  _createClass(Section, [{
    key: "addItem",
    value: function addItem(element) {
      this._container.prepend(element);
    }
  }, {
    key: "renderItems",
    value: function renderItems(cards) {
      var _this = this;
      cards.forEach(function (item) {
        return _this._renderer(item);
      });
    }
  }]);
  return Section;
}();

;// CONCATENATED MODULE: ./src/components/Popup.js
function Popup_typeof(obj) {
  "@babel/helpers - typeof";

  return Popup_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, Popup_typeof(obj);
}
function Popup_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function Popup_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, Popup_toPropertyKey(descriptor.key), descriptor);
  }
}
function Popup_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) Popup_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) Popup_defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function Popup_toPropertyKey(arg) {
  var key = Popup_toPrimitive(arg, "string");
  return Popup_typeof(key) === "symbol" ? key : String(key);
}
function Popup_toPrimitive(input, hint) {
  if (Popup_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (Popup_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var Popup = /*#__PURE__*/function () {
  function Popup(popupSelector) {
    Popup_classCallCheck(this, Popup);
    this._popup = document.querySelector(popupSelector);
    this.close = this.close.bind(this);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._closeByClick = this._closeByClick.bind(this);
    this._popupBUtton = this._popup.querySelector('.popup__button');
  }
  Popup_createClass(Popup, [{
    key: "setLoadingState",
    value: function setLoadingState(text) {
      this._popupBUtton.textContent = text;
    }
  }, {
    key: "open",
    value: function open() {
      this._popup.classList.add('popup_opened');
      this._popup.addEventListener('mousedown', this._closeByClick);
      document.addEventListener('keydown', this._handleEscClose);
    }
  }, {
    key: "close",
    value: function close() {
      this._popup.classList.remove('popup_opened');
      this._popup.removeEventListener('mousedown', this._closeByClick);
      document.removeEventListener('keydown', this._handleEscClose);
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      this._popup.querySelector('.popup__close-button').addEventListener('click', this.close);
    }
  }, {
    key: "_closeByClick",
    value: function _closeByClick(evt) {
      if (evt.currentTarget === evt.target) {
        this.close();
      }
    }
  }, {
    key: "_handleEscClose",
    value: function _handleEscClose(evt) {
      if (evt.key === 'Escape') {
        this.close();
      }
    }
  }]);
  return Popup;
}();

;// CONCATENATED MODULE: ./src/components/PopupWithForm.js
function PopupWithForm_typeof(obj) {
  "@babel/helpers - typeof";

  return PopupWithForm_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, PopupWithForm_typeof(obj);
}
function PopupWithForm_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function PopupWithForm_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, PopupWithForm_toPropertyKey(descriptor.key), descriptor);
  }
}
function PopupWithForm_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) PopupWithForm_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) PopupWithForm_defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function PopupWithForm_toPropertyKey(arg) {
  var key = PopupWithForm_toPrimitive(arg, "string");
  return PopupWithForm_typeof(key) === "symbol" ? key : String(key);
}
function PopupWithForm_toPrimitive(input, hint) {
  if (PopupWithForm_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (PopupWithForm_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get.bind();
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);
      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }
      return desc.value;
    };
  }
  return _get.apply(this, arguments);
}
function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }
  return object;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (PopupWithForm_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

var PopupWithForm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithForm, _Popup);
  var _super = _createSuper(PopupWithForm);
  function PopupWithForm(popupSelector, _ref) {
    var _this;
    var handleSubmitForm = _ref.handleSubmitForm;
    PopupWithForm_classCallCheck(this, PopupWithForm);
    _this = _super.call(this, popupSelector);
    _this._handleSubmitForm = handleSubmitForm;
    _this._popupForm = _this._popup.querySelector('.popup__form');
    _this._inputList = _this._popupForm.querySelectorAll('.popup__input');
    return _this;
  }
  PopupWithForm_createClass(PopupWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      var formValues = {};
      this._inputList.forEach(function (input) {
        formValues[input.name] = input.value;
      });
      return formValues;
    }
  }, {
    key: "close",
    value: function close() {
      _get(_getPrototypeOf(PopupWithForm.prototype), "close", this).call(this);
      this._popupForm.reset();
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;
      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);
      this._popupForm.addEventListener('submit', function (evt) {
        evt.preventDefault();
        _this2._handleSubmitForm(_this2._getInputValues());
      });
    }
  }]);
  return PopupWithForm;
}(Popup);

;// CONCATENATED MODULE: ./src/components/PopupWithImage.js
function PopupWithImage_typeof(obj) {
  "@babel/helpers - typeof";

  return PopupWithImage_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, PopupWithImage_typeof(obj);
}
function PopupWithImage_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function PopupWithImage_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, PopupWithImage_toPropertyKey(descriptor.key), descriptor);
  }
}
function PopupWithImage_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) PopupWithImage_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) PopupWithImage_defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function PopupWithImage_toPropertyKey(arg) {
  var key = PopupWithImage_toPrimitive(arg, "string");
  return PopupWithImage_typeof(key) === "symbol" ? key : String(key);
}
function PopupWithImage_toPrimitive(input, hint) {
  if (PopupWithImage_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (PopupWithImage_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function PopupWithImage_get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    PopupWithImage_get = Reflect.get.bind();
  } else {
    PopupWithImage_get = function _get(target, property, receiver) {
      var base = PopupWithImage_superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);
      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }
      return desc.value;
    };
  }
  return PopupWithImage_get.apply(this, arguments);
}
function PopupWithImage_superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = PopupWithImage_getPrototypeOf(object);
    if (object === null) break;
  }
  return object;
}
function PopupWithImage_inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) PopupWithImage_setPrototypeOf(subClass, superClass);
}
function PopupWithImage_setPrototypeOf(o, p) {
  PopupWithImage_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return PopupWithImage_setPrototypeOf(o, p);
}
function PopupWithImage_createSuper(Derived) {
  var hasNativeReflectConstruct = PopupWithImage_isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = PopupWithImage_getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = PopupWithImage_getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return PopupWithImage_possibleConstructorReturn(this, result);
  };
}
function PopupWithImage_possibleConstructorReturn(self, call) {
  if (call && (PopupWithImage_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return PopupWithImage_assertThisInitialized(self);
}
function PopupWithImage_assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function PopupWithImage_isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function PopupWithImage_getPrototypeOf(o) {
  PopupWithImage_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return PopupWithImage_getPrototypeOf(o);
}

var PopupWithImage = /*#__PURE__*/function (_Popup) {
  PopupWithImage_inherits(PopupWithImage, _Popup);
  var _super = PopupWithImage_createSuper(PopupWithImage);
  function PopupWithImage(popupSelector, zoomImageSelector, zoomDescriptionSelector) {
    var _this;
    PopupWithImage_classCallCheck(this, PopupWithImage);
    _this = _super.call(this, popupSelector);
    _this._zoomImage = _this._popup.querySelector(zoomImageSelector);
    _this._zoomDesc = _this._popup.querySelector(zoomDescriptionSelector);
    return _this;
  }
  PopupWithImage_createClass(PopupWithImage, [{
    key: "open",
    value: function open(name, link) {
      this._zoomImage.src = link;
      this._zoomImage.alt = name;
      this._zoomDesc.textContent = name;
      PopupWithImage_get(PopupWithImage_getPrototypeOf(PopupWithImage.prototype), "open", this).call(this);
    }
  }]);
  return PopupWithImage;
}(Popup);

;// CONCATENATED MODULE: ./src/components/PopupWithConfirmation.js
function PopupWithConfirmation_typeof(obj) {
  "@babel/helpers - typeof";

  return PopupWithConfirmation_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, PopupWithConfirmation_typeof(obj);
}
function PopupWithConfirmation_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function PopupWithConfirmation_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, PopupWithConfirmation_toPropertyKey(descriptor.key), descriptor);
  }
}
function PopupWithConfirmation_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) PopupWithConfirmation_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) PopupWithConfirmation_defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function PopupWithConfirmation_toPropertyKey(arg) {
  var key = PopupWithConfirmation_toPrimitive(arg, "string");
  return PopupWithConfirmation_typeof(key) === "symbol" ? key : String(key);
}
function PopupWithConfirmation_toPrimitive(input, hint) {
  if (PopupWithConfirmation_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (PopupWithConfirmation_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function PopupWithConfirmation_get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    PopupWithConfirmation_get = Reflect.get.bind();
  } else {
    PopupWithConfirmation_get = function _get(target, property, receiver) {
      var base = PopupWithConfirmation_superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);
      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }
      return desc.value;
    };
  }
  return PopupWithConfirmation_get.apply(this, arguments);
}
function PopupWithConfirmation_superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = PopupWithConfirmation_getPrototypeOf(object);
    if (object === null) break;
  }
  return object;
}
function PopupWithConfirmation_inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) PopupWithConfirmation_setPrototypeOf(subClass, superClass);
}
function PopupWithConfirmation_setPrototypeOf(o, p) {
  PopupWithConfirmation_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return PopupWithConfirmation_setPrototypeOf(o, p);
}
function PopupWithConfirmation_createSuper(Derived) {
  var hasNativeReflectConstruct = PopupWithConfirmation_isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = PopupWithConfirmation_getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = PopupWithConfirmation_getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return PopupWithConfirmation_possibleConstructorReturn(this, result);
  };
}
function PopupWithConfirmation_possibleConstructorReturn(self, call) {
  if (call && (PopupWithConfirmation_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return PopupWithConfirmation_assertThisInitialized(self);
}
function PopupWithConfirmation_assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function PopupWithConfirmation_isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function PopupWithConfirmation_getPrototypeOf(o) {
  PopupWithConfirmation_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return PopupWithConfirmation_getPrototypeOf(o);
}

var PopupConfirm = /*#__PURE__*/function (_Popup) {
  PopupWithConfirmation_inherits(PopupConfirm, _Popup);
  var _super = PopupWithConfirmation_createSuper(PopupConfirm);
  function PopupConfirm(popupSelector) {
    PopupWithConfirmation_classCallCheck(this, PopupConfirm);
    return _super.call(this, popupSelector);
  }
  PopupWithConfirmation_createClass(PopupConfirm, [{
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this = this;
      PopupWithConfirmation_get(PopupWithConfirmation_getPrototypeOf(PopupConfirm.prototype), "setEventListeners", this).call(this);
      this._popup.querySelector('.popup__button').addEventListener('click', function () {
        _this._handleSubmitCallback();
      });
    }
  }, {
    key: "setConfirm",
    value: function setConfirm(cb) {
      this._handleSubmitCallback = cb;
    }
  }]);
  return PopupConfirm;
}(Popup);

;// CONCATENATED MODULE: ./src/components/UserInfo.js
function UserInfo_typeof(obj) {
  "@babel/helpers - typeof";

  return UserInfo_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, UserInfo_typeof(obj);
}
function UserInfo_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function UserInfo_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, UserInfo_toPropertyKey(descriptor.key), descriptor);
  }
}
function UserInfo_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) UserInfo_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) UserInfo_defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function UserInfo_toPropertyKey(arg) {
  var key = UserInfo_toPrimitive(arg, "string");
  return UserInfo_typeof(key) === "symbol" ? key : String(key);
}
function UserInfo_toPrimitive(input, hint) {
  if (UserInfo_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (UserInfo_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var UserInfo = /*#__PURE__*/function () {
  function UserInfo(usernameSelector, descriptionSelector, avatarSelector) {
    UserInfo_classCallCheck(this, UserInfo);
    this._userName = document.querySelector(usernameSelector);
    this._userDescription = document.querySelector(descriptionSelector);
    this._userAvatar = document.querySelector(avatarSelector);
  }
  UserInfo_createClass(UserInfo, [{
    key: "setUserInfo",
    value: function setUserInfo(item) {
      this._userName.textContent = item.name;
      this._userDescription.textContent = item.about;
      this._userAvatar.src = item.avatar;
    }
  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      return {
        name: this._userName.textContent,
        description: this._userDescription.textContent
      };
    }
  }]);
  return UserInfo;
}();

;// CONCATENATED MODULE: ./src/components/Card.js
function Card_typeof(obj) {
  "@babel/helpers - typeof";

  return Card_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, Card_typeof(obj);
}
function Card_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function Card_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, Card_toPropertyKey(descriptor.key), descriptor);
  }
}
function Card_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) Card_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) Card_defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  key = Card_toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function Card_toPropertyKey(arg) {
  var key = Card_toPrimitive(arg, "string");
  return Card_typeof(key) === "symbol" ? key : String(key);
}
function Card_toPrimitive(input, hint) {
  if (Card_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (Card_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var Card = /*#__PURE__*/function () {
  function Card(object, templateElem, _ref, userId) {
    var _this = this;
    var handleClick = _ref.handleClick,
      handleDeleteClick = _ref.handleDeleteClick,
      handleLikeClick = _ref.handleLikeClick;
    Card_classCallCheck(this, Card);
    _defineProperty(this, "isLiked", function () {
      return _this._elementLike.classList.contains('gallery__like_button_active');
    });
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
  Card_createClass(Card, [{
    key: "generateCard",
    value: function generateCard() {
      var _this2 = this;
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
        this._likes.forEach(function (e) {
          if (e._id == _this2._userId) {
            _this2._elementLike.classList.add('gallery__like_button_active');
          }
        });
      }
      return this._elementCard;
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this3 = this;
      // toogle like
      this._elementLike.addEventListener('click', function (event) {
        return _this3._handleLikeClick(_this3._id);
      });
      // delete card
      this._elementDelete.addEventListener('click', function (event) {
        return _this3._handleDeleteClick(_this3._id);
      });
      // zoom picture
      this._elementImage.addEventListener('click', function (event) {
        return _this3._handleCardClick(_this3._name, _this3._link);
      });
    }
  }, {
    key: "deleteCard",
    value: function deleteCard() {
      this._elementCard.remove();
    }
  }, {
    key: "setLike",
    value: function setLike(count) {
      this._elementLike.classList.add('gallery__like_button_active');
      this._elementLikeCount.textContent = count;
    }
  }, {
    key: "setDislike",
    value: function setDislike(count) {
      this._elementLike.classList.remove('gallery__like_button_active');
      this._elementLikeCount.textContent = count;
    }
  }]);
  return Card;
}();
;// CONCATENATED MODULE: ./src/components/FormValidator.js
function FormValidator_typeof(obj) {
  "@babel/helpers - typeof";

  return FormValidator_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, FormValidator_typeof(obj);
}
function FormValidator_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function FormValidator_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, FormValidator_toPropertyKey(descriptor.key), descriptor);
  }
}
function FormValidator_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) FormValidator_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) FormValidator_defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function FormValidator_toPropertyKey(arg) {
  var key = FormValidator_toPrimitive(arg, "string");
  return FormValidator_typeof(key) === "symbol" ? key : String(key);
}
function FormValidator_toPrimitive(input, hint) {
  if (FormValidator_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (FormValidator_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var FormValidator = /*#__PURE__*/function () {
  function FormValidator(validationSettings, formElement) {
    FormValidator_classCallCheck(this, FormValidator);
    this._validationSettings = validationSettings;
    this._formElement = formElement;
    this._submitButton = this._formElement.querySelector(this._validationSettings.submitButtonSelector);
    this._inputList = Array.from(this._formElement.querySelectorAll(this._validationSettings.inputSelector));
  }
  FormValidator_createClass(FormValidator, [{
    key: "_showValidationError",
    value: function _showValidationError(inputItem, errorMessage) {
      var errorItem = this._formElement.querySelector(".".concat(inputItem.id, "-error"));
      inputItem.classList.add(this._validationSettings.inputErrorClass);
      errorItem.textContent = errorMessage;
      errorItem.classList.add(this._validationSettings.errorClass);
    }
  }, {
    key: "_hideValidationError",
    value: function _hideValidationError(inputItem) {
      var errorItem = this._formElement.querySelector(".".concat(inputItem.id, "-error"));
      inputItem.classList.remove(this._validationSettings.inputErrorClass);
      errorItem.classList.remove(this._validationSettings.errorClass);
      errorItem.textContent = '';
    }
  }, {
    key: "_checkInputValidity",
    value: function _checkInputValidity(inputItem) {
      if (!inputItem.validity.valid) {
        this._showValidationError(inputItem, inputItem.validationMessage);
      } else {
        this._hideValidationError(inputItem);
      }
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;
      this.toggleButtonState();
      this._inputList.forEach(function (inputItem) {
        inputItem.addEventListener('input', function () {
          _this._checkInputValidity(inputItem);
          _this.toggleButtonState();
        });
      });
    }
  }, {
    key: "_hasInvalidInput",
    value: function _hasInvalidInput() {
      return this._inputList.some(function (inputItem) {
        return !inputItem.validity.valid;
      });
    }
  }, {
    key: "enableValidationCheck",
    value: function enableValidationCheck() {
      this._setEventListeners();
    }
  }, {
    key: "disableSubmitButton",
    value: function disableSubmitButton() {
      this._submitButton.setAttribute('disabled', 'true');
      this._submitButton.classList.add(this._validationSettings.inactiveButtonClass);
    }
  }, {
    key: "enableSubmitButton",
    value: function enableSubmitButton() {
      this._submitButton.classList.remove(this._validationSettings.inactiveButtonClass);
      this._submitButton.removeAttribute('disabled');
    }
  }, {
    key: "toggleButtonState",
    value: function toggleButtonState() {
      if (this._hasInvalidInput()) {
        this.disableSubmitButton();
      } else {
        this.enableSubmitButton();
      }
    }
  }]);
  return FormValidator;
}();

;// CONCATENATED MODULE: ./src/components/Api.js
function Api_typeof(obj) {
  "@babel/helpers - typeof";

  return Api_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, Api_typeof(obj);
}
function Api_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function Api_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, Api_toPropertyKey(descriptor.key), descriptor);
  }
}
function Api_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) Api_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) Api_defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function Api_toPropertyKey(arg) {
  var key = Api_toPrimitive(arg, "string");
  return Api_typeof(key) === "symbol" ? key : String(key);
}
function Api_toPrimitive(input, hint) {
  if (Api_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (Api_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var Api = /*#__PURE__*/function () {
  function Api(options) {
    Api_classCallCheck(this, Api);
    this._url = options.baseUrl;
    this._headers = options.headers;
  }
  Api_createClass(Api, [{
    key: "_checkResponse",
    value: function _checkResponse(res) {
      if (res.ok) {
        return res.json();
      }
      // если ошибка, отклоняем промис
      return Promise.reject("\u041E\u0448\u0438\u0431\u043A\u0430: ".concat(res.status));
    }
  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      return fetch(this._url + '/users/me', {
        method: 'GET',
        headers: this._headers
      }).then(this._checkResponse);
    }
  }, {
    key: "getInitialCards",
    value: function getInitialCards() {
      return fetch(this._url + '/cards', {
        method: 'GET',
        headers: this._headers
      }).then(this._checkResponse);
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(data) {
      return fetch(this._url + '/users/me', {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify(data)
      }).then(this._checkResponse);
    }
  }, {
    key: "addCard",
    value: function addCard(data) {
      return fetch(this._url + '/cards', {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify(data)
      }).then(this._checkResponse);
    }
  }, {
    key: "deleteCard",
    value: function deleteCard(id) {
      return fetch(this._url + "/cards/".concat(id), {
        method: 'DELETE',
        headers: this._headers
      }).then(this._checkResponse);
    }
  }, {
    key: "like",
    value: function like(id) {
      return fetch(this._url + "/cards/likes/".concat(id), {
        method: 'PUT',
        headers: this._headers
      }).then(this._checkResponse);
    }
  }, {
    key: "dislike",
    value: function dislike(id) {
      return fetch(this._url + "/cards/likes/".concat(id), {
        method: 'DELETE',
        headers: this._headers
      }).then(this._checkResponse);
    }
  }, {
    key: "changeAvatar",
    value: function changeAvatar(data) {
      return fetch(this._url + "/users/me/avatar", {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify(data)
      }).then(this._checkResponse);
    }
  }]);
  return Api;
}();

;// CONCATENATED MODULE: ./src/pages/index.js
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}










var uId;
var popupAreUSure = new PopupConfirm(classListForm.popupConfirm);
popupAreUSure.setEventListeners();
var api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-70',
  headers: {
    authorization: 'abd16267-99d7-4c32-91d5-36491ad6a75d',
    'Content-Type': 'application/json'
  }
});
var createCard = function createCard(item) {
  var card = new Card(item, '#card-template', {
    handleClick: function handleClick(name, image) {
      popupWithImage.open(name, image);
    },
    handleDeleteClick: function handleDeleteClick(id) {
      popupAreUSure.open(id);
      popupAreUSure.setConfirm(function () {
        popupAreUSure.setLoadingState('Удаление...');
        api.deleteCard(id).then(function () {
          card.deleteCard();
          popupAreUSure.close();
          popupAreUSure.setLoadingState('Да');
        }).catch(function (err) {
          console.log(err);
        });
      });
    },
    handleLikeClick: function handleLikeClick(id) {
      var isLiked = card.isLiked();
      if (!isLiked) {
        api.like(id).then(function (data) {
          card.setLike(data.likes.length);
        }).catch(function (err) {
          return console.log(err);
        });
      } else {
        api.dislike(id).then(function (data) {
          card.setDislike(data.likes.length);
        }).catch(function (err) {
          return console.log(err);
        });
      }
    }
  }, uId);
  return card.generateCard();
};
var cardList = new Section({
  renderer: function renderer(item) {
    cardList.addItem(createCard(item));
  }
}, classListForm.galleryList);

// popup zoom image listener
var popupWithImage = new PopupWithImage(classListForm.popupZoom, classListForm.zoomUrl, classListForm.zoomDesc);
popupWithImage.setEventListeners();

// popup add card listener
var formAddCardValidator = new FormValidator(classListForm, popupAdd);
formAddCardValidator.enableValidationCheck();
var popupAddForm = new PopupWithForm(classListForm.formAddPhoto, {
  handleSubmitForm: function handleSubmitForm(item) {
    popupAddForm.setLoadingState('Сохранение...');
    api.addCard(item).then(function (data) {
      cardList.addItem(createCard(data));
      popupAddForm.setLoadingState('Создать');
      popupAddForm.close();
    }).catch(function (err) {
      return console.log(err);
    });
  }
});
openAddPopup.addEventListener('click', function () {
  formAddCardValidator.disableSubmitButton();
  popupAddForm.open();
});
popupAddForm.setEventListeners();

// avatar edit button listener
var formAvatarEditValidator = new FormValidator(classListForm, document.querySelector(classListForm.popupAvatarEdit));
formAvatarEditValidator.enableValidationCheck();
var popupAvatarEdit = new PopupWithForm(classListForm.popupAvatarEdit, {
  handleSubmitForm: function handleSubmitForm(item) {
    popupAvatarEdit.setLoadingState('Сохранение...');
    api.changeAvatar({
      avatar: item.link
    }).then(function (data) {
      document.querySelector(classListForm.profileAvatar).src = data.avatar;
      popupAvatarEdit.setLoadingState('Сохранить');
      popupAvatarEdit.close();
    }).catch(function (err) {
      return console.log(err);
    });
  }
});
popupAvatarEdit.setEventListeners();
profileAvatarEditButton.addEventListener('click', function () {
  popupAvatarEdit.open();
});

// popup edit profile listener
var userInfo = new UserInfo(classListForm.profileName, classListForm.profileDesc, classListForm.profileAvatar);
var formEditProfileValidator = new FormValidator(classListForm, popupEditProfile);
formEditProfileValidator.enableValidationCheck();
var userPopupForm = new PopupWithForm(classListForm.formEditProfile, {
  handleSubmitForm: function handleSubmitForm(item) {
    userPopupForm.setLoadingState('Сохранение...');
    api.setUserInfo({
      name: item.profile__name,
      about: item.profile__position
    }).then(function (data) {
      userInfo.setUserInfo(data);
      userPopupForm.setLoadingState('Сохранить');
      userPopupForm.close();
    }).catch(function (err) {
      return console.log(err);
    });
  }
});
openEditPopup.addEventListener('click', function () {
  var userconfig = userInfo.getUserInfo();
  formEditProfileValidator.disableSubmitButton();
  userPopupForm.open();
  inputUserName.value = userconfig.name;
  inputUserDescription.value = userconfig.description;
});
userPopupForm.setEventListeners();
Promise.all([api.getInitialCards(), api.getUserInfo()]).then(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
    cards = _ref2[0],
    uData = _ref2[1];
  // render userInfo from api
  userInfo.setUserInfo(uData);
  uId = uData._id;

  // render cards from api
  cardList.renderItems(cards.reverse());
}).catch(function (err) {
  console.log("\u041E\u0448\u0438\u0431\u043A\u0430: ".concat(err));
});
/******/ })()
;