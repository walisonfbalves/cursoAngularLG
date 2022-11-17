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

  valorInput: string = '';
  valorSalvoInput: string = '';
  valorMouse: boolean = false;
  valorClicado: string = '';



  constructor() { }

  ngOnInit(): void {
  }

   getValor() {
    return 1;
  }

  getCursoAngular() {
    return true;
  }

  botaoClicado()  {
    alert('Botão clicado')
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorInput = (<HTMLInputElement>evento.target).value;
  }

  onKeyUpEnter(valor: any) {
    this.valorSalvoInput = valor.value
  }

  mouseEvent() {
    this.valorMouse = !this.valorMouse;
  }


}
