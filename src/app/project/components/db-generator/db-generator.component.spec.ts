import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbGeneratorComponent } from './db-generator.component';

describe('DbGeneratorComponent', () => {
  let component: DbGeneratorComponent;
  let fixture: ComponentFixture<DbGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
