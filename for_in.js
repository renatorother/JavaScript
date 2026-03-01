const human = {
    name: 'Renato',
    age: 31,
    weight: 115.5,
}

for (let property in human) {
    console.log(property)
}

for (let property in human) {
    console.log(human[property])
}

for (let property in human) {
    console.log(property + ': ' + human[property])
}