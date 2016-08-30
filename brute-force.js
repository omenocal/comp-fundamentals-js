exports.canFitOnCloud = function (capacity,princess,guards) {
  guards = guards.sort((x,y) => x == y ? 0 : x < y ? 1 : -1);
  //console.log('Trying',capacity,princess,guards);
  if ( princess > capacity ) return false;
  var all =  princess + guards.reduce((m,x) => m+x,0);
  if (all < capacity) return false;
  if (all == capacity) return true;
  return combos(0,[],0,capacity,princess,guards);
}

function combos(cursor, sofar, sofarWeight, capacity, princess, guards ) {
  if(cursor >= guards.length) {
    return capacity == sofarWeight + princess;
  }
  return withGuard(guards[cursor],cursor,sofar,sofarWeight,capacity,princess,guards)
    || withGuard(0,cursor,sofar,sofarWeight,capacity,princess,guards);
}

function withGuard(guard,cursor,sofar,sofarWeight,capacity,princess,guards) {
  sofarWeight += guard;
  if(sofarWeight + princess > capacity) return false;
  return combos(cursor+1, sofar.concat([guard]), sofarWeight, capacity, princess,guards);
}
