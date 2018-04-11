import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { KeyValueGroupComponent } from './key-value-group.component'

describe('KeyValueGroupComponent', () => {
  let component: KeyValueGroupComponent
  let fixture: ComponentFixture<KeyValueGroupComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyValueGroupComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyValueGroupComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
