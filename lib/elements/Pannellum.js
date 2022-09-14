"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

require("../pannellum/css/pannellum.css");

require("../pannellum/css/style-textInfo.css");

require("../pannellum/js/libpannellum.js");

require("../pannellum/js/pannellum.js");

require("../pannellum/js/RequestAnimationFrame");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Pannellum = /*#__PURE__*/function (_PureComponent) {
  _inheritsLoose(Pannellum, _PureComponent);

  function Pannellum(props) {
    var _this;

    _this = _PureComponent.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "renderImage", function (state) {
      var children = _this.props.children; // make the array of sub components, even if its one, it become array of one

      var hotspots = [].concat(children);
      var hotspotArray = [];

      if (Array.isArray(hotspots)) {
        hotspots.map(function (hotspot) {
          switch (hotspot.props.type) {
            case "info":
              return hotspotArray.push({
                id: Math.random().toString(36).substr(2, 9),
                type: hotspot.props.type,
                pitch: hotspot.props.pitch ? hotspot.props.pitch : 10,
                yaw: hotspot.props.yaw ? hotspot.props.yaw : 10,
                text: hotspot.props.text ? hotspot.props.text : "",
                URL: hotspot.props.URL ? hotspot.props.URL : ""
              });

            case "custom":
              return hotspotArray.push({
                id: Math.random().toString(36).substr(2, 9),
                pitch: hotspot.props.pitch ? hotspot.props.pitch : 10,
                yaw: hotspot.props.yaw ? hotspot.props.yaw : 10,
                cssClass: hotspot.props.cssClass ? hotspot.props.cssClass : "tooltipcss",
                createTooltipFunc: hotspot.props.tooltip ? hotspot.props.tooltip : _this.hotspotTooltip,
                createTooltipArgs: hotspot.props.tooltipArg ? hotspot.props.tooltipArg : {},
                clickHandlerFunc: hotspot.props.handleClick ? hotspot.props.handleClick : _this.handleClickHotspot,
                clickHandlerArgs: hotspot.props.handleClickArg ? hotspot.props.handleClickArg : {
                  name: "test"
                }
              });

            default:
              return [];
          }
        });
      }

      var jsonConfig = {
        type: "equirectangular",
        panorama: _this.props.image,
        haov: _this.props.haov,
        vaov: _this.props.vaov,
        vOffset: _this.props.vOffset,
        yaw: _this.props.yaw,
        pitch: _this.props.pitch,
        hfov: _this.props.hfov,
        minHfov: _this.props.minHfov,
        maxHfov: _this.props.maxHfov,
        minPitch: _this.props.minPitch,
        maxPitch: _this.props.maxPitch,
        minYaw: _this.props.minYaw,
        maxYaw: _this.props.maxYaw,
        autoRotate: _this.props.autoRotate,
        compass: _this.props.compass,
        preview: _this.props.preview,
        previewTitle: _this.props.previewTitle,
        previewAuthor: _this.props.previewAuthor,
        author: _this.props.author,
        title: _this.props.title,
        autoLoad: _this.props.autoLoad,
        orientationOnByDefault: _this.props.orientationOnByDefault,
        showZoomCtrl: _this.props.showZoomCtrl,
        doubleClickZoom: _this.props.doubleClickZoom,
        keyboardZoom: _this.props.keyboardZoom,
        mouseZoom: _this.props.mouseZoom,
        draggable: _this.props.draggable,
        disableKeyboardCtrl: _this.props.disableKeyboardCtrl,
        showFullscreenCtrl: _this.props.showFullscreenCtrl,
        showControls: _this.props.showControls,
        hotSpotDebug: _this.props.hotspotDebug,
        hotSpots: hotspotArray,
        onRender: _this.props.onRender
      };
      Object.keys(jsonConfig).forEach(function (key) {
        return jsonConfig[key] === "" && delete jsonConfig[key];
      }); // this.setState({ jsonConfig });

      if (state === "update") {
        _this.panorama.destroy();
      }

      _this.panorama = pannellum.viewer(_this.props.id ? _this.props.id : _this.state.id, jsonConfig);

      _this.panorama.on("load", _this.props.onLoad);

      _this.panorama.on("scenechange", _this.props.onScenechange);

      _this.panorama.on("scenechangefadedone", _this.props.onScenechangefadedone);

      _this.panorama.on("error", _this.props.onError);

      _this.panorama.on("errorcleared", _this.props.onErrorcleared);

      _this.panorama.on("mousedown", _this.props.onMousedown);

      _this.panorama.on("mouseup", _this.props.onMouseup);

      _this.panorama.on("touchstart", _this.props.onTouchstart);

      _this.panorama.on("touchend", _this.props.onTouchend);
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      _this.renderImage("mount");
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickHotspot", function (e, args) {
      console.log("hotspot clicked", args.name);
    });

    _defineProperty(_assertThisInitialized(_this), "hotspotTooltip", function (hotSpotDiv, args) {
      hotSpotDiv.setAttribute("id", "textInfo");
      var hDiv = document.createElement("div");
      hDiv.classList.add("hotspot");
      var outDiv = document.createElement("div");
      outDiv.classList.add("out");
      var inDiv = document.createElement("div");
      inDiv.classList.add("in");
      var imageDiv = document.createElement("div");
      imageDiv.classList.add("image");
      hotSpotDiv.appendChild(hDiv);
      hDiv.appendChild(inDiv);
      hDiv.appendChild(outDiv);
    });

    _defineProperty(_assertThisInitialized(_this), "getViewer", function () {
      return _this.panorama;
    });

    _defineProperty(_assertThisInitialized(_this), "forceRender", function () {
      _this.renderImage("update");
    });

    _this.state = {
      id: Math.random().toString(36).substr(2, 9)
    };
    return _this;
  }

  var _proto = Pannellum.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.image !== this.props.image || prevProps.width !== this.props.width || prevProps.height !== this.props.height || prevProps.compass !== this.props.compass || prevProps.title !== this.props.title || prevProps.author !== this.props.author || prevProps.preview !== this.props.preview || prevProps.previewTitle !== this.props.previewTitle || prevProps.previewAuthor !== this.props.previewAuthor || prevProps.showZoomCtrl !== this.props.showZoomCtrl || prevProps.showFullscreenCtrl !== this.props.showFullscreenCtrl || prevProps.showControls !== this.props.showControls || prevProps.children.length !== this.props.children.length) {
      this.renderImage("update");
    }

    if (prevProps.maxYaw !== this.props.maxYaw || prevProps.minYaw !== this.props.minYaw || prevProps.maxPitch !== this.props.maxPitch || prevProps.minPitch !== this.props.minPitch || prevProps.maxHfov !== this.props.maxHfov || prevProps.minHfov !== this.props.minHfov) {
      this.panorama.setYawBounds([this.props.minYaw, this.props.maxYaw]);
      this.panorama.setPitchBounds([this.props.minPitch, this.props.maxPitch]);
      this.panorama.setHfovBounds([this.props.minHfov, this.props.maxHfov]);
    }

    if (prevProps.yaw !== this.props.yaw) {
      this.panorama.setYaw(this.props.yaw);
    }

    if (prevProps.pitch !== this.props.pitch) {
      this.panorama.setPitch(this.props.pitch);
    }

    if (prevProps.hfov !== this.props.hfov) {
      this.panorama.setHfov(this.props.hfov);
    }
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        width = _this$props.width,
        height = _this$props.height;
    var divStyle = {
      width: width,
      height: height
    };
    return /*#__PURE__*/_react["default"].createElement("div", {
      id: this.props.id ? this.props.id : this.state.id,
      style: divStyle,
      ref: function ref(node) {
        return _this2.imageNode = node;
      }
    });
  };

  return Pannellum;
}(_react.PureComponent);

_defineProperty(Pannellum, "defaultProps", {
  children: [],
  width: "100%",
  height: "400px",
  image: "",
  haov: 360,
  vaov: 180,
  vOffset: 0,
  yaw: 0,
  pitch: 0,
  hfov: 100,
  minHfov: 50,
  maxHfov: 150,
  minPitch: -90,
  maxPitch: 90,
  minYaw: -180,
  maxYaw: 180,
  autoRotate: 0,
  compass: false,
  preview: "",
  previewTitle: "",
  previewAuthor: "",
  title: "",
  author: "",
  autoLoad: false,
  orientationOnByDefault: false,
  showZoomCtrl: true,
  doubleClickZoom: true,
  keyboardZoom: true,
  mouseZoom: true,
  draggable: true,
  disableKeyboardCtrl: false,
  showFullscreenCtrl: true,
  showControls: true,
  onLoad: function onLoad() {},
  onScenechange: function onScenechange() {},
  onScenechangefadedone: function onScenechangefadedone() {},
  onError: function onError() {},
  onErrorcleared: function onErrorcleared() {},
  onMousedown: function onMousedown() {},
  onMouseup: function onMouseup() {},
  onTouchstart: function onTouchstart() {},
  onTouchend: function onTouchend() {},
  hotspotDebug: false,
  onRender: null
});

Pannellum.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node]),
  id: _propTypes["default"].string,
  width: _propTypes["default"].string,
  height: _propTypes["default"].string,
  image: _propTypes["default"].string,
  haov: _propTypes["default"].number,
  vaov: _propTypes["default"].number,
  vOffset: _propTypes["default"].number,
  yaw: _propTypes["default"].number,
  pitch: _propTypes["default"].number,
  hfov: _propTypes["default"].number,
  minHfov: _propTypes["default"].number,
  maxHfov: _propTypes["default"].number,
  minPitch: _propTypes["default"].number,
  maxPitch: _propTypes["default"].number,
  minYaw: _propTypes["default"].number,
  maxYaw: _propTypes["default"].number,
  autoRotate: _propTypes["default"].number,
  compass: _propTypes["default"].bool,
  preview: _propTypes["default"].string,
  previewTitle: _propTypes["default"].string,
  previewAuthor: _propTypes["default"].string,
  title: _propTypes["default"].string,
  author: _propTypes["default"].string,
  autoLoad: _propTypes["default"].bool,
  orientationOnByDefault: _propTypes["default"].bool,
  showZoomCtrl: _propTypes["default"].bool,
  doubleClickZoom: _propTypes["default"].bool,
  keyboardZoom: _propTypes["default"].bool,
  mouseZoom: _propTypes["default"].bool,
  draggable: _propTypes["default"].bool,
  disableKeyboardCtrl: _propTypes["default"].bool,
  showFullscreenCtrl: _propTypes["default"].bool,
  showControls: _propTypes["default"].bool,
  onLoad: _propTypes["default"].func,
  onScenechange: _propTypes["default"].func,
  onScenechangefadedone: _propTypes["default"].func,
  onError: _propTypes["default"].func,
  onErrorcleared: _propTypes["default"].func,
  onMousedown: _propTypes["default"].func,
  onMouseup: _propTypes["default"].func,
  onTouchstart: _propTypes["default"].func,
  onTouchend: _propTypes["default"].func,
  hotspotDebug: _propTypes["default"].bool,
  tooltip: _propTypes["default"].func,
  tooltipArg: _propTypes["default"].object,
  handleClick: _propTypes["default"].func,
  handleClickArg: _propTypes["default"].object,
  cssClass: _propTypes["default"].string,
  onRender: _propTypes["default"].func
} : {};

Pannellum.Hotspot = function () {};

Pannellum.Hotspot = function () {};

var _default = Pannellum;
exports["default"] = _default;
module.exports = exports.default;