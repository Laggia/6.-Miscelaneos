import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {
  // parametros:number = 0;
  constructor( private router:ActivatedRoute ) {
    this.router.params.subscribe( parametros => {

      console.log(`Ruta padre: ${parametros['id']}`);
      // this.parametros = parametros['id'];

    });
  }

  ngOnInit() {
  }

}
