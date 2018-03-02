import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyItemComponent } from './empty-item.component';

describe('EmptyItemComponent', () => {
  let component: EmptyItemComponent;
  let fixture: ComponentFixture<EmptyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
