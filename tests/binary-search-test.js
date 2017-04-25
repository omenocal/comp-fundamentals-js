'use strict'
const assert = require('chai').assert
  , sut = require('../binary-search.js')
  , _ = require('lodash')
;

describe('binary-search',function(){
  itIs(0, 1, [1]);
  itIs(-1, 0, [1]);
  itIs(-1, 2, [1]);
  itIs(0, 1, [1,3]);
  itIs(1, 3, [1,3]);
  itIs(-1, 0, [1,3]);
  itIs(-1, 2, [1,3]);
  itIs(-1, 4, [1,3]);
  itIs(0, 1, [1,3,5]);
  itIs(1, 3, [1,3,5]);
  itIs(2, 5, [1,3,5]);
  itIs(-1, 0, [1,3,5]);
  itIs(-1, 2, [1,3,5]);
  itIs(-1, 4, [1,3,5]);
  itIs(-1, 6, [1,3,5]);
  itIs(0, 1, [1,3,5,7]);
  itIs(1, 3, [1,3,5,7]);
  itIs(2, 5, [1,3,5,7]);
  itIs(3, 7, [1,3,5,7]);
  itIs(-1, 0, [1,3,5,7]);
  itIs(-1, 2, [1,3,5,7]);
  itIs(-1, 4, [1,3,5,7]);
  itIs(-1, 6, [1,3,5,7]);
  itIs(-1, 8, [1,3,5,7]);

  itIs(0, 0, _.range(10));
  itIs(1, 1, _.range(10));
  itIs(2, 2, _.range(10));
  itIs(3, 3, _.range(10));
  itIs(4, 4, _.range(10));
  itIs(5, 5, _.range(10));
  itIs(6, 6, _.range(10));
  itIs(7, 7, _.range(10));
  itIs(8, 8, _.range(10));
  itIs(9, 9, _.range(10));
  itIs(-1, 10, _.range(10));

  itIs(8, 8, _.range(100));

  itIs(10, 2, [1,1,1,1,1,1,1,1,1,1,2]);

  itIs(-1, 8, []);

  it(`works with duplicates`,function(){
    let actual = sut(1,[1,1,1,1,1,1,1,1,1,1,2]);
    assert.isAtLeast(actual, 0);
    assert.isAtMost(actual, 9);
  })

  function itIs(expected, needle, haystack) {
    it(`[${haystack.join(',')}] @ ${needle} => ${expected}`,function(){
      let actual = sut(needle,haystack);
      assert.equal(actual, expected);
    })
  }
})

