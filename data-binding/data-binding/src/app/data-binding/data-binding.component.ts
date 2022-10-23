import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  url: string = "instagran/wfbalves";
  cursoAngular: boolean = true
  urlImagem: string = 'http://lorempixel.com.br/300/300'


  constructor() { }

  ngOnInit(): void {
  }

   getValor() {
    return 1;
  }

  getCursoAngular() {
    return true;
  }
}
