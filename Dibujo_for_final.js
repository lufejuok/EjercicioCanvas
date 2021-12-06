var texto=document.getElementById("text_lineas");
var boton=document.getElementById("botoncito");
boton.addEventListener("click",dibujarPorClick);

var d;
var lienzo;
d=document.getElementById("dibujito_for_final");
lienzo=d.getContext("2d");
var ancho=d.width;



var color2="black";

function dibujar(color, xini, yini, xfin, yfin)
{
    lienzo.beginPath();
    lienzo.strokeStyle=color;
    lienzo.moveTo(xini, yini);
    lienzo.lineTo(xfin, yfin);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarPorClick(){
    //var valor=parseInt(texto.value);   

    
    var l=0;
    var linea=parseInt(texto.value);
    console.log("hola "+linea);
    var yi,xf,yf,yi1,yf1,xi;
    console.log("este es el valor de text: "+ linea); 
    var espacio=ancho/linea;


    for (l=0;l<linea;l++)
    { //Prueba para generar otro grafico
        xi=yi=espacio*l;
        xi1=yi1=300-(l*espacio);
        yf1=xf1=140-(espacio*l);
        xf=yf=160+(l*espacio);
        dibujar("gray", 150, yi, xf1, 150);//esquina izquierda arriba
        dibujar("green", 150, yi1, xf, 150);//Esquina derecha abajo
        dibujar("orange", xi, 150, 150, yf);// Esquina izquierda abajo
        dibujar("blue", xi1, 150, 150, yf1);  //esquina derecha arriba
    }
   
   
}
  
dibujar(`black`,1,1,ancho-1,1); 
dibujar(`black`, 1,1,1,ancho-1);
dibujar('black', ancho-1,1,ancho-1,ancho-1);
dibujar('black', 1,ancho-1,ancho-1,ancho-1);

