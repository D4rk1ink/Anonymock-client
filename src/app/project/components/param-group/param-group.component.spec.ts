import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamGroupComponent } from './param-group.component';

describe('ParamGroupComponent', () => {
  let component: ParamGroupComponent;
  let fixture: ComponentFixture<ParamGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
