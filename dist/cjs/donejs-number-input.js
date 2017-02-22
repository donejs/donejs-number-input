/*donejs-number-input@0.1.1#donejs-number-input*/
'use strict';
var $__can_45_component__, $__can_45_define_47_map_47___, $__donejs_45_number_45_input_46_less_33___, $__donejs_45_number_45_input_46_stache_33___;
var Component = ($__can_45_component__ = require('can-component'), $__can_45_component__ && $__can_45_component__.__esModule && $__can_45_component__ || { default: $__can_45_component__ }).default;
var DefineMap = ($__can_45_define_47_map_47___ = require('can-define/map/map'), $__can_45_define_47_map_47___ && $__can_45_define_47_map_47___.__esModule && $__can_45_define_47_map_47___ || { default: $__can_45_define_47_map_47___ }).default;
$__donejs_45_number_45_input_46_less_33___ = require('./donejs-number-input.less.css'), $__donejs_45_number_45_input_46_less_33___ && $__donejs_45_number_45_input_46_less_33___.__esModule && $__donejs_45_number_45_input_46_less_33___ || { default: $__donejs_45_number_45_input_46_less_33___ };
var template = ($__donejs_45_number_45_input_46_stache_33___ = require('./donejs-number-input.stache.js'), $__donejs_45_number_45_input_46_stache_33___ && $__donejs_45_number_45_input_46_stache_33___.__esModule && $__donejs_45_number_45_input_46_stache_33___ || { default: $__donejs_45_number_45_input_46_stache_33___ }).default;
var ViewModel = DefineMap.extend({
    value: {
        value: 0,
        type: 'number',
        set: function (value) {
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
        value: Number.MAX_VALUE,
        type: 'number'
    },
    min: {
        value: 0,
        type: 'number'
    },
    increment: function () {
        this.value = this.value + 1;
    },
    decrement: function () {
        this.value = this.value - 1;
    }
});
var $__default = Component.extend({
    tag: 'donejs-number-input',
    viewModel: ViewModel,
    template: template
});
Object.defineProperties(module.exports, {
    ViewModel: {
        get: function () {
            return ViewModel;
        }
    },
    default: {
        get: function () {
            return $__default;
        }
    },
    __esModule: { value: true }
});