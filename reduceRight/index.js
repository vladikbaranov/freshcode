let myArr = [1, 3, 7, 8, 11];


const myReduce = (arr, callback, startValue) => {
  let newArr = arr.reverse();
  let result = startValue || [];
  for (let i = 0; i < arr.length; i++) {
    result = callback(Number(result), (arr[i]), i, arr);
  }
  return result;
}


console.log(myReduce(myArr, (acum, curr) => acum + curr, [])); 