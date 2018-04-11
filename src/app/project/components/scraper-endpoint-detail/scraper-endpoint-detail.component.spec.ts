import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScraperEndpointDetailComponent } from './scraper-endpoint-detail.component';

describe('ScraperEndpointDetailComponent', () => {
  let component: ScraperEndpointDetailComponent;
  let fixture: ComponentFixture<ScraperEndpointDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScraperEndpointDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScraperEndpointDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
