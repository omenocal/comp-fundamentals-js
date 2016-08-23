// Returns true if the point at x,y is in rect. On edges is considered in
// Rect is an object with {
// x: INT (the x coord of the upper left corner),
// y: INT (the y coord of the upper left corner),
// w: INT (the width of the rectangle),
// h: INT (the height of the rectangle)
// }
exports.isPointInRect = function(x,y,rec) {
    return ((x >= rec.x && x <= rec.x + rec.w) && (y >= rec.y && y <= rec.y + rec.h)) ;

  //throw new Error('Not implemented');
}
// Returns true if rect1 and rect2 intersect at all. Rects that share a boundary do not intersect
// Rect is an object with {
// x: INT (the x coord of the upper left corner),
// y: INT (the y coord of the upper left corner),
// w: INT (the width of the rectangle),
// h: INT (the height of the rectangle)
// }
exports.isRectInRect = function(rec1,rec2) {
    console.log (rec1.x);

  if ((rec1.x < rec2.x + rec2.w && rec1.x + rec1.w > rec2.x ) &&
     (rec1.y < rec2.y + rec2.h && rec1.y + rec1.y > rec2.y) )
        return true;
    return false;
  //throw new Error('Not implemented');
}
exports.isRectInRect = function(rec, segundo) {
  return isRect1InRect2(rec, segundo) || isRect1InRect2(segundo, rec)
}

var isRect1InRect2 = function(rec1, rec2) {
  return (rec1.x > rec2.x && rec1.x < rec2.x + rec2.w) && (rec1.y > rec2.y && rec1.y < rec2.y + rec2.h) ||
	((rec1.x + rec1.w) > rec2.x && rec1.x + rec1.w < rec2.x + rec2.w) && (rec1.y > rec2.y && rec1.y < rec2.y + rec2.h) ||
	(rec1.x > rec2.x && rec1.x < rec2.x + rec2.w) && (rec1.y + rec1.h > rec2.y && rec1.y + rec1.h < rec2.y + rec2.h) ||
	((rec1.x + rec1.w) > rec2.x && rec1.x + rec1.w < rec2.x + rec2.w) && (rec1.y + rec1.h > rec2.y && rec1.y + rec1.h < rec2.y + rec2.h)
}
