const Employee = require('./Employee');

class Engineer extends Employee
{
    constructor(name, id, email, github){
        super(name, id, email);
        console.log(this.email);
        console.log(this.id);
        console.log(this.name);

        this.github= github;
    }
    getGithub(){
        console.log(this.github);
        return this.github;
    }
    getRole(){
        return "Engineer";
    }
}


module.exports = Engineer;