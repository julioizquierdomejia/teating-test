import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testing';

  valor1=0;
  valor2=0;
  resultado = 0;

  multiplicar(num1:number, num2:number):number{
    //return this.resultado = Number(this.valor1) * Number(this.valor2);
    return this.resultado = num1 * num2;
  }
}
