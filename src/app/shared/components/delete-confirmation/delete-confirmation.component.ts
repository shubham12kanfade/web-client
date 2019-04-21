import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { BookService } from 'src/app/modules/books/book.service';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.scss']
})
export class DeleteConfirmationComponent implements OnInit {

  @Input() itemType: any;
  @Input() title: any;
  @Output() cancelClick = new EventEmitter<any>();
  @Output() okClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit() { }
  delete() {
    this.okClick.emit();
  }
  cancel() {
    this.cancelClick.emit();
  }
}
