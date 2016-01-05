'use strict';

var assert = require('assert');
var numberTransform = require('./index.js');

it('should transfrom number to chinese', function () {
	assert.equal(numberTransform(1), '一');
});
