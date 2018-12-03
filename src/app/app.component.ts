import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Platzi  Square';
  lugares : any = [
    {plan:'pagado',cercania:1,distancia:1,active:true,nombre:'Floreria la Gardenia'},
    {plan:'pagado',cercania:1,distancia:1.8,active:true,nombre:'Donas la pasadita'},
    {plan:'gratuito',cercania:2,distancia:5,active:true,nombre:'Veteriania Huellitas felices'},
    {plan:'gratuito',cercania:3,distancia:10,active:false,nombre:'Sushi Suhiroll'},
    {plan:'pagado',cercania:3,distancia:35,active:false,nombre:'Hotel la Gracia'},
    {plan:'gratuito',cercania:31,distancia:120,active:true,nombre:'Zapateria el Clavo'}
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
  // a = 3 ;
  // b = 5;
  // listo = false;
  // nombre1:string = "";
  // nombre2:string = "";

  constructor() {
    // setTimeout(() => {
    //   this.listo = true;
    // },3000)
  }

  hacerAlgo(){
    // alert('Haciendo algo');
  }
}
