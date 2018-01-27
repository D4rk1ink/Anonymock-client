import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxTabsComponent } from './box-tabs.component';

describe('BoxTabsComponent', () => {
  let component: BoxTabsComponent;
  let fixture: ComponentFixture<BoxTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
