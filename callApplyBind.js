let teacher = {
    firstName : "rampal",
    lastName : "rajput",
    getEmail : function (){
        return ` ${this.firstname }${this.lastName}@test.com`
    }
}

let student ={
    firstname : "ram",
    lastName : "chouhan",
    getEmail : function (){
        return ` ${this.firstname }${this.lastName}.@test.com`
    }
}

function chooseSubject(sub1, sub2){
    return  `${sub1} and ${sub2}`
}

console.log(chooseSubject.call(student, ["maths","dsfas"]));


