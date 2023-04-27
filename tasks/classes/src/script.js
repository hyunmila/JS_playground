class Task {
    // Your implementation here
    constructor(name){
        this.name = name;
    }
}


class Guest {
    // Your implementation here
    constructor(tasks){
        this.tasks=tasks;
    }
    getTask(id){
        return this.tasks[id];
    }
    createTask(newTask){
        throw "method 'createTask' is not defined";
    }
    changeType(id){
        throw "method 'changeType' is not defined";
    }
}

class User extends Guest{
    // Your implementation here
    constructor(tasks){
        super(tasks);
    }
    createTask(newTask){
        this.tasks.push(newTask);
    }
}

class Admin {
    // Your implementation here
    constructor(everyone){
        this.everyone=everyone;
    }
    
    getArray(){
        // return this.everyone.map((person)=>person.constructor.name);
        return this.everyone;
    }
    changeType(id){
        let person = this.everyone[id];
        let className = person.constructor.name;
        if(className==="User"){
            this.everyone[id] = new Guest(person.tasks);
        }
        else{
            this.everyone[id] = new User(person.tasks);
        }
        return this.everyone;
    }
}

module.exports.Task = Task;
module.exports.Guest = Guest;
module.exports.User = User;
module.exports.Admin = Admin;
