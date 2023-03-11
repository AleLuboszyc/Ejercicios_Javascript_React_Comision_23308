let peliculas = Math.floor(Math.random() *4) + 1;

switch(peliculas) {
case 1:
    console.log("Te recomiendo ver 'Los Juegos del Hambre' estuvo muy buena.");
    break;
case 2:
    console.log("Te recomiendo ver 'Batman Inicia' una de las mejores peliculas del caballero de la noche que vi");
    break;
case 3:
    console.log("Te recomiendo ver 'Stars Wars: Episodio VII - El despertar de la fuerza' me dejo sin palabras, espectacular");
    break;
default:
    console.log("Lo siento, no tengo más recomendaciones por ahora.");
    break;
}

// reemplaza `null` por la respuesta


const nuevaString = "Hola Amigos";

console.log(nuevaString);


const nuevoNum = 40;

console.log(nuevoNum);


const nuevoBool1 = true;

console.log(nuevoBool1);

const nuevoBool2 = false;

console.log(nuevoBool2);


const nuevaResta = 10 - 5 === 5;

console.log(nuevaResta);


const nuevaMultiplicacion = 10 * 4 === 40 ;

console.log(nuevaMultiplicacion)


const nuevoModulo = 21 % 5 === 1;

console.log(nuevoModulo)



function devolverString(str) {  
    return str;
}

console.log(devolverString("Hola compañeros y compañeras de la comisión 23308"));


function suma(x, y) {
    return x + y;
}

console.log(suma(10, 5));
  
    

function resta(x, y) {
    return x - y;
}

console.log(resta(10, 5));

function multiplica(x, y) {
    return x * y;
}

console.log(multiplica(10, 5));

function divide(x, y) {
    return x / y;
}

console.log(divide(10, 5));

function sonIguales(x, y) {
    if (x === y) {
        return true;
    } else {
        return false;
    }
}

console.log(sonIguales(5, 5));
console.log(sonIguales(5, 4));


function tienenMismaLongitud(str1, str2) {
    if (str1.length === str2.length) {
        return true;
    } else {
        return false;
    }
}

console.log(tienenMismaLongitud('Lineage2', 'League of Legend'));
console.log(tienenMismaLongitud('Lineage2', 'Lineage2'));


function menosQueNoventa(num) {
    if (num < 90) {
        return true;
    } else {
        return false;
    }
}

console.log(menosQueNoventa(87));
console.log(menosQueNoventa(90));



function mayorQueCincuenta(num) {
    if (num > 50) {
        return true;
    } else {
        return false;
    }
}
  
console.log(mayorQueCincuenta(55))
console.log(mayorQueCincuenta(50))

function obtenerResto(x, y) {
    return x % y;
}

console.log(obtenerResto(10, 5))

function esPar(num) {
    if (num % 2 === 0) {  
        return true;
    } else {
        return false;
    }
}

console.log(esPar(4));
console.log(esPar(3));
    
   

function esImpar(num) {
    if (num % 2 !== 0) {
        return true;
      } else {
        return false;
      }
}

console.log(esImpar(3));
console.log(esImpar(2));



function elevarAlCuadrado(num) {
    return num ** 2;
}

console.log(elevarAlCuadrado(3));


function elevarAlCubo(num) {
    return num ** 3;
 }

console.log(elevarAlCubo(4));



 function elevar(num, exponent) {
    return num ** exponent;
}

console.log(elevar(10, 2));

function redondearNumero(num) {
    return Math.round(num);
}

console.log(redondearNumero(115.20));
console.log(redondearNumero(115.70));


function redondearHaciaArriba(num) {
    return Math.ceil(num);
}

console.log(redondearHaciaArriba(115.20));

function numeroRandom() {
    return Math.random();
}

console.log(numeroRandom());
console.log(numeroRandom());
console.log(numeroRandom());


function esPositivo(numero) {
    if (numero > 0) {
      return "Es positivo";
    } else if (numero < 0) {
      return "Es negativo";
    } else {
      return false;
    }
}

console.log(esPositivo(10));
console.log(esPositivo(-10));


function agregarSimboloExclamacion(str) {
    const strConExclamacion = str + "!";
    return strConExclamacion;
}

console.log(agregarSimboloExclamacion('Hola a todos'));



function combinarNombres(nombre, apellido) {
    const nombreCompleto = nombre + " " + apellido;
    return nombreCompleto;
}

console.log(combinarNombres('Martin', 'Luboszyc'));


function obtenerSaludo(nombre) {
    const saludo = "Hola " + nombre + "!";
    return saludo;
}

console.log(obtenerSaludo('Martin'));


function obtenerAreaRectangulo(alto, ancho) {
    const area = alto * ancho;
    return area;
}

console.log(obtenerAreaRectangulo(20, 40));

function retornarPerimetro(lado) {
    const perimetro = lado * 4;
    return perimetro;
}

console.log(retornarPerimetro(5));



function areaDelTriangulo(base, altura) {
    const area = (base * altura) / 2;
    return area;
}

console.log(areaDelTriangulo(10, 5));


function deEuroAdolar(euro){
    const tipoDeCambio = 1.20;
    const dolares = euro * tipoDeCambio;
    return dolares;
}

console.log(deEuroAdolar(100));



function esVocal(){
let letra = prompt("Ingrese una letra");

if (typeof letra === "string" && letra.length === 1) {  //Utiliza el operador typeof para verificar si el valor de letra es de tipo string y con lenght se verifica que su valor sea 1.
    if ("aeiou".indexOf(letra.toLowerCase()) !== -1) { //Utiliza el valor indexOf par buscar dentro de la cadena de texto aeiou y buscara en la mnisma su posición y devolvera una posición mayor o igual a 0, sino se cuentra en la cadena utilizara el -1.
        console.log("Es vocal");
    } else {
        console.log("No es vocal");
    } 
    } else {
    console.log("Dato incorrecto");
    }
}

esVocal();
