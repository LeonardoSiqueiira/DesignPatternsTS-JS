/* eslint-disable prettier/prettier */
function Person (name, sobrenome, age) {
    this.name = name
    this.sobrenome = sobrenome
    this.age = age
    
}

const personPrototype = {
    name: 'Luiz',
    sobrenome: 'Siqueira',
    age: 30,
    
  
    fullName() {
      return `${this.name} ${this.sobrenome}`;
    },
  };

  Person.prototype = Object.create(personPrototype)


  const person1 = new Person ('Leonardo' , 'Siqueira', 24)
  console.log(person1.fullName())