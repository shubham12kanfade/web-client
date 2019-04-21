import { Component, OnInit, SimpleChanges } from '@angular/core';
import { scripts } from '../../configuration/js-import';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  readMoreAbout: boolean = false;
  protected Scripts: any = scripts;
  loadAPI: Promise<any>;

  constructor() {
    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
      resolve(true);
    });
  }
  ngChanges() {
    console.log("shubham")
  }

  ngOnInit() {
  }
  readMore() {
    this.readMoreAbout = this.readMoreAbout ? false : true;
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
