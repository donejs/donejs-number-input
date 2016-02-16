import QUnit from 'steal-qunit';
import plugin from '../donejs-number-input';

QUnit.module('donejs-number-input');

QUnit.test('Initialized the plugin', function(){
  QUnit.equal(typeof plugin, 'function');
  QUnit.equal(plugin(), 'This is the donejs-number-input plugin');
});
