import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersAppComponent } from './customers-app.component';

describe('CustomersAppComponent', () => {
  let component: CustomersAppComponent;
  let fixture: ComponentFixture<CustomersAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomersAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomersAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
