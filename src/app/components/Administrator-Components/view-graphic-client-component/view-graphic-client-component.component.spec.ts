import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGraphicClientComponentComponent } from './view-graphic-client-component.component';

describe('ViewGraphicClientComponentComponent', () => {
  let component: ViewGraphicClientComponentComponent;
  let fixture: ComponentFixture<ViewGraphicClientComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewGraphicClientComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGraphicClientComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
