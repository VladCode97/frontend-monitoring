import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUsersComponentComponent } from './view-users-component.component';

describe('ViewUsersComponentComponent', () => {
  let component: ViewUsersComponentComponent;
  let fixture: ComponentFixture<ViewUsersComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUsersComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUsersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
