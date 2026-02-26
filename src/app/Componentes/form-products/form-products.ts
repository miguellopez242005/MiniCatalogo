import { Component,Output,EventEmitter  } from '@angular/core';
import { isEmpty } from 'rxjs';

interface Product {
  id: number;
  name: string;
  price: number;
}
@Component({
  standalone: false,
  selector: 'app-form-products',
  templateUrl:'./form-products.html',
  styleUrls: ['./form-products.scss'],
})
export class FormProducts {
nuevo: Product = { id:0, name: '', price:0};

@Output() agregar = new EventEmitter<Product>();

agregarProducto() {
  if (this.nuevo.id != null && this.nuevo.name != "" && this.nuevo.price != null) {
    this.agregar.emit({ ...this.nuevo });
    this.nuevo = {id:0,name:"",price:0};
  }
}

}
