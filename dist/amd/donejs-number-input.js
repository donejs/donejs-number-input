/*donejs-number-input@0.0.0#donejs-number-input*/
define([
    'can/component',
    'can/map',
    'can/map/define',
    'css!./donejs-number-input.less.css',
    './donejs-number-input.stache'
], function ($__0, $__2, $__4, $__5, $__6) {
    'use strict';
    if (!$__0 || !$__0.__esModule)
        $__0 = { default: $__0 };
    if (!$__2 || !$__2.__esModule)
        $__2 = { default: $__2 };
    if (!$__4 || !$__4.__esModule)
        $__4 = { default: $__4 };
    if (!$__5 || !$__5.__esModule)
        $__5 = { default: $__5 };
    if (!$__6 || !$__6.__esModule)
        $__6 = { default: $__6 };
    var Component = $__0.default;
    var Map = $__2.default;
    $__4;
    $__5;
    var template = $__6.default;
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
    return {
        get ViewModel() {
            return ViewModel;
        },
        get default() {
            return $__default;
        },
        __esModule: true
    };
});