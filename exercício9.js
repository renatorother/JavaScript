let firstNames = {
    name1: 'Ana',
    name2: 'Carl',
    name3: 'John',    
};

let lastNames = 'Smith';


let fullNames = [
    firstNames.name1 + ' ' + lastNames,
    firstNames.name2 + ' ' + lastNames,
    firstNames.name3 + ' ' + lastNames,
];

console.table(fullNames);

