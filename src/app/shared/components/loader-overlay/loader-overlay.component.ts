import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader-overlay',
  templateUrl: './loader-overlay.component.html',
  styleUrls: ['./loader-overlay.component.scss']
})
export class LoaderOverlayComponent implements OnInit {
  progressSpinner: any;
  constructor() {
    this.progressSpinner = {
      color: 'accent',
      mode: 'indeterminate',
      value: '10',
      diameter: '30'
    };
  }

  ngOnInit() {
  }

}
