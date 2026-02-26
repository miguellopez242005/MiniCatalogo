import { Component,Output,EventEmitter  } from '@angular/core';
import { Product } from '../../productsModel';

@Component({
  standalone: false,
  selector: 'app-form-products',
  templateUrl:'./form-products.html',
  styleUrls: ['./form-products.scss'],
})
export class FormProducts {
nuevo: Product = { id:null, name: '', price:null};

@Output() agregar = new EventEmitter<Product>();

agregarProducto() {
  if (typeof this.nuevo.id === 'number' && this.nuevo.name.trim() !== '' && typeof this.nuevo.price === 'number') {
    this.agregar.emit({ ...this.nuevo });
    this.nuevo = {id:null,name:"",price:null};
  }
}

}
