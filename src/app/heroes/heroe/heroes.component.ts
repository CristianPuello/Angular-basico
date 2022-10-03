import { Component } from "@angular/core";



@Component({
    selector:'app-heroes',
    templateUrl:'heroe.components.html'

})

export class HeroeComponents {
    nombre:string = 'Ironman'
    edad:number=45

    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

    optenerNombre():string{
        return `${this.nombre} - ${this.edad}`
    }

    cambiarNombre():void{
        this.nombre = 'spiderman';
    }

    cambiarEdad(){
        this.edad =30;

    }


}