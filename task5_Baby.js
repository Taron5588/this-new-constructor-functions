// Write a Baby constructor subclassing Person.
// Besides name and age, Baby takes a third argument to initialize favoriteToy.
// Besides the methods on Person.prototype, babies have the ability to .play():
// Should return a string "Playing with x", x being the favorite toy.

function Person(name, age, favoriteToy) {
    this.name = name
    this.age = age
    this.favoriteToy = favoriteToy
}

Person.prototype.play = function() {
    return `Playing with ${this.favoriteToy}`
}

const Baby1 = new Person("Ani", 5, "piano")

console.log(Baby1)
console.log(Baby1.play())
