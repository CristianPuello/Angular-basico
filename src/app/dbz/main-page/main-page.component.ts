import { Component } from '@angular/core';

import { personaje } from '../interfaces/dbz.interface';




@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{



  nuevo:personaje = {
    nombre:'Maestro rocsh',
    poder: 100000
  }
  

  constructor(){
  }

}
