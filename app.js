var ptag1 = document.getElementById('answer1');
function sum(sum1, sum2){
  var sum = sum1 + sum2;
  //console.log('The sum of ' + sum1 + ' + ' + sum2 + ' = ' + sum + '.');
  ptag1.textContent = 'The sum of ' + sum1 + ' + ' + sum2 + ' = ' + sum + '.';
  return sum;
}

var ptag2 = document.getElementById('answer2');
function multiply(multi1,multi2){
  var multi = multi1 * multi2;
  //console.log('The product of ' + mutli1 + ' and ' + multi2 + ' is ' + multi);
  ptag2.textContent = 'The product of ' + multi1 + ' and ' + multi2 + ' is ' + multi;
  return multi;
}

var ptag3A = document.getElementById('answer3A');
var ptag3B = document.getElementById('answer3B');
function sumAndMultiply(num1, num2, num3){
  var sumof2 = sum(num1,num2);
  var totalSum = sum(sumof2, num3);

  var multiplyof2 = multiply(num1,num2);
  var totalMultiply = multiply(multiplyof2, num3);

  //console.log(num1 + ' and ' + num2 + ' and ' + num3 + ' sum to ' + totalSum + '.');
  ptag3A.textContent = num1 + ' and ' + num2 + ' and ' + num3 + ' sum to ' + totalSum + '.';
  //console.log('The numbers ' + num1 + ' and ' + num2 + ' and ' + num3 + ' have a product ' + ' of ' + totalMultiply + '.');
  ptag3B.textContent = 'The numbers ' + num1 + ' and ' + num2 + ' and ' + num3 + ' have a product ' + ' of ' + totalMultiply + '.';

  return [totalSum, totalMultiply];
}

var ptag4 = document.getElementById('answer4')
function sumArray(numbArray){
  var totalSumArray = 0;
  for(var i = 0; i < numbArray.length; i++){
    totalSumArray = numbArray[i] + totalSumArray;
  }
  console.table(numbArray);
  ptag4.textContent = numbArray + ' was passed in as an array of numbers, and ' + totalSumArray + ' is their sum.';
  //console.log(numbArray + ' was passed in as an array of numbers, and ' + totalSumArray + ' is their sum.' );
  return totalSumArray;
}

var ptag5 = document.getElementById('answer5')
function multiplyArray(multiArray){
  var totalmultiArray = 1;
  for(var i = 0; i < multiArray.length; i++){
    totalmultiArray = multiArray[i] * totalmultiArray;
    //console.log(i);
  }
  console.table(multiArray);
  ptag5.textContent = 'The numbers ' + multiArray + ' have a product of ' +totalmultiArray + '.';
//  console.log('The numbers' + multiArray + ' have a product of ' +totalmultiArray + '.')
}
