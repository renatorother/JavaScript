const person = {
    name: 'Renato',
    age: '32',
    show(){
        return 'Meu nome é ${this.name} e tenho ${this.age} anos!'
    }
}

console.log(person.show());