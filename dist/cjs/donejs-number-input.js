/*donejs-number-input@0.0.0#donejs-number-input*/
'use strict';
var $__can_47_component_47___, $__can_47_map_47___, $__can_47_map_47_define_47___, $__donejs_45_number_45_input_46_less_33___, $__donejs_45_number_45_input_46_stache_33___;
var Component = ($__can_47_component_47___ = require('can/component/component'), $__can_47_component_47___ && $__can_47_component_47___.__esModule && $__can_47_component_47___ || { default: $__can_47_component_47___ }).default;
var Map = ($__can_47_map_47___ = require('can/map/map'), $__can_47_map_47___ && $__can_47_map_47___.__esModule && $__can_47_map_47___ || { default: $__can_47_map_47___ }).default;
$__can_47_map_47_define_47___ = require('can/map/define/define'), $__can_47_map_47_define_47___ && $__can_47_map_47_define_47___.__esModule && $__can_47_map_47_define_47___ || { default: $__can_47_map_47_define_47___ };
$__donejs_45_number_45_input_46_less_33___ = require('./donejs-number-input.less.css'), $__donejs_45_number_45_input_46_less_33___ && $__donejs_45_number_45_input_46_less_33___.__esModule && $__donejs_45_number_45_input_46_less_33___ || { default: $__donejs_45_number_45_input_46_less_33___ };
var template = ($__donejs_45_number_45_input_46_stache_33___ = require('./donejs-number-input.stache.js'), $__donejs_45_number_45_input_46_stache_33___ && $__donejs_45_number_45_input_46_stache_33___.__esModule && $__donejs_45_number_45_input_46_stache_33___ || { default: $__donejs_45_number_45_input_46_stache_33___ }).default;
var ViewModel = Map.extend({
    define: {
        value: {
            value: 0,
            type: 'number',
            set: function (value) {
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
    increment: function () {
        this.attr('value', this.attr('value') + 1);
    },
    decrement: function () {
        this.attr('value', this.attr('value') - 1);
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