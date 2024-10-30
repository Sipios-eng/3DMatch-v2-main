import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tab3LoginPage } from './tab3-login.page';

describe('Tab3LoginPage', () => {
  let component: Tab3LoginPage;
  let fixture: ComponentFixture<Tab3LoginPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab3LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
