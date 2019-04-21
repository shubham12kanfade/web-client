import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild, Input } from '@angular/core';
declare var CKEDITOR: any;
@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss']
})
export class DataEditorComponent implements OnInit {

  title: any;
  @Input() type: any;
  @Input() selectedData: any;
  @ViewChild('editorData') editorData: ElementRef;
  @Output() closeCKEditor = new EventEmitter<any>();
  @Output() okClick = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    if (this.type === 'addQuestion') {
      this.title = 'Add Question';
    } else if (this.type === 'editQuestion') {
      this.title = 'Edit Question';
    } else if (this.type === 'addAnswer') {
      this.title = 'Add Answer';
    } else if (this.type === 'editAnswer') {
      this.title = 'Edit Answer';
    } else if (this.type === 'addOption') {
      this.title = 'Add Option';
    } else if (this.type === 'editOption') {
      this.title = 'Edit Option';
    }

    CKEDITOR.replace('editorData');
    if (this.selectedData) {
      CKEDITOR.instances.editorData.setData(this.selectedData);
    } else {
      CKEDITOR.instances.editorData.setData('');
    }
  }
  save() {
    const data = CKEDITOR.instances.editorData.getData();
    this.okClick.emit(data);
    console.log('data', data);

  }
  cancel() {
    this.closeCKEditor.emit();
  }
}
