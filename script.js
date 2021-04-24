let cps = 250;

eval(function(p, a, c, k, e, d) {
  while (c--) {
    if (k[c]) {
      p = p.replace(new RegExp('\\b' + c.toString(a) + '\\b', 'g'), k[c])
    }
  }
  return p
}('3 2=4 5(\'6\',{7:\'g\',8:a});9(b(){c(1=0;1<d;1++){e.f(2)}},0);', 17, 17, '|i|event|var|new|KeyboardEvent|keydown|key|ctrlKey|setInterval|true|function|for|' + cps + '|document|dispatchEvent|'.split('|')))
