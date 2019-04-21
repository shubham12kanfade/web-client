import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from './product-service.service';
import { scripts } from '../../configuration/js-import';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Offers: any;
  products: any;
  closeIt: boolean = false;
  sucbscribe: any;
  protected Scripts: any = scripts;
  loadAPI: Promise<any>;

  constructor(private productService: ProductServiceService) {
    this.getProduct();
    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
      resolve(true);
    });
  }

  ngOnInit() {
    this.getProductOff();
  }
  getProductOff() {
    this.productService.getProductsOff().then(res => {
      this.Offers = res.data;
      console.log(this.Offers);
    }).catch(err => {
      console.error(err);
    })
  }
  getProduct() {
    this.productService.getProducts().then(res => {
      this.products = res.data;
      console.log(this.products);
    }).catch(err => {
      console.error(err);
    })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    // this.sucbscribe.unsbscribe();
  }

  // load Scripts here
  public loadScript() {
    var isFound = false;
    var scripts = document.getElementsByTagName("script")
    for (var i = 0; i < scripts.length; ++i) {
      if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("loader")) {
        isFound = true;
      }
    }
    if (!isFound) {
      var dynamicScripts = this.Scripts;
      for (var i = 0; i < dynamicScripts.length; i++) {
        let node = document.createElement('script');
        node.src = dynamicScripts[i];
        node.type = 'text/javascript';
        node.async = false;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
      }

    }
  }



}
