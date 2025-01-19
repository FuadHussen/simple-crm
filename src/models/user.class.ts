import { Timestamp } from 'firebase/firestore';

export class User {
    id?: string;
    firstName: string;
    lastName: string;
    birthDate: Timestamp;
    street: string;
    postalCode: number;
    city: string;
    email: string;
    
    constructor(obj?: any) {
        this.id = obj ? obj.id : '';
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.birthDate = obj ? obj.birthDate : null;
        this.street = obj ? obj.street : '';
        this.postalCode = obj ? obj.postalCode : '';
        this.city = obj ? obj.city : '';
        this.email = obj ? obj.email : '';
    }

    public toJson() {
        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            birthDate: this.birthDate,
            street: this.street,
            postalCode: this.postalCode,
            city: this.city,
            email: this.email
        }
    }
}