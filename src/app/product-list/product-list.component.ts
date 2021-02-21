import { Component ,OnInit} from '@angular/core';

import { Products } from '../products';

import { Observable } from  "rxjs" ;

import { ProductsService } from "../products.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  ;
  public products: Products[];

  constructor(private productsService: ProductsService) {}

  ngOnInit () {
    this.reloadData ();
 }

 reloadData() {
  this.productsService.getProductsList().subscribe(data => {
    this.products = data;  // acessa a propriedade Search

 })
}

  share() {
    window.alert('O produto foi comprado');
  }

  onNotify() {
    window.alert('você será notificado quando o produto chegar');
  }
}


/*
Classe type script responsável por  popular a classe de produtos
autor Charles Curi
*/
