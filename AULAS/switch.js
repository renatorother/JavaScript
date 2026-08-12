let day = 0;

switch (day) { //IF
    case 1: 
        console.log('DOMINGO')
        break; // PULA PARA A PRÓXIMA A PRÓXIMA CONDIÇÃO SE O CASO 1 NÃO FOR VERDADEIRO, E ASSIM SUCESSIVAMENTE
    case 2: 
    case 3: 
    case 4: // PODE INCLUIR MAIS DE UMA CONDIÇÃO POR VEZ
        console.log('SEGUNDA')
        break;
    case 10: 
        console.log('TERÇA')
        break;
    default: // A ÚLTIMA CONDIÇÃO CASO NENHUMA DAS INSTRUÇÕES ANTERIORES FOREM VERDADEIRAS
        console.log('DATA INVÁLIDA')


    
}