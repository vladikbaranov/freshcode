function MyArray() {
	this.length = 0;
	for (let i = 0; i < arguments.length; i++) {
		this.push(arguments[i]);
	}
}

MyArray.prototype = new MyArrayProto();


function MyArrayProto(){

  this.push = function push() {
		if (arguments) {
			for (let i = 0; i < arguments.length; i++) {
				this[this.length++] = arguments[i];
			}
		}
		return this.length;
	};

  this.every = function every(fn){
    for(let i = 0; i < this.length; i++){
      if(!fn(this[i], i, this)){
      return false;
    }
    return true;
    }
  }
}



const myArr1 = new MyArray(1, 3, 5);
console.log(myArr1.every(el=> el>2));