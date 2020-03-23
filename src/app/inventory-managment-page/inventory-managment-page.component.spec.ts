import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryManagmentPageComponent } from './inventory-managment-page.component';

describe('InventoryManagmentPageComponent', () => {
  let component: InventoryManagmentPageComponent;
  let fixture: ComponentFixture<InventoryManagmentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryManagmentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryManagmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
