import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent {
  lugares:any = [
    {id:1,plan:'pagado',cercania:1,distancia:1,active:true,nombre:'Floreria la Gardenia', description:'Esta descripcion es temporal pronto estara correcta'},
    {id:2,plan:'pagado',cercania:1,distancia:1.8,active:true,nombre:'Donas la pasadita',description:'Esta descripcion es temporal pronto estara correcta'},
    {id:3,plan:'gratuito',cercania:2,distancia:5,active:true,nombre:'Veteriania Huellitas felices',description:'Esta descripcion es temporal pronto estara correcta'},
    {id:4,plan:'gratuito',cercania:3,distancia:10,active:false,nombre:'Sushi Suhiroll',description:'Esta descripcion es temporal pronto estara correcta'},
    {id:5,plan:'pagado',cercania:3,distancia:35,active:false,nombre:'Hotel la Gracia',description:'Esta descripcion es temporal pronto estara correcta'},
    {id:6,plan:'gratuito',cercania:31,distancia:120,active:true,nombre:'Zapateria el Clavo',description:'Esta descripcion es temporal pronto estara correcta'}
  ];
  id = null;
  lugar:any = {};
  constructor(private route: ActivatedRoute){
    console.log(this.route.snapshot.params['id']);
    console.log(this.route.snapshot.queryParams['action']);
    console.log(this.route.snapshot.queryParams['refer']);
    this.id = this.route.snapshot.params['id'];

    this.lugar =this.buscarLugar();
    //debugger
  }
  buscarLugar() {
    return this.lugares.filter((lugar) => { return lugar.id == this.id })[0] || null;

  }
}
