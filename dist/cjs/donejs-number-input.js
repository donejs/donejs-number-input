/*donejs-number-input@0.1.0#donejs-number-input*/
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { 'default': obj };
}
var _canComponent = require('can/component/component');
var _canComponent2 = _interopRequireDefault(_canComponent);
var _canMap = require('can/map/map');
var _canMap2 = _interopRequireDefault(_canMap);
require('can/map/define/define');
require('./donejs-number-input.less.css');
var _donejsNumberInputStache = require('./donejs-number-input.stache.js');
var _donejsNumberInputStache2 = _interopRequireDefault(_donejsNumberInputStache);
var ViewModel = _canMap2['default'].extend({
    define: {
        value: {
            value: 0,
            type: 'number',
            set: function set(value) {
                if (value > this.attr('max')) {
                    return this.attr('max');
                }
                if (value < this.attr('min')) {
                    return this.attr('min');
                }
                return value;
            }
        },
        max: {
            value: Number.MAX_VALUE,
            type: 'number'
        },
        min: {
            value: 0,
            type: 'number'
        }
    },
    increment: function increment() {
        this.attr('value', this.attr('value') + 1);
    },
    decrement: function decrement() {
        this.attr('value', this.attr('value') - 1);
    }
});
exports.ViewModel = ViewModel;
exports['default'] = _canComponent2['default'].extend({
    tag: 'donejs-number-input',
    viewModel: ViewModel,
    template: _donejsNumberInputStache2['default']
});