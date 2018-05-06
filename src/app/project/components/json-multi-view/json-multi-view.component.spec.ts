import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonMultiViewComponent } from './json-multi-view.component';

describe('JsonMultiViewComponent', () => {
  let component: JsonMultiViewComponent;
  let fixture: ComponentFixture<JsonMultiViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonMultiViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonMultiViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
