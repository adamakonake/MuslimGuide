import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjouterSouratePage } from './ajouter-sourate.page';

describe('AjouterSouratePage', () => {
  let component: AjouterSouratePage;
  let fixture: ComponentFixture<AjouterSouratePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjouterSouratePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
