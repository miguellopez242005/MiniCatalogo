import { Component, Output,Input,EventEmitter } from '@angular/core';
import { Product } from '../../model/productsModel';


@Component({
  selector: 'app-products',
  templateUrl: './products.html',
  standalone: false,
  styleUrls: ['./products.scss'],
})

export class AppProducts{
  @Input() lista: Product[] = [];

  @Output() seleccionar = new EventEmitter<number>();

  seleccionado(index: number) {
    this.seleccionar.emit(index);
  }
}
