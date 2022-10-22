import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  nomePortal: string;

  cursos: string[] = ['HTMl','CSS', 'Java', 'Angular']

  constructor() {

    this.nomePortal = 'http://loiane.training';

    for (let i=0; i<this.cursos.length; i++) {
      let curso = this.cursos[i];
    }
  }

  ngOnInit(): void {
  }

}
