exports.map = function(seq,op) {
  return seq;
}

exports.flatMap = function(seq,op) {
  return seq;
}

exports.filter = function(seq,predicate) {
  return seq;
}

exports.reduce = function(seq,op,initial) {
  return 0;
}

exports.reduceIdentity = function(m,i) {
  return i;
}


function exampleFilterMapIterative(input) {
  var back = [];
  for(var i=0; i<input.length; ++i) {
    if(input[i].paid) back.push(getStripVerificationNumbers(input[i]));
  }
  return back;
  //OR
  return _(input).filter('paid').map(getStripeVerificationNumber).value();
}
