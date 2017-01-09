import QUnit from 'steal-qunit';
import { ViewModel } from './donejs-number-input.js';

// ViewModel unit tests
QUnit.module('<username>-number-input/component');

QUnit.test('Initializes the ViewModel with default values', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.value, 0, 'Default value is 0');
  QUnit.equal(vm.max, Number.MAX_VALUE, 'Max value is number max value');
	QUnit.equal(vm.min, 0, 'Max value is number max value');
});

QUnit.test('.increment', function(){
  var vm = new ViewModel();

  vm.increment();
  QUnit.equal(vm.value, 1, 'Value incremented');
});

QUnit.test('.decrement', function(){
  var vm = new ViewModel();

	vm.increment();
	vm.increment();
  vm.decrement();
  QUnit.equal(vm.value, 1, 'Value updated');
});
