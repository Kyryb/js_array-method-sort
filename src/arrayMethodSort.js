'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultCompare) {
    for (let i = 1; i < this.length; i++) {
      for (let j = 0; j < this.length - i; j++) {
        if (compareFunction(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j+1], this[j]];
        }
      }
    }

    return this;
  };
}

function defaultCompare (elem1, elem2) {
  return String(elem1) > String(elem2) ? 1 : -1;
}

module.exports = applyCustomSort;
