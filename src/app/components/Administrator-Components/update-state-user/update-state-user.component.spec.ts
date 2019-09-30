import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStateUserComponent } from './update-state-user.component';

describe('UpdateStateUserComponent', () => {
  let component: UpdateStateUserComponent;
  let fixture: ComponentFixture<UpdateStateUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateStateUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
