import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClientComponentComponent } from './create-client-component.component';

describe('CreateClientComponentComponent', () => {
  let component: CreateClientComponentComponent;
  let fixture: ComponentFixture<CreateClientComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateClientComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateClientComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
