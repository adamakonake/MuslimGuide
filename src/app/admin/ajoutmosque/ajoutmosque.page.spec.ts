import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjoutmosquePage } from './ajoutmosque.page';

describe('AjoutmosquePage', () => {
  let component: AjoutmosquePage;
  let fixture: ComponentFixture<AjoutmosquePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjoutmosquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
