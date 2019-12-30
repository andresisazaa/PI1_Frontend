export class Candidate {
    name: string;
    email: string;
    phoneNumber: number;
    aspiratedJob: string;
    attractionChannel: string;

    constructor(name: string, email: string, phoneNumber: number, aspiratedJob: string, attractionChannel: string) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.aspiratedJob = aspiratedJob;
        this.attractionChannel = attractionChannel;
    }
}