import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { LogRequestComponent } from './log-request.component'

describe('LogRequestComponent', () => {
  let component: LogRequestComponent
  let fixture: ComponentFixture<LogRequestComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogRequestComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(LogRequestComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
