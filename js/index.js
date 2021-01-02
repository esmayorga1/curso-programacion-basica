// Eventos de teclas
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
}
// keyup cuando suelto una tecla
 document.addEventListener('keyup', mensaje);

 var suma = 100;

 function mensaje(evento){
     console.log(evento);
     var desplazamiento = 50;    

     if(evento.keyCode == teclas.UP)
     {
         suma = suma + desplazamiento;
         console.log('tecla hacia arriba '+ suma); 
         
     }

     else if (evento.keyCode ==teclas.DOWN)
     {
        suma = suma - desplazamiento;
         console.log('tecla hacia abajo' + suma); 
     } 
 }

 

 