import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.scss']
})
export class DiretivaNgifComponent implements OnInit {

  cursos: string[] = ["Angular 14"];

  mostrarCursos: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  mostrarCursosBtn() {
    this.mostrarCursos = !this.mostrarCursos;
  }
}
