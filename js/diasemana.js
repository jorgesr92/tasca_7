function comprobarfecha(x) {
    var y=1;
    var C, r, z; //año bisisesto
    if (x.año.substr(2,2)!=00) {
        r=x.año.substr(2,2)%4;
    } else {
        z=x.año%400;
    }
    if (r==0 || z==0) {
        C=-1;
    } else {
        C=0;
    }
    var mes1=[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; //dias del mes
    var A=mes1[x.mes-1];
    if (x.mes==2 && C==-1) {
        while ((x.dia<=0 || x.dia>29) && y<3) {
            x.dia=prompt("¡CUIDADO año bisiesto! introduce un dia (del 1 al 29)"); //nos aseguramos de que el numero sea correcto				
            y++;
        }
        if (x.dia<=0 || x.dia>29) {
            document.write ("<h1> ¡Fin del Juego! </h1>");
        }
    } else {
        while ((x.dia<=0 || x.dia>A) && y<3) {
            x.dia=prompt("¡CUIDADO! introduce un dia adecuado para el mes que has introducido"); //nos aseguramos de que el numero sea correcto				
            y++;
        }
    } 
    if (x.dia<=0 || x.dia>A && y==3) {
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
