import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ScraperRequestsComponent } from './scraper-requests.component'

describe('ScraperRequestsComponent', () => {
  let component: ScraperRequestsComponent
  let fixture: ComponentFixture<ScraperRequestsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScraperRequestsComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ScraperRequestsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
