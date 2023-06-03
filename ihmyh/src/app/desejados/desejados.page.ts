import { Component, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'desejados-home',
  templateUrl: 'desejados.page.html',
  styleUrls: ['desejados.page.scss'],
})
export class DesejadosPage {
  public data = [
    'rosa',
    'cravo',
    'girassol',
    'margarida',
    'tulipa',
    'orquidia',
    
  ];
  public results = [...this.data];

  handleInput(event: Event) {
    const query = (event.target as HTMLInputElement).value.toLowerCase();
    this.results = this.data.filter((d) => d.toLowerCase().indexOf(query) > -1);
  }

  constructor() {}

}
