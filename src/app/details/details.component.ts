import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  single_product
  id
  constructor(private routes: ActivatedRoute, private dataservice: DataService) { }

  ngOnInit(): void {
    this.id = +this.routes.snapshot.params['id']
    this.single_product = this.dataservice.products.find(el => el.id === this.id)
    console.log(this.single_product.item)



  }

}
