var assert = require('chai').assert
  , bruteForce = require('../brute-force.js')

describe('bruce-force',function(){
  describe('canFitOnCloud',function(){
    var sut = bruteForce.canFitOnCloud;
    itIs('trivial',100,100,[],true)
    itIs('one guard',101,100,[1,2,3,4],true)
    itIs('no body',101,100,[2,3,4],false)
    itIs('sample 1',800,200,[200,400,210,300,190],true)
    itIs('sample 2',300,300,[100],true)
    itIs('sample 3',300,200,[80,60,20,40],true)
    itIs('sample 4',200,210,[80,120],false)
    itIs('sample 5',530,130,[130,180,100],false)
    itIs('sample 6',200,220,[100,200,150],false)
    itIs('sample 7',400,180,[230,250,270],false)
    itIs('sample 8',400,180,[230,250,270],false)
    itIs('sample 9',190,150,[130,130],false)
    itIs('sample 10',310,120,[110,100],false)
    itIs('big',497,1,[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],true)
    itIs('big 2',487,1,[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],true)
    itIs('not need first',409,100,[101,102,103,104],true)
    itIs('a bunch of useless guards',200,100,[27,26,24,23,100,101,102,103,104],true)
    itIs('required guardes are non-continous',504,100,[27,26,24,23,100,101,102,103,104],true) //Uses 27, 26, 24, 23 100, 101, 103, but not 104 or 102
    itIs('needs 4',510,100,[101,102,103,104],true)
    itIs('huge',7743,125,[191,242,220,152,185,236,155,213,218,181,208,157,247,229,166,208,166,192,189,164,218,217,212,213,205,170,172,199,204,211,221,211,218,225,240,195,161,218,216,195
    , 243,225,242,207,229,222,158,189,214,183,198,166,204,204,172,193,197,231,201,218,233,159,236,193,162,208,236,207,211
    ,243,204,188,242,167,208,204,206,180,217,239,163,176,223,210,154,190,235,216,152,188,152,210,185,215,189,240,205,161,203,244],true)

    function itIs(name,cloud,princess,guards,expected) {
      it(name,function(){
        assert.equal(expected, sut(cloud,princess,guards));
      })
    }
  });
});
