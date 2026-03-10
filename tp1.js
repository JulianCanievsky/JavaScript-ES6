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
    let texto = prompt("Escribi un texto");
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
    let a = Number(prompt("Primer numero"));
    let b = Number(prompt("Segundo numero"));
    let c = Number(prompt("Tercer numero"));

    let resultado = maximo(a, b, c);
    alert(resultado);
}

function validarPassword(password) {
    let tieneNumero = false;

    for (let i = 0; i < password.length; i++) {
        if (password[i] >= "0" && password[i] <= "9") {
            tieneNumero = true;
        }
    }

    if (password.length >= 8 && tieneNumero) {
        return true;
    } else {
        return false;
    }
}

function probarPassword() {
    let password = prompt("Escribi una contraseña");
    let resultado = validarPassword(password);
    alert(resultado);
}