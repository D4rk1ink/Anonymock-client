import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonUiComponent } from './json-ui.component';

describe('JsonUiComponent', () => {
  let component: JsonUiComponent;
  let fixture: ComponentFixture<JsonUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
