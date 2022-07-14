class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        console.log(this.name);
        return this.name;
    }

    getId() {
        console.log(this.id);
        return this.id;
    }

    getEmail() {
        console.log(this.email);
        return this.email;
    }

    getRole() {
        return "Employee";
    }

    printInfo() {
        console.log(`name: ${this.name}`);
        console.log(`id: ${this.id}`);
        console.log(`email: ${this.email}`);
    }
}

const employee = new Employee(" ", 25);

Employee.printInfo();

module.exports = Employee;
