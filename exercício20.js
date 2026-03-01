/* for (let i = 0; i <= 10; i++) {
    console.log(i);
    if (i === 5) break;    
}
 */

let names = ['John', 'Paul', 'Ringo', 'George']

/* for (let i = 0; i < names.length; i++) {

    if (names[i] == 'Paul') continue;    
    console.log(names[i]); 
  
}
 */

for (let name of names){
    if (name == 'Paul') continue;
    console.log(name);
}