function printEvenNumber(s){
  var arr = s.split('');
  var evens = [];

  for(var i=0; i<arr.length; i++){
    var num = parseInt(arr[i]); 
    if(num % 2 == 0){
      evens.push(num);
    }
  }
  
  if(evens.length == 0){
    return -1;
  } else {
    var sorted = evens.sort(function(a,b){return a-b;});
    return sorted[0];
  }

}

var evenNumber = printEvenNumber('568933321998654');
console.log(evenNumber);

