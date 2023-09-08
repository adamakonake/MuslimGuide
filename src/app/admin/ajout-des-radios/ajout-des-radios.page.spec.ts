import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjoutDesRadiosPage } from './ajout-des-radios.page';

describe('AjoutDesRadiosPage', () => {
  let component: AjoutDesRadiosPage;
  let fixture: ComponentFixture<AjoutDesRadiosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjoutDesRadiosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
