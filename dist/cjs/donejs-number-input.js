/*donejs-number-input@0.1.1#donejs-number-input*/
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ViewModel = undefined;
var _canComponent = require('can-component');
var _canComponent2 = _interopRequireDefault(_canComponent);
var _map = require('can-define/map/map');
var _map2 = _interopRequireDefault(_map);
require('./donejs-number-input.less.css');
var _donejsNumberInput = require('./donejs-number-input.stache.js');
var _donejsNumberInput2 = _interopRequireDefault(_donejsNumberInput);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}
var ViewModel = exports.ViewModel = _map2.default.extend({
    value: {
        value: 0,
        type: 'number',
        set: function set(value) {
            if (value > this.max) {
                return this.max;
            }
            if (value < this.min) {
                return this.min;
            }
            return value;
        }
    },
    max: {
        value: Infinity,
        type: 'number'
    },
    min: {
        value: 0,
        type: 'number'
    },
    increment: function increment() {
        this.value++;
    },
    decrement: function decrement() {
        this.value--;
    }
});
exports.default = _canComponent2.default.extend({
    tag: 'donejs-number-input',
    ViewModel: ViewModel,
    view: _donejsNumberInput2.default
});