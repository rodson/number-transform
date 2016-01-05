(function() {
	'use strict';

	var SYMBOLS = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];

	var UNIT_MAP = {
	  '0': '',
	  '1': '十',
	  '2': '百',
	  '3': '千',
	  '4': '零万',
	  '5': '十',
	  '6': '百',
	  '7': '千',
	  '8': '零亿',
	  '9': '十'
	};

	var Y_MAP = [0, 4, 8];

	var numberTransform = function (input) {
	  if (input <= 0 || !parseInt(input, 10)) {
	    return '请输入正整数';
	  }

	  var inputStr = '' + input;
	  var inputArr = inputStr.split('').reverse();
	  var inputLength = inputArr.length;

	  if (inputLength > 10) {
	    return '请输入10位以内的正整数';
	  }

	  var result = '';

	  for (var i = 0; i < inputLength; i++) {
	    var value = inputArr[i];
	    var isY = Y_MAP.indexOf(i) !== -1;

	    if (isY || (!isY && value != 0)) {
	      result += UNIT_MAP[i];
	    }

	    result += SYMBOLS[value];
	  }

	  result = result.split('').reverse().join('');

	  result = result.replace(/零+$/, '')
	                 .replace(/零+/, '零')
	                 .replace(/零+万/, '万')
	                 .replace(/零+亿/, '亿')
	                 .replace(/亿万/, '亿')
	                 .replace(/^一十/, '十');

	  return result;
	}

	if (typeof module !== 'undefine' && module.exports) {
		module.exports = numberTransform;
	} else {
		window.numberTransform = numberTransform;
	}

})();
