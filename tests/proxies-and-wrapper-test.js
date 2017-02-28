'use strict'
const assert = require('chai').assert
  , UniveralAnalytics = require('universal-analytics')
;

let ignoreUser = 'ignore-me-please'
  , validUser = 'please-use-me-instead'
  , trackingCode = 'my-tracking-code'
;

function sut(ua) {
   return  require('../proxies-and-wrappers')(ua,ignoreUser)
}

describe('proxes-and-wrappers',function(){
  it('valid users pass through',function(){
    let ua = UniveralAnalytics('trackingCode',validUser);
    let ua2 = sut(ua);
    ua2.event('SomeCategory','SomeAction','SomeLabel');
    assert.lengthOf(ua2._queue,1);
    assert.equal(ua2._queue[0].ea,'SomeAction')
  })

  it('invalid users are ignored',function(){
    let ua = UniveralAnalytics('trackingCode',ignoreUser);
    let ua2 = sut(ua);
    ua2.event('SomeCategory','SomeAction','SomeLabel');
    assert.lengthOf(ua2._queue,0);
  })
})
