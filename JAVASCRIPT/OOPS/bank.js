class Bank {
    constructor(accno, pname, minbal) { //constructor invoking
        this.accno = accno;
        this.pname = pname;
        this.bal = minbal;
    }
    deposit(amount) {
        this.bal += amount;
        console.log("account credited with " + amount + " available balance is " + this.bal);
    }
    withdraw(amount) {
        if (amount > this.bal) {
            console.log("insufficient balance");
        }
        else {
            this.bal -= amount;
            console.log("account debited with " + amount + " available balance is " + this.bal);
        }
    }
    balanceEnq() {
        console.log(this.bal);
    }
}

var obj=new Bank(1111,"aisha",4000);//constructor is being invoked automatically
obj.deposit(8000);
obj.withdraw(20000)
obj.balanceEnq();