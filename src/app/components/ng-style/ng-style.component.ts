import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamano">
      Hola mundo... esta es una etiqueta
    </p>

    <button class="btn btn-primary"
    (click)="tamano = tamano + 5">
      <i class="fas fa-plus"></i>
    </button>

    <button class="btn btn-primary"
    (click)="(tamano > 5)? tamano = tamano - 5 : tamano = tamano">
      <i class="fas fa-minus"></i>
    </button>

    <p> Tamaño del pixel: {{tamano}} </p>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamano:number = 20;

  constructor() { }

  ngOnInit() {
  }

}
