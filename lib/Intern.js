class Intern extends Employee{
    constructor(school){
        super(name, id, email)
        this.school = school;
    }

    getSchool(){

    }

    getRole(){
        return "Intern"
    }
}


module.exports = Intern;