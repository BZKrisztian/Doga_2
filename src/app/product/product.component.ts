import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product',
  standalone: false,
  
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  products: any[] = [];
  product = {
    category: '',
    description: '',
    name: '',
    price: 0,
  };

  constructor(private apiUrl: ProductsService){  }

  ngOnInit(): void {
      this.loadProducts();
  }

  loadProducts() {
    this.apiUrl.getProducts().subscribe(
      (data)=>{
        this.products = Object.values(data);
      }
    )
    
  }

  addProduct(){
    this.apiUrl.addProduct(this.product).subscribe(
      ()=>{this.loadProducts()}
    )
  }

  updateProduct(id: string){
    this.apiUrl.updateProduct(id, this.product).subscribe(
      ()=>{this.loadProducts()}
    )
  }

  deleteProduct(id: string){
    this.apiUrl.deleteProduct(id).subscribe(
      ()=>{this.loadProducts()}
    )
  }



}
