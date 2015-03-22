/*global window document */

(function (window, document, undefined, factory) {
  if (typeof define === 'function' && define.amd) {
    define(function() {
      return factory(window, document, undefined);
    });
  } else if (typeof exports === 'object') {
    module.exports = factory;
  } else {
    window.fixImages = factory(window, document, undefined);
  }
})(window, document, undefined, function (window, document, undefined) {
    'use strict';

    var fixImages = {};

	var errorHandler = function() {
		var replacementImg = this.getAttribute('data-fallback');
		this.setAttribute('src', replacementImg);
	};

	fixImages.init = function() {

    	var imgArr = document.querySelectorAll('img');

		for (var i = imgArr.length - 1; i >= 0; i--) {
			imgArr[i].addEventListener("error", errorHandler, true);
		}
	}

    return fixImages;
});