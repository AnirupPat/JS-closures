function one() {
  var a = 10,
    b = 20;
  function two() {
    console.log(a);
  }
  return two;
}

one()();
