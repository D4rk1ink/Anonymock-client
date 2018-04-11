import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ScraperEndpointItemComponent } from './scraper-endpoint-item.component'

describe('ScraperEndpointItemComponent', () => {
  let component: ScraperEndpointItemComponent
  let fixture: ComponentFixture<ScraperEndpointItemComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScraperEndpointItemComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ScraperEndpointItemComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
