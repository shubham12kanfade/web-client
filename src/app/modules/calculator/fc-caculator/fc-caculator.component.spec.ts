import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcCaculatorComponent } from './fc-caculator.component';

describe('FcCaculatorComponent', () => {
  let component: FcCaculatorComponent;
  let fixture: ComponentFixture<FcCaculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcCaculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcCaculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
