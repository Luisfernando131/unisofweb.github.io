function opera() {
    //VARIABLE
    var x;
    x = prompt("Define x");
    var z;
    z = prompt("Define z");
    sum = parseInt(x) + parseInt(z);
    res = parseInt(x) - parseInt(z);
    mul = parseInt(x) * parseInt(z);
    div = parseInt(x) / parseInt(z);
    alert("\nEl resultado de la suma es: " + sum + "\nEl resultado de la resta es: " + res +
        "\nEl resultado de la multiplicacion es: " + mul + "\nEl resultado de la division es: " + div);
}
function irifelse() {
    var b;
    b = prompt("Define b");
    //SI b ES MAYOR O IGUAL A 10
    if (b >= 10) {
        alert("ENTRO POR EL IF");
    }
    else {
        alert("ENTRO POR EL ELSE");
    }
}
function irelseif() {
    var c;
    c = prompt("Define c");
    //SI c ES MAYOR O IGUAL A 10
    if (c == 10) {
        alert("ENTRO POR EL IF");
    }
    else if (c >= 20) {
        alert("ENTRO AL ELSE IF")
    }
    else {
        alert("ENTRO POR EL ELSE");
    }
}
function irswitch() {
    var v = parseInt(prompt("Define v"));
    switch (v) {
        case 1:
            alert("Has seleccionado la desicion 1");
            break;
        case 2:
            alert("Has seleccionado la desicion 2");
            break;
        case 3:
            alert("Has seleccionado la desicion 3");
            break;
        default:
            alert("Has seleccionado ninguna opcion valida");
            break;
    }
}
function irfor() {
    var b = parseInt(prompt("Define b"));
    for (i = 1; i <= b; i++) {
        alert("Numero :" + i);
    }
}
function irwhile() {
    var n = parseInt(prompt("Define n"));
    var x = parseInt(prompt("Define x"));
    var z = parseInt(prompt("Define z"));
    while (n <= z) {
        x = x + n;
        alert("" + x);
    }
}
function irarrays() {
    var codigo = ["html", "css", "javascript"];
    alert("El arreglo tiene " + codigo.length +
        " espacios" + " y el primer elmento de este arreglo en la posicion 0 es "
        + codigo[0]);
}
function irfunction() {
    var x = parseInt(prompt("Define x"));
    var z = parseInt(prompt("Define z"));
    result = parseInt(x) + parseInt(z);
    alert("Es te es el resultado de la funcion: " + result);
}
function iralert() {
    alert("HOLA SOY UNA ALERTA");
}
function irconfirm() {
    var txt;
    var x = confirm("ESTO ES UNA CONFIRMACION");
    if (x == true) {
        txt = "FELICIDADES POR HABER PRESIONADO ESTE BOTON";
        alert(txt);
    } else {
        txt = ":( POR QUE NO PRESIONASTE CONFIRMAR";
        alert(txt);
    }
}
function irpromt() {


    var z = prompt("Escribe la informacion aca");
    var x = prompt("Escribe la informacion aca");
    alert("Esto es lo primero: " + z + "\nEsto es lo segundo: " + x);


}