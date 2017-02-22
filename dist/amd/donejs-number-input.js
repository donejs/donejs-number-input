/*donejs-number-input@0.1.1#donejs-number-input*/
define([
    'can-component',
    'can-define/map',
    'css!./donejs-number-input.less.css',
    './donejs-number-input.stache'
], function ($__0, $__2, $__4, $__5) {
    'use strict';
    if (!$__0 || !$__0.__esModule)
        $__0 = { default: $__0 };
    if (!$__2 || !$__2.__esModule)
        $__2 = { default: $__2 };
    if (!$__4 || !$__4.__esModule)
        $__4 = { default: $__4 };
    if (!$__5 || !$__5.__esModule)
        $__5 = { default: $__5 };
    var Component = $__0.default;
    var DefineMap = $__2.default;
    $__4;
    var template = $__5.default;
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