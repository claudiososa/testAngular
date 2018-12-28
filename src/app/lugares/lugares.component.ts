import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent {
  title = 'Platzi  Square';
  lugares = null;
  constructor(private lugaresService: LugaresService) {
    this.lugares = lugaresService.getLugares();
  }

  lat:number = -24.791377;
  lng:number = -65.432180;
  personas:any = [
    {edad:15,nombre:'Maria'},
    {edad:19,nombre:'Juan'},
    {edad:25,nombre:'Carlos'},
    {edad:35,nombre:'Susana'},
    {edad:55,nombre:'Mariana'},
    {edad:85,nombre:'Rosita'}
  ];
}
