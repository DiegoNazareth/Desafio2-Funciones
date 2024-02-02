//1 Crea una función que calcule el  de una persona a partir de su altura en metros y peso en kilogramos, 
//que se recibirán como parámetros.

//declaracion de variables
let peso=121;
let altura=1.90;

//Declarando la funcion
function calculandoIMC(peso,altura){
    return console.log(`El índice de masa corporal (IMC) de la persona es: ${(peso/Math.pow(altura,2)).toFixed(1)}`);
}
//LLamando la funcion
calculandoIMC(peso, altura);

//2Crea una función que calcule el valor del factorial de un número pasado como parámetro.
//declaracion de variable
let numero=6;

//declaracion de funcion
function factorialDeNumero(numero){
    resultado=numero;
    while(numero>=1){
        numero=numero-1;
        if (numero==0){
             break;
        }else{
            resultado=numero*resultado;
        }
        
    }
    console.log(resultado);
}

//llamado de la funcion
factorialDeNumero(numero);

//3Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,
//si deseas puedes hacerlo con el valor del dólar en tu país).
// Para esto, considera la cotización del dólar igual a R$4,80.

//Declaracion de variables
let valorEnDollar=15;

function conversionDolarARealBrasileno(valorEnDollar){
    valorEnRealBrasileno=valorEnDollar*4.80;
    return console.log(`El valor de $${valorEnDollar} dolares son:  $${valorEnRealBrasileno} reales brasileños`);
}

conversionDolarARealBrasileno(valorEnDollar);

//4 Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, 
//utilizando la altura y la anchura que se proporcionarán como parámetros.

//Declarando las variables
let altura1=2;
let anchura=4;

//Declarando la funcion 
function areaYPerimetroDeSala(altura1, anchura){
    area=altura1*anchura;
    perimetro=(altura1*2)+(anchura*2);
    alert(`De la Sala Rectangular de medidas ${altura1} metros de altura y ${anchura} metros de anchura, el area es: ${area}m2 y de perimetro son ${perimetro} metros totales `);
}

//LLamando la funcion
areaYPerimetroDeSala(altura1,anchura);

//Crea una función que muestre en pantalla el área y el perímetro de una sala circular, 
//utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

//Declarando variables
let radio=3

//Declarando funcion
function areaYPerimetroDeSalaCircular(radio){
    area2=3.14*Math.pow(radio, 2);
    perimetro2=2*3.14*radio;
    alert(`De la Sala Circular de medida ${radio} metros de radio, el area es: ${area2} m2 y de perimetro son ${perimetro2} metros totales `)

}
//Llamando a la funcion
areaYPerimetroDeSalaCircular(radio);

//Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

//Declaracion variable
numero=9;

//Declaracion de funcion
function tablaDeMultiplicar(numero){
    let indice=0;
    while(indice!=11){
        resultado=numero*indice;
        console.log(`${numero} x ${indice} = ${resultado}`);
        indice++;
    }
}

//Llamado de funcion
tablaDeMultiplicar(numero);

