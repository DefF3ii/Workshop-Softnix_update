import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderHistoryAppComponent } from './order-history-app.component';

describe('OrderHistoryAppComponent', () => {
  let component: OrderHistoryAppComponent;
  let fixture: ComponentFixture<OrderHistoryAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderHistoryAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderHistoryAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
