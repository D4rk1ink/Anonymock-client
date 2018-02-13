import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbSchemaComponent } from './db-schema.component';

describe('DbSchemaComponent', () => {
  let component: DbSchemaComponent;
  let fixture: ComponentFixture<DbSchemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbSchemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbSchemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
