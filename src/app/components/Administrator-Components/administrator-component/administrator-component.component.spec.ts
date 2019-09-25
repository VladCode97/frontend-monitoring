import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorComponentComponent } from './administrator-component.component';

describe('AdministratorComponentComponent', () => {
  let component: AdministratorComponentComponent;
  let fixture: ComponentFixture<AdministratorComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
