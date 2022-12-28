import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngfor',
  templateUrl: './diretiva-ngfor.component.html',
  styleUrls: ['./diretiva-ngfor.component.scss']
})
export class DiretivaNgforComponent implements OnInit {

  cursos: string[] = ["Angular", "HTML", "CSS"]

  constructor() { }

  ngOnInit(): void {
   /*  for (let i = 0;  i  < this.cursos.length;  i ++) {
      let curso = this.cursos[i];
    } */

  }

}
