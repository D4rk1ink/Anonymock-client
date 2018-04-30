import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { RectLoadingComponent } from './rect-loading.component'

describe('RectLoadingComponent', () => {
  let component: RectLoadingComponent
  let fixture: ComponentFixture<RectLoadingComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RectLoadingComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(RectLoadingComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
