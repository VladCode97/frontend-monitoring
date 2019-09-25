import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateClientComponentComponent } from './update-client-component.component';

describe('UpdateClientComponentComponent', () => {
  let component: UpdateClientComponentComponent;
  let fixture: ComponentFixture<UpdateClientComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateClientComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateClientComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
