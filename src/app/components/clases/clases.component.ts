import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: []
})
export class ClasesComponent implements OnInit {

  alerta:string = "alert-danger";
  loading:boolean = false;
  propiedades:Object = {
    danger:false
  }

  constructor() { }

  ngOnInit() {
  }

  ejecutar(){
    this.loading = true;
    // console.log(this.loading);

    setTimeout(() => {
      this.loading = false;
      // console.log(this.loading);
    }, 3000);

  }

}
