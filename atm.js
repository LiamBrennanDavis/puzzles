var BankAccount = {

  'balance': 410000,

  'addMoney': function(moneyToAdd) {
    this.balance += moneyToAdd;
    this.currentBalance();
  },

  'takeMoney': function(moneyToTake) {
    this.balance -= moneyToTake;
    this.currentBalance();
  },

  'currentBalance': function(){
    console.log('you now have ' + this.balance + ' dollars.');
  }
};

BankAccount.takeMoney(100);
 
BankAccount.addMoney(1000000);


