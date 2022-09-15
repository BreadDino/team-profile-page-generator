class Engineer extends Employee{
    constructor(gitHubName){
        super(name, id, email)
        this.gitHubName = gitHubName;
    }

    getGitHub(){

    }

    getRole(){
        return "Engineer"
    }
}