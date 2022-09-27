
/* SECCIÓN DEL NOMBRE DE AFILIADO PERMITIR SOLO TEXTO, NO NÚMEROS */
let nombreAfiliado = prompt("Ingresar Nombre y Apellido del Afiliado");

    while( !isNaN(nombreAfiliado)){
        nombreAfiliado = prompt("Ingresar Nombre y Apellido del Afiliado");
    }

/* SECCIÓN EDAD DEL AFILIADO BONIFICACIÓN SEGÚN EDAD */

let comisionEdad = 0;
let edad = 2022 - parseInt(prompt("Ingrese Año de Nacimiento"));
    while( isNaN(edad)){
        edad = 2022 - parseInt(prompt("Ingrese Año de Nacimiento"));
    }

    switch(true){
        case (edad >=18 && edad <=20): 
            comisionEdad =600;
        break;
        case (edad >=21 && edad <=25): 
            comisionEdad =500;
        break;
        case (edad >=26 && edad <=30):
            comisionEdad =200;
        break;
        case (edad >30 && edad<40):
            comisionEdad =0;
        default: 
            console.log("La edad no es válida, el afiliado debe tener más de 18 y menos de 40 años");
    }

/* SECCIÓN DE COMISIÓN POR FRANJA DE INGRESOS DEL AFILIADO  */

let comisionSueldo = 0;
let sueldo = parseInt(prompt("Ingrese el Sueldo Bruto percibido por el afiliado"));
    while(isNaN(sueldo)){
    sueldo = parseInt(prompt("Ingrese el Sueldo Bruto percibido por el afiliado"));
    }

    switch(true){
        case (sueldo >=1 && sueldo <=11547):
            comisionSueldo = 268;
        break;
        case (sueldo >=11548 && sueldo <=21544):
            comisionSueldo = 538;
        break;
        case (sueldo >=21545 && sueldo <=33316):
            comisionSueldo = 1616;
        break;
        case (sueldo >=33317 && sueldo <=49995):
            comisionSueldo = 2693;
        case (sueldo >49996):
            comisionSueldo = 3770;
        default: console.log("Ingrese un sueldo mayor a 0");
    }

/* SECCIÓN DE COMISIÓN POR ESTADO DE CUENTA POR MAIL, AGREGAR A LA VARIABLE 120 */

let comisionMail = 0;
let email= prompt("El afiliado tiene email?, Ingrese 'SI o NO' ").toLocaleUpperCase();

    switch(true){
        case (email =="SI"): 
            comisionMail = 120;
        break;
        case (email =="NO"):
            comisionMail = 0;
        break;
        default: alert("No ha ingresado una opción");
    }

let comisionCI = 0;
let ci = prompt("El afiliado tiene Cédula de Identidad?, Ingrese 'SI o NO' ").toLocaleUpperCase();

    switch(true){
        case (ci =="SI"): 
            comisionCI = 180;
        break;
        case (ci =="NO"):
            comisionCI = 0;
        break;
        default: alert("No ha ingresado una opción");
    }

    //CONFIGURACIÓN DE LOS RESULTADOS

//DATOS DEL AFILIADO
console.log("***Los datos del Afiliado ingresados son***: ");
console.log("Nombre y apellido: " + nombreAfiliado);
console.log("Edad: " + edad);
console.log("Salario bruto: " + sueldo);
console.log("Solicita Estado de cuenta por mail: " + email);
console.log("Presenta CI: " + ci);


console.log("****Por el Afiliado "+ nombreAfiliado +" se reciben las siguientes comisiones***:");
    console.log("Comisión por edad: "+ comisionEdad);
    console.log("Comisión por Salario: "+ comisionSueldo);
    console.log("Comisión por email: "+ comisionMail);
    console.log("Comisión C.I.: "+ comisionCI);
let sumTotal = parseInt(comisionEdad + comisionSueldo + comisionMail + comisionCI)
    console.log("Total de comisiones: "+ sumTotal);

