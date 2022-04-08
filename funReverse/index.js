function funReverse(str) {
  if (typeof str !== 'string') {
    console.log('Введите строковое значение');
  } else {
    let arr = str.split(' ');
    if (arr.length < 3) {
      console.log('Введите 3 или больше слов');
    } else {
      console.log(arr.reverse().join(' '));
    }
  }
}

