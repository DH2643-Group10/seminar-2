// Commands:
class UpdateUserCreditCardInfoCommand {
    // In the case of updating a user's credit card information
    public id: number;
    public creditCardNo: string;
    public validCreditCard;
    public handle(newNumber: string) {
        if(this.validCreditCard(newNumber)) {
    this.creditCardNo = newNumber;
    } else {
        throw 'Invalid credit card number.';
    }
    }
}

// Queries:
// In the case of a user profile UI, we might create a specific query class to fetch and display data:

class UserProfileView {
    public id: number;
    public firstName: string;
    public lastName: string;
    public creditCardNo: string;
}

class UserProfileQuery {
    public fetch;
    public async handle(forUserId: number): Promise<UserProfileView> {
        const view: UserProfileView = await this.fetch(forUserId);
        return view;
    }
}
    
    