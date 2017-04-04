'use strict';

var assert = require('chai').assert
  , reduce = require('../reduce-practice.js')
  , util = require('util')
;

describe('reduce',function(){
  describe('sum',function(){
    var sut = reduce.sum;
    itHasNoForLoop(sut);
    itIs(sut,[1,2,3,4],10);
    itIs(sut,[-1,-2,3,4],4);
    itIs(sut,[],0);
  });

  describe('max',function(){
    var sut = reduce.max;
    itHasNoForLoop(sut);
    itIs(sut,[1,2,3,4],4);
    itIs(sut,[-1,-2,3,-4],3);
    itIs(sut,[],Number.NEGATIVE_INFINITY);
  });

  describe('secondmax',function(){
    var sut = reduce.secondmax;
    itHasNoForLoop(sut);
    itIs(sut,[1,2,3,4],3);
    itIs(sut,[-1,-2,3,-4],-1);
    itIs(sut,[-1,-2,3,4],3);
    itIs(sut,[],Number.NEGATIVE_INFINITY);
  });

  describe('count',function(){
    var sut = reduce.count;
    itHasNoForLoop(sut);
    itIs(sut,[1,2,3,4],{1: 1, 2: 1, 3: 1, 4: 1});
    itIs(sut,[1,2,3,4,4],{1: 1, 2: 1, 3: 1, 4: 2});
    itIs(sut,[1,1,1],{1: 3});
    itIs(sut,[],{});
  });

});

function itIs(sut,input,expected) {
  it(`${input} => ${util.inspect(expected)}`,function(){
    var actual = sut(input);
    assert.deepEqual(actual,expected);
  });
}


function itHasNoForLoop(func) {
  it('has no for loop',function(){
    let strFunc = func.toString();
    if(/for\s*\(/g.exec(strFunc)) assert.fail('Has a for loop');
  })

}
