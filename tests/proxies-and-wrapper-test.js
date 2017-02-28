'use strict'
const assert = require('chai').assert
  , UniveralAnalytics = require('universal-analytics')
;

let ignoreUser = 'ecc7aed9-a10f-4c27-b456-1bf8344a4e33'
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

    console.log('ua2._queue', JSON.stringify(ua2._queue, null, 2));

    assert.lengthOf(ua2._queue,0);
  })
})
