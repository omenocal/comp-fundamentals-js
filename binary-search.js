'use strict';

module.exports = function(needle, haystack) {
	var index = binarySearch(needle, haystack, 0, haystack.length - 1);
	console.log('index', index);
	return index;
}

function binarySearch(needle, haystack, lowerIndex, biggerIndex) {
	if (lowerIndex > biggerIndex) {
		return - 1;
	} else if (lowerIndex === biggerIndex) {
		if (needle === haystack[lowerIndex]) {
			return lowerIndex;
		}

		return -1;
	}

	var middleIndex = parseInt((biggerIndex - lowerIndex) / 2, 10) + lowerIndex;

	if (needle === haystack[middleIndex]) {
		return middleIndex;
	}

	var newLowerIndex = lowerIndex;
	var newBiggerIndex = biggerIndex;

	if (needle > haystack[middleIndex]) {
		newLowerIndex = middleIndex + 1;
	} else {
		newBiggerIndex = middleIndex - 1;

		if (newBiggerIndex === -1) {
			newBiggerIndex = 0;
		}
	}

	return binarySearch(needle, haystack, newLowerIndex, newBiggerIndex);
}