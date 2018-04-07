import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScraperDetailComponent } from './scraper-detail.component';

describe('ScraperDetailComponent', () => {
  let component: ScraperDetailComponent;
  let fixture: ComponentFixture<ScraperDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScraperDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScraperDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
