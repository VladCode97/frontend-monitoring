import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeApplicationComponentComponent } from './home-application-component.component';

describe('HomeApplicationComponentComponent', () => {
  let component: HomeApplicationComponentComponent;
  let fixture: ComponentFixture<HomeApplicationComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeApplicationComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeApplicationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
