import { Component } from '@angular/core';
import { Product } from './productsModel';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrls: ['./app.scss']
})
export class App {
  bajo: number | null =null ;
  alto: number | null=null ;
  ordenAscendente: boolean = true;
  componenteMostrar ="";
  productosFiltrados: Product[] = [];
  
  ngOnInit() {
    this.productosFiltrados = [...this.products];
  }
  products: Product[] = [
    { id: 1, name: 'Champu', price: 2000 },
    { id: 2, name: 'Arroz', price: 2200 },
    {
        id: 3,
        name: 'Panela',
        price: 4500,
      },
      { id: 4, name: 'Atun', price: 4000 },
      { id: 5, name: 'Carne Cerdo', price: 22000 },
    ];

  ruta(c:string){
    this.componenteMostrar = c;
  }
  deleteProduct(index: number) {
    this.products.splice(index, 1);
     this.igual();
  }

  agregar(product: Product) {
    this.products.push(product);
    this.igual();
  }
  igual(){
    this.productosFiltrados = [...this.products];
  }

  filtrarPorPrecio(bajo: number | null, alto: number | null) {
  const precioMin = bajo ?? 0;
  const precioMax = alto ?? Infinity;
  
  this.productosFiltrados = this.products.filter(p => {
    const precioProducto = p.price ?? 0;
    return precioProducto >= precioMin && precioProducto <= precioMax;
  });
  }

  limpiarFiltro() {
    this.alto = null;
    this.bajo = null;
    this.productosFiltrados = [...this.products];
  }
ordenar() {
  this.ordenAscendente = !this.ordenAscendente;

  this.productosFiltrados.sort((a, b) => 
    this.ordenAscendente ? (a.price ?? 0) - (b.price ?? 0) : (b.price ?? 0) - (a.price ?? 0)
  );
}
}
