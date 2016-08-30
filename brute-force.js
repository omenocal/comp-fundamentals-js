exports.canFitOnCloud = function (capacity,princess,guards) {
  //console.log('Trying',capacity,princess,guards);
  if ( princess > capacity ) return false;
  var all =  princess + guards.reduce((m,x) => m+x,0);
  if (all < capacity) return false;
  if (all == capacity) return true;
  return combos(0,[],capacity,princess,guards);
}

function check(capacity, princess, guards) {
  return capacity == princess + guards.reduce((m,x) => m+x,0);
}

function combos(cursor, sofar, capacity, princess, guards ) {
  if(cursor >= guards.length) {
    return check(capacity, princess, sofar);
  }
  return combos(cursor+1, sofar, capacity, princess,guards)
    || combos(cursor+1, sofar.concat([guards[cursor]]), capacity, princess,guards);
}
