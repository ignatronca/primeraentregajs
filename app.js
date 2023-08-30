function ingresarFecha() {
    let dia = prompt("Ingrese el día de la fecha a comparar con la actual");
    let intDia = parseInt(dia);
    while (intDia < 1 || intDia > 31) {
        alert("Ingrese un número de día correcto (de 1 a 31)");
        intDia = prompt("Ingrese el día de la fecha a comparar con la actual");
        intDia = parseInt(intDia);
    }

    let mes = prompt("Ingrese el mes de la fecha a comparar con la actual");
    let intMes = parseInt(mes) - 1;
    while (intMes < 0 || intMes > 11) {
        alert("Ingrese un mes correcto (de 1 a 12)");
        mes = prompt("Ingrese el mes de la fecha a comparar con la actual");
        intMes = parseInt(mes) - 1;
    }

    let año = prompt("Ingrese el año completo de la fecha a comparar con la actual");
    let intAño = parseInt(año);
    while (intAño <= 1800 || intAño >= 2700) {
        alert("No podemos calcular fechas usando esos años");
        intAño = prompt("Ingrese el año completo de la fecha a comparar con la actual");
    }

    return new Date(intAño, intMes, intDia);
}

function calcularDiferenciaFechas() {
    const primeraFecha = ingresarFecha();
    const segundaFecha = ingresarFecha();

    const diferenciaEnDias = Math.floor((primeraFecha - segundaFecha) / (1000 * 60 * 60 * 24));
    const diferenciaAbsoluta = Math.abs(diferenciaEnDias);

    alert("La cantidad de días entre las fechas es igual a " + diferenciaAbsoluta);
}

function compararFechas() {
    const opcion = prompt("Ingrese la opción:\n1. Salir\n2. Obtener fecha actual\n3. Comparar dos fechas\n4. Comparar dos fechas separadas");

    if (opcion === "1") {
        alert("Hasta luego. A tu disposición");
    } else if (opcion === "2") {
        resultado = new Date().toLocaleDateString();
        alert("La fecha actual es " + resultado);
    } else if (opcion === "3") {
        calcularDiferenciaFechas();
    } else if (opcion === "4") {
        const resultado = calcularDiferenciaFechas();
        alert("La cantidad de días entre uno y otro es igual a " + resultado);
    } else {
        alert("Ha ingresado una opción incorrecta, por lo que su consulta no pudo ser procesada");
        compararFechas();
    }
}

function calculadora() {
    let opcion = prompt("Bienvenido al menú de cálculos de Cotizaciones:\nSeleccione una de las siguientes opciones usando el número de la opción correspondiente:\n" +
        "1: Salir del menú\n" +
        "2: Ver fecha actual\n" +
        "3: Calcular días corridos entre la fecha actual y otra fecha\n" +
        "4: Calcular días de corridos entre dos fechas diferentes");

    if (opcion === "1") {
        alert("Hasta luego. A tu disposición");
    } else if (opcion === "2") {
        resultado = new Date().toLocaleDateString();
        alert("La fecha actual es " + resultado);
    } else if (opcion === "3") {
        calcularDiferenciaFechas();
    } else if (opcion === "4") {
        calcularDiferenciaFechas();
    } else {
        alert("Ha ingresado una opción incorrecta, por lo que su consulta no pudo ser procesada");
        calculadora();
    }
}

calculadora();



