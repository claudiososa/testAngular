import { Component } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent {
  title = 'Platzi  Square';
  lugares : any = [
    {id:1,plan:'pagado',cercania:1,distancia:1,active:true,nombre:'Floreria la Gardenia'},
    {id:2,plan:'pagado',cercania:1,distancia:1.8,active:true,nombre:'Donas la pasadita'},
    {id:3,plan:'gratuito',cercania:2,distancia:5,active:true,nombre:'Veteriania Huellitas felices'},
    {id:4,plan:'gratuito',cercania:3,distancia:10,active:false,nombre:'Sushi Suhiroll'},
    {id:5,plan:'pagado',cercania:3,distancia:35,active:false,nombre:'Hotel la Gracia'},
    {id:6,plan:'gratuito',cercania:31,distancia:120,active:true,nombre:'Zapateria el Clavo'}
  ];
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
