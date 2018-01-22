import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndpointsGroupComponent } from './endpoints-group.component';

describe('EndpointsGroupComponent', () => {
  let component: EndpointsGroupComponent;
  let fixture: ComponentFixture<EndpointsGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndpointsGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndpointsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
