import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjoutannoncesPage } from './ajoutannonces.page';

describe('AjoutannoncesPage', () => {
  let component: AjoutannoncesPage;
  let fixture: ComponentFixture<AjoutannoncesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjoutannoncesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
