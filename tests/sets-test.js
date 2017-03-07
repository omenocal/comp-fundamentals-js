'use strict'
const assert = require('chai').assert
  , Sut = require('../sets')
;

describe('sets',function(){

  describe('constructor',function(){
    it('constructs',function(){
      let sut = new Sut();
      assert.isFalse(sut.contains('a'))
      assert.isFalse(sut.contains('b'))
      assert.isFalse(sut.contains('c'))
      assert.isFalse(sut.contains('d'))
    })

    it('constructs with items',function(){
      let sut = new Sut(['a','b','c']);
      assert.isTrue(sut.contains('a'))
      assert.isTrue(sut.contains('b'))
      assert.isTrue(sut.contains('c'))
      assert.isFalse(sut.contains('d'))
    })

    it('updates count',function(){
      let sut = new Sut(['a','b','c']);
      assert.equal(sut.count,3)
    })
  })

  describe('add',function(){
    it('can add items',function(){
      let sut = new Sut();
      assert.isFalse(sut.contains('a'))
      sut.add('a');
      assert.isTrue(sut.contains('a'))
      assert.isFalse(sut.contains('d'))
    })

    it('updates count',function(){
      let sut = new Sut();
      sut.add('a');
      assert.equal(sut.count,1)
    })

    it('can add a lot of items',function(){
      let sut = new Sut();
      for(let i=0; i< 20; i++) sut.add(''+i);
      for(let i=0; i< 20; i++) assert.isTrue(sut.contains(''+i),`Expected to have ${i} in ${sut.data}`);
      assert.equal(sut.count,20)
    })
  })

  describe('remove',function(){
    it('can remove items',function(){
      let sut = new Sut(['a','b','c']);
      sut.remove('b');
      assert.isTrue(sut.contains('a'))
      assert.isFalse(sut.contains('b'))
      assert.isTrue(sut.contains('c'))
    })

    it('removing a found item returns true',function(){
      let sut = new Sut(['a']);
      assert.isTrue(sut.remove('a'));
    })

    it('removing an unfound item returns false',function(){
      let sut = new Sut();
      assert.isFalse(sut.remove('a'));
    })

    it('updates count when removing successfully',function(){
      let sut = new Sut(['a']);
      sut.remove('a');
      assert.equal(sut.count,0)
    })

    it('does not update count when removing unsuccessfully',function(){
      let sut = new Sut(['a']);
      sut.remove('b');
      assert.equal(sut.count,1)
    })

    it('it can remove a lot of items selectively',function(){
      let sut = new Sut();
      for(let i=0; i< 1000; i++) sut.add(''+i);
      for(let i=0; i< 1000; i+=2) sut.remove(''+i)
      for(let i=0; i< 1000; i+=2) assert.isFalse(sut.contains(''+i),`${i} should have been removed`)
      for(let i=1; i< 1000; i+=2) assert.isTrue(sut.contains(''+i), `Should contain ${i}`)
      assert.equal(sut.count,500)
    })
  })

  describe('set-like',function(){
    it('holds only one copy of an item',function(){
      let sut = new Sut(['a','a','a']);
      assert.isTrue(sut.contains('a'))
      sut.remove('a');
      assert.isFalse(sut.contains('a'))
    })

    it('counts only once per unique object',function(){
      let sut = new Sut(['a','a','a']);
      assert.equal(sut.count,1)
    })
  })

  describe('performance',function(){

    it('adds items quickly',function(){
      let startTime = new Date().getTime();
      let sut = new Sut();
      for(let i=0; i< 100000; i++) sut.add(''+i);
      let endTime = new Date().getTime();
      assert.isTrue(sut.contains('1'))
      assert.isTrue(sut.contains('10'))
      assert.isTrue(sut.contains('100'))
      assert.isTrue(sut.contains('1000'))
      assert.isTrue(sut.contains('10000'))
      assert.equal(sut.count,100000)
      assert.isAtMost(endTime - startTime, 1000, 'You took too long!');
    })

    it('adds and removes items quickly',function(){
      let sut = new Sut();
      for(let i=0; i< 100000; i++) sut.add(''+i);

      let startTime = new Date().getTime();
      for(let i=0; i< 100000; i++) sut.remove(''+i);
      let endTime = new Date().getTime();
      assert.isFalse(sut.contains('1'))
      assert.isFalse(sut.contains('10'))
      assert.isFalse(sut.contains('100'))
      assert.isFalse(sut.contains('1000'))
      assert.isFalse(sut.contains('10000'))
      assert.isAtMost(endTime - startTime, 1000, 'You took too long!');
    })
  })

})

