function comprobarfecha(x) {
    var y=1;
    while ((x.dia<=0 || x.dia>31) && y<3) {
        x.dia=prompt("¡CUIDADO! introduce un dia (del 1 al 31)"); //nos aseguramos de que el numero sea correcto				
        y++;
    } 
    if (x.dia<=0 || x.dia>31) {
        document.write ("<h1> ¡Fin del Juego! </h1>"); //si nos equivocamos 3 veces, se acaba el juego
    } 
    y=1;
    while ((x.mes<=0 || x.mes>12) && y<3) {
        x.mes=prompt("¡CUIDADO! introduce un mes correctamente (del 1 al 12)"); //nos aseguramos de que el numero sea correcto				
        y++;
    } 
    if (x.mes<=0 || x.mes>12) {
        document.write ("<h1> ¡Fin del Juego! </h1>"); //si nos equivocamos 3 veces, se acaba el juego
    }
    y=1;
    while ((x.año<1700 || x.año>2299) && y<3) {
        x.año=prompt("¡CUIDADO! introduce un año entre 1700 y 2299"); //nos aseguramos de que el numero sea correcto				
        y++;
    } 
    if (x.año<=1700 || x.año>2299) {
        document.write ("<h1> ¡Fin del Juego! </h1>"); //si nos equivocamos 3 veces, se acaba el juego
    }
    return x;
    }