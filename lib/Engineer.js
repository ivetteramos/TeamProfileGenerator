const Employee = require('./Employee');

class Engineer extends Employee
{
    constructor(name, id, email, gitHub){
        super(name, id, email);
        console.log(this.email);
        console.log(this.id);
        console.log(this.name);

        this.github= gitHub;
    }
    getgitHub(){
        console.log(this.gitHub);
        return this.gitHub;
    }
    getRole(){
        return "Engineer";
    }
}


module.exports = Engineer;