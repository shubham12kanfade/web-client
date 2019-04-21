import { Component, OnInit } from '@angular/core';
import { scripts } from '../../configuration/js-import';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  STEAKS: boolean = false;
  PIZZA: boolean = false;
  STARTERS: boolean = false;
  DESSERTS: boolean = false;
  DRINKS: boolean = false;
  salad: boolean = true;
  lm: boolean = false;
  be: boolean = false;
  mb: boolean = false;
  salad1: boolean = true;
  lm1: boolean = false;
  be1: boolean = false;
  mb1: boolean = false;


  protected Scripts: any = scripts;
  loadAPI: Promise<any>;

  constructor() {
    this.checkSteack('all');
    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
      resolve(true);
    });
  }

  ngOnInit() {
  }
  checkSteack(text) {
    this.STEAKS = false;
    this.PIZZA = false;
    this.STARTERS = false;
    this.DESSERTS = false;
    this.DRINKS = false;

    if (text === 'STEAKS') {
      this.STEAKS = true;
    }
    if (text === 'PIZZA') {
      this.PIZZA = true;
    }
    if (text === 'STARTERS') {
      this.STARTERS = true;
    }
    if (text === 'DESSERTS') {
      this.DESSERTS = true;
    }
    if (text === 'DRINKS') {
      this.DRINKS = true;
    }
    if (text === 'all') {
      this.STEAKS = true;
      this.PIZZA = true;
      this.STARTERS = true;
      this.DESSERTS = true;
      this.DRINKS = true;
    }
  }

  subMenu(text) {
    this.salad = false;
    this.lm = false;
    this.be = false;
    this.mb = false;

    if (text === 'salad') {
      this.salad = true;
    }
    if (text === 'lm') {
      this.lm = true;
    }
    if (text === 'be') {
      this.be = true;
    }
    if (text === 'mb') {
      this.mb = true;
    }
  }
  subMenu1(text) {
    this.salad1 = false;
    this.lm1 = false;
    this.be1 = false;
    this.mb1 = false;

    if (text === 'salad1') {
      this.salad1 = true;
    }
    if (text === 'lm1') {
      this.lm1 = true;
    }
    if (text === 'be1') {
      this.be1 = true;
    }
    if (text === 'mb1') {
      this.mb1 = true;
    }
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