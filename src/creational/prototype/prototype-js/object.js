/* eslint-disable prettier/prettier */
const personPrototype = {
  name: 'Luiz',
  age: 30,
  sobrenome: 'Siqueira',

  fullName() {
    return `${this.name} ${this.sobrenome}`;
  },
};


const anotherperson = Object.create(personPrototype)

console.log(anotherperson.fullName())