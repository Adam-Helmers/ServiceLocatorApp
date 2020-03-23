import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProviderMainComponent } from './service-provider-main.component';

describe('ServiceProviderMainComponent', () => {
  let component: ServiceProviderMainComponent;
  let fixture: ComponentFixture<ServiceProviderMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceProviderMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceProviderMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
