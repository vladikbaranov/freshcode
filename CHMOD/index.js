let age = prompt('Введите цифру от 0 до 7', 0);

switch(age){
  case '0':
    console.log('0 - никаких прав');
    break;

  case '1':
    console.log('1 - только выполнение');
    break;

  case '2':
    console.log('2 - только запись');
    break;

  case '3':
    console.log('3 - выполнение и запись');
    break;

  case '4':
    console.log('4 -  только чтение');
    break;

  case '5':
    console.log('5 - чтение и выполнение');
    break;

  case '6':
    console.log('6 - чтение и запись');
    break;
  
  case '7':
    console.log('7 - чтение запись и выполнение');
    break;

  default:
    console.log('Вы ввели некорректное значения')

}




