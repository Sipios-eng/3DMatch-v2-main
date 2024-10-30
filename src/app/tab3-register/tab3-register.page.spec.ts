import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tab3RegisterPage } from './tab3-register.page';

describe('Tab3RegisterPage', () => {
  let component: Tab3RegisterPage;
  let fixture: ComponentFixture<Tab3RegisterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab3RegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
