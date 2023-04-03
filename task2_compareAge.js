// Create a method in the Person class which returns how another person's age compares. Given the
// instances p1, p2 and p3, which will be initialised with the attributes name and age, return a sentence in the
// following format:
// {other person name} is {older than / younger than / the same age as} me.

function Person(name, age) {
        this.name = name
        this.age = age 
}

Person.prototype.compareAge = function(object) {
    if(this.age < object.age) {
        return `${this.name} is younger than me. `
    }
    else if(this.age > object.age) {
        return `${this.name} is older than me. `
    }
        return `${this.name} is the same age as me.`
}

const p1 = new Person("Samuel", 24) 
const p2 = new Person("Joel", 36) 
const p3 = new Person("Lily", 24) 

// console.log(p3.compareAge(p1)) 
// console.log(p1.compareAge(p2))  
// console.log(p2.compareAge(p1)) 
