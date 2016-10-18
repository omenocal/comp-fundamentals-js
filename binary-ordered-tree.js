/*
 * Tree nodes are in the form of {value: NUMBER, left: NODE, right: NODE}
 */
exports.contains = function(root, value) {

}

function badadd(i) {
  if(i<=0) return i;
  return badadd(i-1);
}

function binarysearch(op,low,up) {
  while(true){
    if(low>=up) return [low,up];
    var target = low + Math.ceil( (up-low)/2);
    try{
      console.log('Trying',target,low,up);
      op(target);
      low = target;
    }catch(e){
      up = target;
    }
  }
}

binarysearch(badadd,0,10000000);
