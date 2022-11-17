import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.scss']
})
export class MeuFormComponent implements OnInit {
  nome: string = 'abc';
  pessoa: any = {
    nome: 'Flavia',
    idade: '46',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
