function MyArray() {
  this.length = 0;
  for (let i = 0; i < arguments.length; i++) {
    this.push(arguments[i]);
  }
}

MyArray.prototype = new MyArrayProto();

function MyArrayProto() {
  this.push = function push() {
    if (arguments) {
      for (let i = 0; i < arguments.length; i++) {
        this[this.length++] = arguments[i];
      }
    }
    return this.length;
  };

  this.reduce = function reduce(fn) {
		let result = [];
    for (let i = 0; i < this.length; i++) {
      result = fn(Number(result), this[i], this);
    }
    return result;
  };
}
 
let  myArr1 = new MyArray(1, 3, 5, 11);
console.log(myArr1.reduce((prev, cur) => prev + cur));





