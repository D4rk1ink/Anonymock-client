import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMultiViewComponent } from './form-multi-view.component';

describe('FormMultiViewComponent', () => {
  let component: FormMultiViewComponent;
  let fixture: ComponentFixture<FormMultiViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMultiViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMultiViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
