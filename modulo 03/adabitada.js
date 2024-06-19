function calculadora(numero1, numero2, operador){
    switch (operador){
        case '+':
        console.log(numero1 + numero2);
        break;
         case '-':
        console.log(numero1 - numero2);
        break;
        case '*':
        console.log(numero1 * numero2);
        break;
        default:
        console.log(numero1 / numero2);       
    }}
    calculadora(9, 10,'+')
    calculadora(9, 10,'-')
    calculadora(9, 10,'*')
    calculadora(9, 10,'/')