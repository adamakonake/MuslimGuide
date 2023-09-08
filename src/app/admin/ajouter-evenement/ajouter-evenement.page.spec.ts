import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjouterEvenementPage } from './ajouter-evenement.page';

describe('AjouterEvenementPage', () => {
  let component: AjouterEvenementPage;
  let fixture: ComponentFixture<AjouterEvenementPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjouterEvenementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
