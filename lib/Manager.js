const Employee = require('./Employee').default;

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber= officeNumber;
    }
    getName() {
        console.log(this.name);
    }

    getId() {
        console.log(this.id);
    }

    getEmail() {
        console.log(this.email);
    }

    getOfficeNumber() {
        return 100;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;