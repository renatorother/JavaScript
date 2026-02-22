let temperature = 20


//instrução if simples

if (temperature == 20) {
    console.log('Temperatura atual: 20 graus celsius!');
}


//instruções if e else

if (temperature < 0) {
    console.log('Está abaixo de zero!');
} else {
    console.log('Está acima de zero!');
}


//instruções if, else e else if

if (temperature <= 0) {
    console.log('Está muito frio!')
} else if ( temperature <= 10) {
    console.log('Está frio!')
} else if (temperature <= 20) {
    console.log('Está ameno!')
} else if (temperature <= 30) {
    console.log('Está quente!')
} else {
    console.log('Está muito quente!')
}





