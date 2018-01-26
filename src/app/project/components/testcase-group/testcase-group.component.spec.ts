import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcaseGroupComponent } from './testcase-group.component';

describe('TestcaseGroupComponent', () => {
  let component: TestcaseGroupComponent;
  let fixture: ComponentFixture<TestcaseGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestcaseGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestcaseGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
