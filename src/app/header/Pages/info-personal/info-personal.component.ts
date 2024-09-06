
import { Component, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  standalone: true,
  imports: [RouterModule],
  templateUrl: './info-personal.component.html',
  styleUrl: './info-personal.component.css',
})
export  default class InfoPersonalComponent {

  constructor(private clipboard: Clipboard) {}

  copiar() {
    this.clipboard.copy('carlosbp2608@gmail.com');
  }
}
