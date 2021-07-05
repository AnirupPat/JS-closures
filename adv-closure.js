function Counter() {
  var count = 0;
  this.increment = () => {
    console.log(++count);
  };
  this.decrement = () => {
    console.log(--count);
  };
}

let counterCall = new Counter();
counterCall.increment();
