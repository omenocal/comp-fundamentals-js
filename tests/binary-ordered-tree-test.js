var assert = require('chai').assert
  , binaryTree = require('../binary-ordered-tree.js')

describe('binary-tree',function(){
  describe('contains',function(){
    var sut = binaryTree.contains;

    itIs('empty',null,1,false);
    itIs('single node - and is present','1 . .',1,true);
    itIs('single node - and is not present','1 . .',2,false);
    itIs('three nodes - far left','10 2 . . 12 . .',2,true);
    itIs('three nodes - far right','10 2 . . 12 . .',12,true);
    itIs('three nodes - off on on inner right','10 2 . . 12 . .',11,false);
    itIs('three nodes - off on on far right','10 2 . . 12 . .',13,false);
    itIs('three nodes - off on on inner left','10 2 . . 12 . .',4,false);
    itIs('three nodes - off on on far left','10 2 . . 12 . .',1,false);
    itIs('left loaded','10 5 3 2 1 . . . 4 . . . .',1,true);
    itIs('left loaded','10 5 3 2 1 . . . 4 . . . .',4,true);
    itIs('left loaded','10 5 3 2 1 . . . 4 . . . .',4.5,false);
    itIs('kinda complex','10 5 3 2 1 . . . 4 . . . 20 15 13 . . . 30 . .',30,true);
    itIs('kinda complex','10 5 3 2 1 . . . 4 . . . 20 15 13 . . . 30 . .',28,false);


    function itIs(name, strgraph, search, expected) {
      it(name,function(){
        var graph = buildGraph(strgraph)
        //console.log('The grap is',JSON.stringify(graph,null,2));
        assert.equal(expected, sut(graph,search));
      })
    }
  });
});

function buildGraph(strgraph) {
  if(!strgraph || !strgraph.length) return null;
  var parts = strgraph.split(' ')
    , cursor = 0;

  return next();

  function next() {
    var part = parts[cursor];
    if(part == '.') return null;
    cursor++;
    var left = next();
    cursor++;
    var right = next();
    return {
      value: +part,
      left: left,
      right: right
    };
  }
}
