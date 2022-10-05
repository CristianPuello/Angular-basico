import { Injectable } from "@angular/core";
import { personaje } from '../interfaces/dbz.interface';


@Injectable()
export class DbzService{

    private _personajes:personaje[]=[
        {
        nombre:'trunks',
        poder: 10
        }
    ];

    get personajes():personaje[]{
        return [...this._personajes];
    }

    constructor(){}
    
    agregarPersonaje(personaje: personaje){
        this._personajes.push(personaje)
    }
    
}