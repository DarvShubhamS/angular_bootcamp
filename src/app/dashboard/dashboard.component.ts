import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  availaible_products;
  constructor(private router: Router, private product_service: Product) { }

  ngOnInit(): void {
    this.availaible_products = this.product_service.products
  }

  routing() {
    this.router.navigateByUrl('/create-product')
  }

}
