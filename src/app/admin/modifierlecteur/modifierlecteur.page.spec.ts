import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModifierlecteurPage } from './modifierlecteur.page';

describe('ModifierlecteurPage', () => {
  let component: ModifierlecteurPage;
  let fixture: ComponentFixture<ModifierlecteurPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModifierlecteurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
