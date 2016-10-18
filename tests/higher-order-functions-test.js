var assert = require('chai').assert
  , higherOrderFunctions = require('../higher-order-functions')

describe('higher order functions',function(){
  describe('map',function(){
    var sut = higherOrderFunctions.map;
    var oddEven = x => x % 2 == 0;
    var identity = x => x;

    describe('odd/even',function(){
      itIs([1,2,3,4],[false,true,false,true],oddEven)
      itIs([],[],oddEven)
    })

    describe('identity',function(){
      itIs([1,2,3,4],[1,2,3,4],identity)
    })

    function itIs(input,expected,op) {
      it(`[${input.join(',')}] => [${expected.join(',')}]`,function(){
        var actual = sut(input, op);
        assert.deepEqual(actual,expected);
      })
    }

  });

  describe('flatMap',function(){
    var sut = higherOrderFunctions.flatMap;
    var multiples = x => [x, x*2, x*3];
    var identity = x => [x];
    var ifeven = x => x % 2 == 0 ? [x] : [];

    describe('multiples',function(){
      itIs([1,2,3,4],[1,2,3,2,4,6,3,6,9,4,8,12],multiples)
      itIs([],[],multiples)
    })

    describe('if even',function(){
      itIs([1,2,3,4],[2,4],ifeven)
    })

    describe('identity',function(){
      itIs([1,2,3,4],[1,2,3,4],identity)
    })

    function itIs(input,expected,op) {
      it(`[${input.join(',')}] => [${expected.join(',')}]`,function(){
        var actual = sut(input, op);
        assert.deepEqual(actual,expected);
      })
    }

  });

  describe('reduce',function(){
    var sut = higherOrderFunctions.reduce;
    var sum = (m,i) => m + i;

    itIs('sum',[1,2,3,4], 10, 0 , sum);
    itIs('empty set',[], 0, 0 , sum);
    itIs('uses initial',[], 20, 20 , sum);

    itIs('identity',[1,2,3,4], [1,2,3,4], [] , higherOrderFunctions.reduceIdentity);

    function itIs(name,input,expected,initial,op) {
      it(`${name}`,function(){
        var actual = sut(input, op,initial);
        assert.deepEqual(actual,expected);
      })
    }

  });

});
