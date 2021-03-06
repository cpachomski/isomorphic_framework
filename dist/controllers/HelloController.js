'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Controller2 = require('../lib/Controller');

var _Controller3 = _interopRequireDefault(_Controller2);

var _helpers = require('../lib/helpers');

var Helpers = _interopRequireWildcard(_helpers);

var _nunjucks = require('nunjucks');

var _nunjucks2 = _interopRequireDefault(_nunjucks);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//read templates from dist directory
_nunjucks2.default.configure('./dist');

var HelloController = function (_Controller) {
	_inherits(HelloController, _Controller);

	function HelloController() {
		_classCallCheck(this, HelloController);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(HelloController).apply(this, arguments));
	}

	_createClass(HelloController, [{
		key: 'toString',
		value: function toString(cb) {
			_nunjucks2.default.renderString('<p>From Hello Controller </p>', Helpers.getRequestNames(this.context), function (err, html) {
				if (err) {
					return cb(err, null);
				}

				cb(null, html);
			});
		}
	}]);

	return HelloController;
}(_Controller3.default);

exports.default = HelloController;