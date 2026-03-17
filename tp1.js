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
    let password = prompt("Escribi una contraseña(debe tener min 8 caracteres y un numero)");
    let resultado = validarPassword(password);
    alert(resultado);
}
function sumarArray(numeros) {
    let suma = 0;

    for (let i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i];
    }

    return suma;
}

function probarSuma() {
    let entrada = prompt("Ingresá números separados por coma (ej: 3,5,10)");
    let numeros = entrada.split(",").map(Number);

    let resultado = sumarArray(numeros);
    alert(resultado);
}
function mayorNumero(numeros) {
    let mayor = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
    }

    return mayor;
}

function probarMayor() {
    let entrada = prompt("Ingresá números separados por coma (ej: 4,7,1,20,3)");
    let numeros = entrada.split(",").map(Number);

    let resultado = mayorNumero(numeros);
    alert(resultado);
}

function obtenerPares(numeros) {
    let pares = [];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 == 0) {
            pares.push(numeros[i]);
        }
    }

    return pares;
}

function probarPares() {
    let entrada = prompt("Ingresá números separados por coma (ej: 1,2,3,4,5,6)");
    let numeros = entrada.split(",").map(Number);

    let resultado = obtenerPares(numeros);
    alert(resultado);
}
// 8
const usuario = {
    nombre: "Ana",
    edad: 20,
    activo: false
};


function descripcionUsuario(usuario) {
    return usuario.nombre + " tiene " + usuario.edad + " años";
}

function probarDescripcion() {
    alert(descripcionUsuario(usuario));
}
// 9


function activarUsuario(usuario) {
    usuario.activo = true;
}

function probarActivar() {
    activarUsuario(usuario);
    alert("Usuario activo: " + usuario.activo);
}
//Ejercicio 10
function precioTotal(productos) {
    let total = 0;

    for (let i = 0; i < productos.length; i++) {
        total = total + productos[i].precio;
    }

    return total;
}

function probarTotal() {
    let productos = [];

    let cantidad = Number(prompt("¿Cuántos productos querés ingresar?"));

    for (let i = 0; i < cantidad; i++) {
        let nombre = prompt("Nombre del producto");
        let precio = Number(prompt("Precio del producto"));

        productos.push({nombre: nombre, precio: precio});
    }

    let resultado = precioTotal(productos);
    alert("Precio total: " + resultado);
}

// EJERCICIO 11 — MAP


const usuarios = [
    {nombre:"Ana", edad:17},
    {nombre:"Juan", edad:25},
    {nombre:"Pedro", edad:30}
];

function ejercicio11() {
    const nombres = usuarios.map(usuario => usuario.nombre);
    alert(nombres);
}




// EJERCICIO 12


function ejercicio12() {
    const mayores = usuarios.filter(usuario => usuario.edad >= 18);
    alert(JSON.stringify(mayores));
}




// EJERCICIO 13 

function ejercicio13() {
    const sumaEdades = usuarios.reduce((total, usuario) => total + usuario.edad, 0);
    alert(sumaEdades);
}
// EJERCICIO 14 — DESTRUCTURING

const producto = {
    nombre: "Notebook",
    precio: 1000
};

function ejercicio14() {

    const { nombre, precio } = producto;

    alert(nombre + " - $" + precio);
}


// EJERCICIO 15 — SPREAD

function ejercicio15() {

    const nuevoProducto = {
        ...producto,
        stock: 5
    };

    alert(JSON.stringify(nuevoProducto));
}



// EJERCICIO 16 — BUSCAR PRODUCTO


function buscarProducto(productos, nombre) {
    return productos.find(p => p.nombre === nombre);
}

function ejercicio16() {

    let productos = [];
    let cantidad = Number(prompt("¿Cuántos productos?"));

    for (let i = 0; i < cantidad; i++) {
        let nombre = prompt("Nombre del producto");
        let precio = Number(prompt("Precio"));

        productos.push({nombre: nombre, precio: precio});
    }

    let nombreBuscado = prompt("¿Qué producto querés buscar?");
    let resultado = buscarProducto(productos, nombreBuscado);

    alert(JSON.stringify(resultado));
}



// EJERCICIO 17 — PRODUCTOS CAROS



function productosCaros(productos) {
    return productos.filter(p => p.precio > 50);
}

function ejercicio17() {

    let productos = [];
    let cantidad = Number(prompt("¿Cuántos productos?"));

    for (let i = 0; i < cantidad; i++) {
        let nombre = prompt("Nombre del producto");
        let precio = Number(prompt("Precio"));

        productos.push({nombre: nombre, precio: precio});
    }

    let resultado = productosCaros(productos);

    alert(JSON.stringify(resultado));
}




// EJERCICIO 18 — PROMEDIO


function promedio(numeros) {

    let suma = 0;

    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }

    return suma / numeros.length;
}

function ejercicio18() {

    let entrada = prompt("Ingresá números separados por coma (ej: 10,8,6,9)");
    let numeros = entrada.split(",").map(Number);

    let resultado = promedio(numeros);

    alert("Promedio: " + resultado);
}

// ARRAY DADO (NO MODIFICAR)

const usuarios2 = [
    {id:1, nombre:"Ana", edad:20},
    {id:2, nombre:"Juan", edad:15},
    {id:3, nombre:"Pedro", edad:30}
];


// 1. OBTENER TODOS LOS USUARIOS

function obtenerUsuarios() {
    return usuarios2;
}

function probarObtenerUsuarios() {
    alert(JSON.stringify(obtenerUsuarios()));
}



// 2. OBTENER USUARIO POR ID

function obtenerUsuarioPorId(id) {
    return usuarios2.find(u => u.id === id);
}

function probarPorId() {
    let id = Number(prompt("Ingresá el ID"));
    let resultado = obtenerUsuarioPorId(id);
    alert(JSON.stringify(resultado));
}



// 3. OBTENER MAYORES DE EDAD

function obtenerMayores() {
    return usuarios2.filter(u => u.edad >= 18);
}

function probarMayores() {
    alert(JSON.stringify(obtenerMayores()));
}


// 4. CREAR USUARIO

function crearUsuario(nombre, edad) {

    let nuevoId = usuarios2.length + 1;

    let nuevoUsuario = {
        id: nuevoId,
        nombre: nombre,
        edad: edad
    };

    usuarios2.push(nuevoUsuario);
}

function probarCrear() {
    let nombre = prompt("Nombre");
    let edad = Number(prompt("Edad"));

    crearUsuario(nombre, edad);

    alert("Usuario creado:\n" + JSON.stringify(usuarios2));
}