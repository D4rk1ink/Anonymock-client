import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAddMemberComponent } from './input-add-member.component';

describe('InputAddMemberComponent', () => {
  let component: InputAddMemberComponent;
  let fixture: ComponentFixture<InputAddMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputAddMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAddMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
