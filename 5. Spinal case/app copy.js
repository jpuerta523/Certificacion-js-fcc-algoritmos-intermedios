/* buscar y reeplazar 
respuesta para FCC*/

/* recibe una cadena de texto y la transforma en arreglo usando como separador los casos listados por el regex, luego vuelve a unirlos usando como separador "-" y finalmente pasa todos los caracteres a minusculas */

function spinalCase(str) {
    return str
        .split(/\s|_|(?=[A-Z])/)
        .join("-")
        .toLowerCase()
  }

  let str = "The_Andy Griffith_Show"
  console.log(spinalCase(str))