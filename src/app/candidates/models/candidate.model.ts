export class Candidate {
    firstContactDate: Date;
    attractionChannel: string;
    aspiratedJob: string;
    availability: string;
    name: string;
    address: Object;
    email: string;
    phoneNumber: string;
    salaryAspiration?: number;
    currentSalary?: number;

    constructor(firstContactDate: Date, attractionChannel: string, aspiratedJob: string,
        availability: string, name: string, address: Object, email: string, phoneNumber: string,
        salaryAspiration?: number, currentSalary?: number) {
            this.firstContactDate = firstContactDate;
            this.attractionChannel = attractionChannel;
            this.aspiratedJob = aspiratedJob;
            this.availability = availability;
            this.name = name;
            this.address = address;
            this.email = email;
            this.phoneNumber = phoneNumber;
            this.salaryAspiration = salaryAspiration;
            this.currentSalary = currentSalary
    }
}