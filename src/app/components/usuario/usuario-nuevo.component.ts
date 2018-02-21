import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { UsuarioComponent } from './usuario.component';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {
  // parametrosHijas:number = 0;
  // constructor( private usuario:UsuarioComponent ) {
  //   this.parametrosHijas = usuario.parametros;
  //   console.log(`Ruta hija: ${this.parametrosHijas}`);
  // }

  constructor( private router:ActivatedRoute ) {
    this.router.parent.params.subscribe( parametros => {

      console.log(`Ruta hija: ${parametros['id']}`);
      // this.parametros = parametros['id'];

    });
  }



  ngOnInit() {
  }

}
