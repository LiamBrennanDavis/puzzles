var storePrices = {
  
  'Gta5':70,
  'crisis2':70


}

var moneyInWallet={
  'money':50,

  'takeMoney': function(moneyToTake) {
    this.money -= moneyToTake;
  }
}

if(moneyInWallet.money<70){
  console.log(' you dont have enough money ');
}else{
  money.takeMoney(70);
  console.log(' here you go sir, have a nice day!');
}

