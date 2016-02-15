
function sum(sum1, sum2){
  var sum = sum1 + sum2;
  //console.log('The sum of ' + sum1 + ' + ' + sum2 + ' = ' + sum + '.');
  return sum;
}

function multiply(multi1,multi2){
  var multi = multi1 * multi2;
  //console.log('The product of ' + mutli1 + ' and ' + multi2 + ' is ' + multi);
  return multi;
}

function sumAndMultiply(num1, num2, num3){
  var sumof2 = sum(num1,num2);
  var totalSum = sum(sumof2, num3);

  var multiplyof2 = multiply(num1,num2);
  var totalMultiply = multiply(multiplyof2, num3);

  console.log(num1 + ' and ' + num2 + ' and ' + num3 + ' sum to ' + totalSum + '.');

  console.log('The numbers ' + num1 + ' and ' + num2 + ' and ' + num3 + ' have a product ' + ' of ' + totalMultiply + '.');

  return [totalSum, totalMultiply];


}

function sumArray(numbArray){
  var totalSumArray = 0;
  for(var i = 0; i < numbArray.length; i++){
    totalSumArray = numbArray[i] + totalSumArray;
    totalSumArray +=numArray[i];
  }
  console.table(numbArray);
  console.log(numbArray + ' was passed in as an array of numbers, and ' + totalSumArray + ' is their sum.' );
  return totalSumArray;
}
