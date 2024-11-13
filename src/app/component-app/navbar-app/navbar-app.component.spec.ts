import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAppComponent } from './navbar-app.component';

describe('NavbarAppComponent', () => {
  let component: NavbarAppComponent;
  let fixture: ComponentFixture<NavbarAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
