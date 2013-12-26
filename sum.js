function addNumbers(numberList){
 
  var sum = 0;

  for(var i=0;i<numberList.length;i++){
    sum+=numberList[i];
  }
  return sum;
}

var printNumbers = addNumbers([1,2,4,7]);
console.log(printNumbers);
