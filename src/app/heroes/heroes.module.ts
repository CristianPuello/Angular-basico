import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core' ;
import { HeroeComponents } from './heroe/heroes.component';
import { ListadoComponent } from './listado/listado.component';



@NgModule({
    declarations:[
        HeroeComponents,
        ListadoComponent
    ],
    exports:[
        ListadoComponent
    ],
    imports:[
        CommonModule
        
    ]
})
export class HeroesModule{

}
