function Account(accountName, initialBalance) {
  this.accountName = accountName;
  this.balance = initialBalance;
}

Account.prototype.deposit = function (amount) {
  this.balance += amount;
};
Account.prototype.withdraw = function (amount) {
  this.balance -= amount;
};
Account.prototype.bank = 'Bank of America';
const account = new Account('sait', 500);
// console.log(account.bank);
console.log(account.__proto__);

// Inheritance
function SpecialAccount(accountName, initialBalance, specialCode) {
  Account.call(this, accountName, initialBalance);
  this.specialCode = specialCode;
}

SpecialAccount.prototype = Object.create(Account.prototype);
SpecialAccount.prototype.special = function () {
  console.log('this is a special account');
};
const specialAccount = new SpecialAccount('sait', 500, 404);
console.log(specialAccount);
