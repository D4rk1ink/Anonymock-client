import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { LogResponseComponent } from './log-response.component'

describe('LogResponseComponent', () => {
  let component: LogResponseComponent
  let fixture: ComponentFixture<LogResponseComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogResponseComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(LogResponseComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
