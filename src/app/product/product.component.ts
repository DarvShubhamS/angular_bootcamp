import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product_name;



  constructor(private route: Router, private add_product: Product) { }

  add_new_product() {
    this.add_product.addProduct(this.product_name)
    this.route.navigate(['dashboard'])
  }
  ngOnInit(): void {
  }

}
