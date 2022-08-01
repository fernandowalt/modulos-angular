import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
})
export class ContadorComponent {
  titulo: string = 'Contador App';
  numero: number = 0;
  base: number = 5;

  add_subtract = (value: number) => {
    this.numero += value;
  };

  reset = () => (this.numero = 0);
}
