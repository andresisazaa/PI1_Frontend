export class Candidate {
    id: number;
    name: string;
    email: string;
    phoneNumber: number;
    aspiratedJob: string;
    attractionChannel: string;

    constructor(id: number, name: string, email: string, phoneNumber: number, aspiratedJob: string, attractionChannel: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.aspiratedJob = aspiratedJob;
        this.attractionChannel = attractionChannel;
    }
}