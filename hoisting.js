// Hoisting é um conceito do JS que permite que variáveis e funções
// sejam usadas antes de serem declaradas. Isto acontece pq o JS faz uma varredura
// no código antes de o executar, movendo as declarações de variáveis e funções
// para o topo do escopo

// exemplo de hoisting 1
x = 5; //atribuição
console.log(x); //exibição
var x; // declaração

// no exemplo acima, x é usado antes de ser declarado, mas ainda funciona por causa do hoisting

// exemplo de hoisting 2
var x; // declaração
x = 5; // atribuição
console.log(x); // exibição

// neste exemplo, usamos a forma habitual de declarar variáveis;
// no entando, o resultado éo mesmo que no exemplo anterior.