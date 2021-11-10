class Account {
  static numOfAccounts = 0;
  #accountName;
  #balance;

  constructor(accountName, initialBalance) {
    this.#accountName = accountName;
    this.#balance = initialBalance;
    Account.numOfAccounts++;
  }

  deposit(amount) {
    this.#balance += amount;
    return this;
  }

  withdraw(amount) {
    this.#balance -= amount;
    return this;
  }

  get balance() {
    return this.#balance;
  }
  get accountName() {
    return this.#accountName;
  }
  set balance(amount) {
    this.#balance = amount;
  }

  toString() {
    return `${this.#accountName} has ${this.#balance}$`;
  }
}

const harunsAccount = new Account('harun', 1000);
const harunsAccount2 = new Account('harun', 1000);
const harunsAccount3 = new Account('harun', 1000);
const harunsAccount4 = new Account('harun', 1000);
const harunsAccount5 = new Account('harun', 1000);

// const sercansAccount = new Account('harun', 5000);
harunsAccount.deposit(10000).withdraw(8000);
console.log(harunsAccount.toString());

class SpecialAccount extends Account {
  #specialCode;
  constructor(accountName, initialBalance, specialCode) {
    super(accountName, initialBalance);
    this.#specialCode = specialCode;
  }

  specialMethod() {}
}

const specialAccount = new SpecialAccount('yaman', 5000, 06);
console.log(specialAccount);
