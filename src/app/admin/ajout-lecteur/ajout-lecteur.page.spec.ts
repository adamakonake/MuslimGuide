import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjoutLecteurPage } from './ajout-lecteur.page';

describe('AjoutLecteurPage', () => {
  let component: AjoutLecteurPage;
  let fixture: ComponentFixture<AjoutLecteurPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjoutLecteurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
