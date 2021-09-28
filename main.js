/*
ENTREGA 04-B: FUNCIONES RELACIONADAS

    by Andres De Innocentiis
*/

const SALIR = 0;
let exit = false
const TERMINAR = 99;
let opcion1 = "Panchin común re aburrido"
let opcion2 = "Panchin más copado (2 salsas)"
let opcion3 = "Panchin buenardo super completo"
let opcion4 = "El mismo que el 3 pero con gaseosa y papitas"

let menu = `===========================================\n~~~~~~~~~~~~~~|  EL PANCHIN LOCO  |~~~~~~~~~~~~~~\n===========================================\n\n1. ${opcion1} ________________________________ $150\n2. ${opcion2} ____________________________ $300\n3. ${opcion3} ________________________ $500\n4. ${opcion4} __________ $4700\n\n==============================================\n0. SALIR\n==============================================\n`;

/*
const precios = {
    opcion1: 150,
    opcion2: 300,
    opcion3: 500,
    opcion4: 4700,
};


let ticket = `Ticket de compra\n"El Panchin loco"\n----------------\n`
const carrito = [];
const total = [];
let sumaTotal
const totalProducto = {}
*/
let nombre = prompt("Como te llamás man?")


function mostrarTicket (carrito,totalProducto,sumaTotal,total,precios) {
    let cuenta = `--------------------------- TICKET DE COMPRA ------------------------\n---------------------------------------------------------------------------\n                                         "EL PANCHIN LOCO"                                   \n---------------------------------------------------------------------------\n\n`
    let contador = 0;
    let linea = "_______________________________________________________"
    
    for (let producto of carrito) {
        if (!(totalProducto.hasOwnProperty(producto))) {
            totalProducto[producto] = 1;
        } else {
            totalProducto[producto] += 1;
            
        }
    }

    for (let precio of total) {
        sumaTotal += precio;
    }

    for (const clave in totalProducto) {
        contador +=1
        cuenta += `(${contador}) ${clave} (x ${totalProducto[clave]}) ${linea.substr(totalProducto[clave]+clave.length)} $${precios[clave] * totalProducto[clave]}\n`
    }

    

    cuenta += `\n---------------------------------------------------------------------------\nTOTAL _________________________________________________________ $${sumaTotal}\n---------------------------------------------------------------------------`
    return [cuenta,sumaTotal]
}


function opcionesExtremas(billetera) {
    alert(`Bueno ${nombre}, no te alcanza para pagar, con $${billetera} no haces nada acá.. Momento de tomar una decisión`)
    let opcionA = "Sacar el fierro y llevarse todo sin pagar"
    let opcionB = "Robarle la plata a una vieja que justo pasa por ahí"
    let opcionC = "Ofrecerse a lavar los platos"
    let opcionD = "Vender un órgano ahí nomás"

    let menuAccion = `============================================\n~~~~~~~~~~~~~~|  DECISIONES EXTREMAS  |~~~~~~~~~~~~\n============================================\n\n1. ${opcionA}\n2. ${opcionB}\n3. ${opcionC}\n4. ${opcionD}\n\n============================================\n0. SALIR\n============================================\n`;

    let option
    let salir = false

    while (salir == false) {
        option = Number(prompt(menuAccion))
        if (option == 1) {
            hacer = prompt("Te vio un cana, le convidas un panchin para zafar? [S/N]").toUpperCase()
            if (hacer == "S") {
                alert("Buena decisión, zafaste esta vez..")
                salir = true
            } else if (hacer == "N") {
                alert("Te detuvieron, vas en cana por gil y ratón.")
                salir = true
            } else {
                alert("No te decidiste, vas en cana por indeciso")
                salir = true
            }
        } else if (option == 2) {
            alert("La vieja te mató a paraguasos por atrevido. Y encima vas en cana.")
            salir = true
        } else if (option == 3) {
            hacer = prompt("Muy honesto. Después de laburar 3 días pagaste la deuda.. Querés comprar otro panchin? [S/N]").toUpperCase()
            if (hacer == "S") {
                main()
            } else if (hacer == "N") {
                alert("Ahora volvete a tu casa que hace 3 días que no apareces por ahí.")
                salir = true
            } else {
                alert("Volvete a tu casa, ya ni sabés lo que estás respondiendo..")
                salir = true
            }
        } else if (option == 4) {
            alert(`Cómo vas a vender un órgano en el medio de la calle? Pensalo mejor ${nombre}..`)
            
        } else {
            alert("Tampoco es que tenés tantas opciones, son esas 4 nomás..")
        }
    }

}


function main() {
    let billetera = Number(prompt("Cuánta guita tenés?"))
    const precios = {
        "Panchin común re aburrido": 150,
        "Panchin más copado (2 salsas)": 300,
        "Panchin buenardo super completo": 500,
        "El mismo que el 3 pero con gaseosa y papitas": 4700,
    };
    
    
    const carrito = [];
    const total = [];
    let sumaTotal = 0
    const totalProducto = {}
    let opcion

    while (exit == false) {
        opcion = Number(prompt(menu));
        if (opcion == 1) {
            carrito.push(opcion1);
            total.push(precios["Panchin común re aburrido"]);
            alert(`Te compraste un ${opcion1}, querés algo más wachin?`);
            

        } else if (opcion == 2) {
            carrito.push(opcion2);
            total.push(precios["Panchin más copado (2 salsas)"]);
            alert(`Te compraste un ${opcion2}, querés algo más wachin?`);

        } else if (opcion == 3) {
            carrito.push(opcion3);
            total.push(precios["Panchin buenardo super completo"]);
            alert(`Te compraste un ${opcion3}, querés algo más wachin?`);

        } else if (opcion == 4) {
            carrito.push(opcion4);
            total.push(precios["El mismo que el 3 pero con gaseosa y papitas"]);
            alert(`Te compraste un ${opcion4}, querés algo más wachin?`);

        } else if (opcion == SALIR && (carrito.length)) {
            
            cuenta = mostrarTicket(carrito,totalProducto,sumaTotal,total,precios);
            alert(cuenta[0]);
            costo = cuenta[1]
            console.log(costo)
            if (costo > billetera) {
                opcionesExtremas(billetera)
            } else {
                alert(`Gracias por la compra, ${nombre}, pagaste con $${billetera} y te sobraron $${billetera - costo}.`)
            }
            
            exit = true
        } else if (opcion == SALIR && !(carrito.length)) {
            alert("Gracia por no compra nada pa'.. Vuelva prontos")
            exit = true
        } else {
            alert("Pero por qué no te fijas la opción que marcaste? Son 4 nomás, no es muy difícil viejo")
        }
        
    }

}

main()