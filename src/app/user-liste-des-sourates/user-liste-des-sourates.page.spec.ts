import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListeDesSouratesPage } from './user-liste-des-sourates.page';

describe('UserListeDesSouratesPage', () => {
  let component: UserListeDesSouratesPage;
  let fixture: ComponentFixture<UserListeDesSouratesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UserListeDesSouratesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
