import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScraperEndpointComponent } from './scraper-endpoint.component';

describe('ScraperEndpointComponent', () => {
  let component: ScraperEndpointComponent;
  let fixture: ComponentFixture<ScraperEndpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScraperEndpointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScraperEndpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
