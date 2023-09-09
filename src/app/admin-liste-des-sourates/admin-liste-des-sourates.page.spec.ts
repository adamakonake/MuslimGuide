import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminListeDesSouratesPage } from './admin-liste-des-sourates.page';

describe('AdminListeDesSouratesPage', () => {
  let component: AdminListeDesSouratesPage;
  let fixture: ComponentFixture<AdminListeDesSouratesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminListeDesSouratesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
