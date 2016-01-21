


(function(entropy) {
  function process(s, evaluator) {
    var h = Object.create(null), k
    s.split('').forEach(function(c) {
      h[c] && h[c]++ || (h[c] = 1) 
    })
    if (evaluator) for (k in h) evaluator(k, h[k])
    return h
  }
  entropy.calculate = function(s) {
    var sum = 0, len = s.length
    process(s, function(k, f) {
      var p = f / len
      sum -= p * Math.log(p) / Math.log(2)
    })
    return sum
  }
  entropy.bits = function(s) {
    return entropy.calculate(s) * s.length
  }
  entropy.out = function(s) {
    console.log(s, entropy.calculate(s))
  }
})(window.entropy = Object.create(null))

