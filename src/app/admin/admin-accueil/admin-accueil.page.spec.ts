import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminAccueilPage } from './admin-accueil.page';

describe('AdminAccueilPage', () => {
  let component: AdminAccueilPage;
  let fixture: ComponentFixture<AdminAccueilPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminAccueilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
