let fibonacci = n => {
  let prev = 0,
      next = 1,
      temp;
  for( let i = 0; i < n; i++){
    temp = next;
    next = prev + next;
    prev = temp;
  }

  console.log(prev);
}
