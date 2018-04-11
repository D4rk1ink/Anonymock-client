import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { EndpointGroupComponent } from './endpoint-group.component'

describe('EndpointGroupComponent', () => {
  let component: EndpointGroupComponent
  let fixture: ComponentFixture<EndpointGroupComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndpointGroupComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(EndpointGroupComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
