import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { LogGroupComponent } from './log-group.component'

describe('LogGroupComponent', () => {
  let component: LogGroupComponent
  let fixture: ComponentFixture<LogGroupComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogGroupComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(LogGroupComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
