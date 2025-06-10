let boton = document.getElementById("button");
boton.onclick = function() {
    let juan = 500 
    let pedro = 300
    let maria = 200
    let tomas = 700
    let pancho = 3000

    let jugador = prompt("Ingrese su nombre: ");
    let saldo = 0;
    if (jugador == "Juan") {
        saldo = juan;
        alert("Bienvenido Juan, tienes " + saldo + " pesos");
    }
    else if( jugador == "Pedro") {
        saldo = pedro;
        alert("Bienvenido Pedro, tienes " + saldo + " pesos");
    }
    else if (jugador == "Maria") {
        saldo = maria;
        alert("Bienvenida Maria, tienes " + saldo + " pesos");
    }
    else if (jugador == "Tomas") {
        saldo = tomas;
        alert("Bienvenido Tomas, tienes " + saldo + " pesos");
    }
    else if (jugador == "Pancho") {
        saldo = pancho;
        alert("Bienvenido Pancho, tienes " + saldo + " pesos");
    }
    else {
        alert("Jugador no reconocido, por favor intente de nuevo");
        location.reload();
        return;
    }

    alert("bienvenido al supermercado ")

    let productos = [
        {nombre: "Arroz", precio: 100},
        {nombre: "Fideos", precio: 150},
        {nombre: "Carne", precio: 500},
        {nombre: "Pollo", precio: 400},
        {nombre: "Pescado", precio: 600},
        {nombre: "Leche", precio: 80},
        {nombre: "Pan", precio: 50}
    ];

    let seguirComprando = true;
    while(seguirComprando && saldo > 0) {
        let producto = prompt("ingrese el nombre del producto que desea comprar");
        let productoEncontrado = false;
        for (let i = 0; i < productos.length; i++) {
            if (productos[i].nombre === producto) {
                productoEncontrado = true;
                let cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar:"));
                saldo -= productos[i].precio * cantidad;
                if (saldo < 0) {
                    alert("No tienes suficiente dinero para comprar " + cantidad + " " + productos[i].nombre);
                    saldo += productos[i].precio * cantidad; // Revertir el cambio
                } else {
                    alert("Has comprado " + cantidad + " " + productos[i].nombre + ". Te quedan " + saldo + " pesos.");
                }
                break;
            }
        }
        if (!productoEncontrado) {
            alert("Producto no encontrado, por favor intente de nuevo.");
        }
        let mas = prompt("¿Desea comprar otro producto? (si/no)");
        if (mas && mas.toLowerCase() === "no") {
            seguirComprando = false;
        }
    }
    alert("Gracias por su compra, " + saldo + " pesos restantes.");
}