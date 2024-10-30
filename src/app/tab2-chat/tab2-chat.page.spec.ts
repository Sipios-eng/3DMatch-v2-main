import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tab2ChatPage } from './tab2-chat.page';

describe('Tab2ChatPage', () => {
  let component: Tab2ChatPage;
  let fixture: ComponentFixture<Tab2ChatPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab2ChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
