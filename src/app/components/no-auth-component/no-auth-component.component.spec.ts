import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoAuthComponentComponent } from './no-auth-component.component';

describe('NoAuthComponentComponent', () => {
  let component: NoAuthComponentComponent;
  let fixture: ComponentFixture<NoAuthComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoAuthComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoAuthComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
