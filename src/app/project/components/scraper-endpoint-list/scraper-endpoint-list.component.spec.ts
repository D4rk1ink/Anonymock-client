import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ScraperEndpointListComponent } from './scraper-endpoint-list.component'

describe('ScraperEndpointListComponent', () => {
  let component: ScraperEndpointListComponent
  let fixture: ComponentFixture<ScraperEndpointListComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScraperEndpointListComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ScraperEndpointListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
