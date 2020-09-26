
exports.min = function min (array) {
  if (!array) return 0;
  let minimal = array.sort(function(a, b) { return a - b; });
  return minimal[0] || 0;
}

exports.max = function max (array) {
  if (!array) return 0;
  let maximal = array.sort(function(a, b) { return a - b; });
  return maximal.reverse()[0] || 0;
}

exports.avg = function avg (array) {
  if (!array) return 0;
  let sum = array.reduce(function(a, b) { return a + b; }, 0);
  return (sum / array.length) || 0;
}
