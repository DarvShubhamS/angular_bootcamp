import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  product
  constructor(private prod: DataService) { }

  ngOnInit(): void {
    this.product = this.prod.products
    console.log(this.product)
  }

}
