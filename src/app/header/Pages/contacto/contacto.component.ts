import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './contacto.component.html',
  styles: ``
})
export default class ContactoComponent {

  constructor(private clipboard: Clipboard) {}

  copiar() {
    this.clipboard.copy('carlosbp2608@gmail.com');
  }

}
