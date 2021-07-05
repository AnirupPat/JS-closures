const outest = () => {
  var b = 100;
  const outer = (c) => {
    const inner = () => {
      console.log(a, b, c);
    };
    var a = 10;
    return inner;
  };
  return outer;
};
var b = 20;
var close = outest()("Hello world");
close();
