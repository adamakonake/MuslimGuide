import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjouterMosqueePage } from './ajouter-mosquee.page';

describe('AjouterMosqueePage', () => {
  let component: AjouterMosqueePage;
  let fixture: ComponentFixture<AjouterMosqueePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjouterMosqueePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
