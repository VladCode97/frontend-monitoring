import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGraphicClientsComponentComponent } from './view-graphic-clients-component.component';

describe('ViewGraphicClientsComponentComponent', () => {
  let component: ViewGraphicClientsComponentComponent;
  let fixture: ComponentFixture<ViewGraphicClientsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewGraphicClientsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGraphicClientsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
