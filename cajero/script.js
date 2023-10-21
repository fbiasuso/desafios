let saldo = 350428;


do {
const mensaje = Number(prompt("Bienvenido al Cajero de Banco JS, escriba el Número de una opción: \n 1 - Consultar Saldo \n 2 - Extracción \n 3 - Depósitos \n 4 - Jugar al Doom"))

switch (mensaje) {
    case 1:
            /* Consultar Saldo */
            alert("Su saldo es :"+saldo)
    break;
    case 2:
             /* Extrcción */
             let montoExtraccion = 0;
             do {
                 montoExtraccion = Number(prompt("Ingrese el monto a extraer: "));
                 
                 
                 montoExtraccion%10 !== 0 && alert("El monto a extraer debe ser multiplo de 10.")
                 
            }
            
             while((montoExtraccion % 10 !== 0))
              
             if (montoExtraccion > saldo) {
                alert("Saldo insuficiente. Intente nuevamente con otro monto.")     
               
             } else {

                saldo -= montoExtraccion;
             
                alert("Ha retirado $"+montoExtraccion+", su nuevo saldo es $"+saldo);

            }
             
    break;
    case 3:
            /* Depósitos */
            alert("Puede depositar hasta 40 billetes en total por día pero debe hacerlo agrupando los billetes de la misma denominación y depositando un grupo a la vez en el caso de existir más de una denominación distinta.")
            let deposito = 0;
            let excedente = 0;
            let contadorDeBilletes = 0;
            let valorBillete = 0;
          
            do {  
                if(contadorDeBilletes<40){
                    let valorDepositado = Number(prompt("Escriba la denominación de los billetes a depositar:"))
                    let cantidadDepositada = Number(prompt("Escriba la cantidad de billetes de la misma denominación a depositar:"));
                    
                    if((cantidadDepositada+contadorDeBilletes)>40){
                    
                        deposito += (40-contadorDeBilletes) * valorDepositado 
                        excedente = cantidadDepositada - (40 - contadorDeBilletes)
                        alert("Ud. ha depositado $"+deposito+" y se le devolvieron "+excedente+" billetes de "+valorDepositado+" por exceder el limite permitido de billetes.")   
                        contadorDeBilletes = 40;    

                    }else{
                            deposito += cantidadDepositada * valorDepositado
                            contadorDeBilletes += cantidadDepositada;

                            alert("Ud. ha depositado $"+deposito)
                        }

                } else {
                         alert("Ud. ya ha alcanzado el limite de depositos de hoy");
                        }        
            }
            while (confirm("¿Desea seguir depositando?"))
            saldo += deposito;
            alert("Ha depositado un total de $"+deposito+" y su nuevo saldo es $"+saldo)
    break;

    case 4:
            /* Jugar al Doom */
            alert("Disfrute: https://dos.zone/doom-dec-1993/")
    break;

    default:
        alert("Ingresó una opción no válida, intente nuevamente.")
        break;
}


} while (confirm("¿Desea realizar otra operación?"))


alert("Muchas gracias por usar el Cajero del Banco JS, vuelva pronto, pero no tan pronto, a menos que sea para depositar, ahí sí, vuelva cuando quiera.")