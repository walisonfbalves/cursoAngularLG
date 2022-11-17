import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() mudouValor: any = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  incrementa() {
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor})
  }

  decrementa() {
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor})
  }

}
