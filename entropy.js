function entropy(sequence) {
  "use strict";
  var ctr = {}, len = sequence.length;
  for (let c of sequence) {
    ctr[c] = ctr.hasOwnProperty(c) ? ctr[c] + 1 : 1;
  }
  return Object.keys(ctr).map(c => ctr[c] / len * Math.log2(len / ctr[c])).reduce((a, b) => a + b, 0);
}