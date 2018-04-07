import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ScraperRequestComponent } from './scraper-request.component'

describe('ScraperRequestComponent', () => {
  let component: ScraperRequestComponent
  let fixture: ComponentFixture<ScraperRequestComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScraperRequestComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ScraperRequestComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
