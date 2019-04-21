import { Component, OnInit, Output, OnChanges, EventEmitter } from '@angular/core';
import { ProductServiceService } from '../../home/product-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  onLoginPopup: boolean = false;
  name: any;
  sucbscribe: any;
  closeIt: boolean = false;


  constructor(private productService: ProductServiceService) {
    this.productService.getUserName().subscribe(name => {
      this.name = name;
    });
    this.sucbscribe = this.productService.getModel().subscribe(res => {
      if (res) {
        this.closeIt = true;
      }
    })
  }


  ngOnInit() {
  }

  closeModel() {
    this.productService.openModel(null);
    this.closeIt = false;
  }
  openModel() {
    console.log("open modndufd nfjdfb dfijdjfkji");
    this.closeIt = true;
  }
  onLogin() {
    console.log("open Logim")
    this.productService.openModel(true);
  }
}
