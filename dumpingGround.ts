class PaymentUser {
    public id: number;
    public firstName: string;
    public lastName: string;
    public creditCardNo: string;
    public validCreditCard;
    public changeCreditCard(newNumber: string) {
        if(this.validCreditCard(newNumber) as any) {
            this.creditCardNo = newNumber;
        } else {
            throw 'Invalid credit card number.';
        }
    }
    public displayName() {
    return this.lastName + ", " + this.firstName;
    }
}
