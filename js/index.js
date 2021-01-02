// Programacion orientada objetos clases
class DragonBollZ{
    constructor(nombrePersonaje, ataquePersonaje, vidaPersonaje){
        this.nombrePersonaje = nombrePersonaje;
        this.ataquePersonaje = ataquePersonaje;
        this.vidaPersonaje = vidaPersonaje
    }

    dimeTuNombre(){
        alert(this.nombrePersonaje)
    }
}

var picoro = new DragonBollZ('Picoro', 52, 70);
console.log(picoro);
picoro.dimeTuNombre();