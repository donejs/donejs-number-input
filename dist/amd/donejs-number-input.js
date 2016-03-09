/*donejs-number-input@0.1.0#donejs-number-input*/
define([
    'exports',
    'can/component',
    'can/map',
    'can/map/define',
    'css!./donejs-number-input.less.css',
    './donejs-number-input.stache'
], function (exports, _canComponent, _canMap, _canMapDefine, _donejsNumberInputLess, _donejsNumberInputStache) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }
    var _Component = _interopRequireDefault(_canComponent);
    var _Map = _interopRequireDefault(_canMap);
    var _template = _interopRequireDefault(_donejsNumberInputStache);
    var ViewModel = _Map['default'].extend({
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
    exports['default'] = _Component['default'].extend({
        tag: 'donejs-number-input',
        viewModel: ViewModel,
        template: _template['default']
    });
});