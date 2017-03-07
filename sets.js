'use strict'
module.exports = class Set {

  constructor(items) {
    items = items || [];
    this.count = 0;
    this.data = new Array(10);
    items.map(x => this.add(x));
  }

  contains(item) {
    //Add your code
  }

  add(item) {
    this._growIfNeeded();
    //Add your code
  }

  remove(item) {
    let index = this._index(item);
    if(!this.data[index]) return false;
    let subindex = this.data[index].indexOf(item);
    if(subindex < 0) return false;
    this.data[index].splice(subindex,1);
    this.count--;
    return true;
  }

  _index(item) {
    return hash(item) % this.data.length;
  }

  get _loadFactor() {
    if(this.count == 0) return 0;
    return this.count / this.data.length;
  }

  _growIfNeeded() {
    if(this._loadFactor < .6) return;
  }

}

function hash(str) {
  let hash = 7;
  for(var i=0; i<str.length; i++) hash = hash *31 + str.charCodeAt(i);
  return hash;
}

