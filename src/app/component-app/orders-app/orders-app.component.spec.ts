import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersAppComponent } from './orders-app.component';

describe('OrdersAppComponent', () => {
  let component: OrdersAppComponent;
  let fixture: ComponentFixture<OrdersAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrdersAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
