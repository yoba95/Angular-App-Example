import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from "./counter/counter";

@Component({
  selector: 'app-root',
  imports: [Counter, RouterOutlet, ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Hola Mundo');
  users: string [] = ['pepe','juan','luis', 'carlos'];
  //users?: string [];
  visible : boolean = false;

  setVisible (): void {
    this.visible = this.visible? false: true;
    console.log('hemos hecho clic en setvisible');
  }
}
