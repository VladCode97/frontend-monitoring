import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClientsComponentComponent } from './view-clients-component.component';

describe('ViewClientsComponentComponent', () => {
  let component: ViewClientsComponentComponent;
  let fixture: ComponentFixture<ViewClientsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewClientsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewClientsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
