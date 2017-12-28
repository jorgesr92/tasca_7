function calculardia(x) {
    var A;
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
    var B;
    B=parseInt(x.año.substr(2,2))+Math.trunc(x.año.substr(2,2)/4);
    //B=x.año.Substr(2,2)/Math.trunc(x.año/4);
    var C, y, z;
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
    var D;
    if (x.mes==1 || x.mes==10) {
        D=6;
    }
    if (x.mes==2 || x.mes==3 || x.mes==11) {
        D=2;
    }
    if (x.mes==4 || x.mes==7) {
        D=5;
    }
    if (x.mes==5) {
        D=0;
    }
    if (x.mes==6) {
        D=3;
    }
    if (x.mes==8) {
        D=1;
    }
    if (x.mes==9 || x.mes==12) {
        D=4;
    }
    var E=x.dia;
    resultado=A+B+C+D+parseInt(E);
    resultado= resultado%7;
    return resultado;
}