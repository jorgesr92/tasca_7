function calculardia(x) {
    var A; //calculamos la variable A a partir del siglo de la fecha introducida
    if (x.año>=1700 && x.año<=1799) {
        A=5;
    }
    if (x.año>=1800 && x.año<=1899) {
        A=3;
    }
    if (x.año>=1900 && x.año<=1999) {
        A=1;
    }
    if (x.año>=2000 && x.año<=2099) {
        A=0;
    }
    if (x.año>=2100 && x.año<=2199) {
        A=-2;
    }
    if (x.año>=2200 && x.año<=2299) {
        A=-4;
    }
    var B; //la variable B a partr del los ultimos dos digitos del año
    B=parseInt(x.año.substr(2,2))+Math.trunc(x.año.substr(2,2)/4);
    var C, y, z; //variable C calculada teniendo en cuenta si el año es bisiesto o no 
    if (x.año.substr(2,2)!=00) {
        y=x.año.substr(2,2)%4;
    } else {
        z=x.año%400;
    }
    if ((x.mes==1 || x.mes==2) && (y==0 || z==0)) {
        C=-1;
    } else {
        C=0;
    }
    var mes=[6,2,2,5,0,3,5,1,4,6,2,4];
    var D=mes[fecha.mes-1]; //calculando variable D a partir del mes introducido
    var E=x.dia; //variable E que es el dia introducido
    resultado=A+B+C+D+parseInt(E); //suma de las variables
    resultado= resultado%7; //el resto del resultado dividido entre 7 se corresponderia con el dia de la semana 
    return resultado;
}