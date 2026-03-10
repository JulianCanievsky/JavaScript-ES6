function cambiarNombre(nombre) {
    return nombre[0].toUpperCase() + nombre.slice(1).toLowerCase();
}

function mostrarNombre() {
    let nombre = prompt("Escribi un nombre:");
    let resultado = cambiarNombre(nombre);
    alert(resultado);
}

function contarLetras(texto) {
    let sinEspacios = texto.replaceAll(" ", "");
    return sinEspacios.length;
}

function probarContar() {
    let texto = prompt("Escribí un texto");
    let resultado = contarLetras(texto);
    alert(resultado);
}

function maximo(a, b, c) {
    let mayor = a;

    if (b > mayor) {
        mayor = b;
    }

    if (c > mayor) {
        mayor = c;
    }

    return mayor;
}

function probarMaximo() {
    let a = Number(prompt("Primer número"));
    let b = Number(prompt("Segundo número"));
    let c = Number(prompt("Tercer número"));

    let resultado = maximo(a, b, c);
    alert(resultado);
}