class PaymentUserForDisplay {
    public id: number;
    public firstName: string;
    public lastName: string;
    public creditCardNo: string;
    public displayName() {
    return this.lastName + ", " + this.firstName;
    }
}

class PaymentUserForWrite {
    public id: number;
    public creditCardNo: string;
    public validCreditCard;
    public changeCreditCard(newNumber: string) {
        if(this.validCreditCard(newNumber)) {
        this.creditCardNo = newNumber;
        } else {
        throw 'Invalid credit card number.';
        }
    }
}