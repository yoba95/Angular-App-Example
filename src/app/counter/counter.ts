import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',

})
export class Counter implements OnInit{
  counter: number = 0;

  /* esta palabra reservada me permite importar desde el componete padre los atributos en este caso un subtitulo, que sera usado como titulo en este componente hijo */
@Input() title! : string;

  ngOnInit(): void {
    /*Existen dos manera de preguntar si el valor es distinto de undefind ejemplo 1 */
    //this.counter = (localStorage.getItem('counter') !== null )? parseInt(localStorage.getItem('counter')!) : 0;

    this.counter = parseInt(sessionStorage.getItem('counter')!) || 0;
    console.log('creando componente');
  }



  setCounter(): void {
    this.counter = this.counter +1;
    sessionStorage.setItem('counter', this.counter.toString());
  }
}
