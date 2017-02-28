'use strict'

module.exports = function wrapAnalytics(analytics, ignoreUser) {
  //Do your wrapping here
  const previousEnqueue = analytics.event;

  analytics.event = function () {
  	if (this.cid === ignoreUser) {
  		return [];
  	}

  	return previousEnqueue.apply(this, arguments);
  };

  return analytics;
}

