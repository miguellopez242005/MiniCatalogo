import { Component, Signal } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrls: ['./app.scss']
})
export class App {
  bajo=0 ;
  alto=0 ;
  componenteMostrar ="";
  productosFiltrados: Product[] = [];
  
  ngOnInit() {
    this.productosFiltrados = [...this.products];
  }
  products = [
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
  filtroPrecio(a:number,b:number){
    for (let i = 0; i < this.products.length; i++) {
      if(this.products[i].price >= a && this.products[i].price <= b){
        this.products[i];
      }
    }
  }
  igual(){
    this.productosFiltrados = [...this.products];
  }

  filtrarPorPrecio(bajo: number, alto: number) {
    const precioMin = bajo || 0;
    const precioMax = alto || Infinity;

    this.productosFiltrados = this.products.filter(p => 
      p.price >= precioMin && p.price <= precioMax
    );
  }

  limpiarFiltro() {
    this.alto = 0;
    this.bajo = 0;
    this.productosFiltrados = [...this.products];
  }
}
