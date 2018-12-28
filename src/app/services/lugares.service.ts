import { Injectable } from "@angular/core";

@Injectable()

export class  LugaresService {
  lugares: any = [
    {id:1,plan:'pagado',cercania:1,distancia:1,active:true,nombre:'Floreria la Gardenia',description:'descripcion del negocio'},
    {id:2,plan:'pagado',cercania:1,distancia:1.8,active:true,nombre:'Donas la pasadita',description:'descripcion del negocio'},
    {id:3,plan:'gratuito',cercania:2,distancia:5,active:true,nombre:'Veteriania Huellitas felices',description:'descripcion del negocio'},
    {id:4,plan:'gratuito',cercania:3,distancia:10,active:false,nombre:'Sushi Suhiroll',description:'descripcion del negocio'},
    {id:5,plan:'pagado',cercania:3,distancia:35,active:false,nombre:'Hotel la Gracia',description:'descripcion del negocio'},
    {id:6,plan:'gratuito',cercania:31,distancia:120,active:true,nombre:'Zapateria el Clavo',description:'descripcion del negocio'}
  ];

  public getLugares() {
    return this.lugares;
  }

  public buscarLugar(id) {
    return this.lugares.filter((lugar) => lugar.id == id)[0] || null;
  }
}
