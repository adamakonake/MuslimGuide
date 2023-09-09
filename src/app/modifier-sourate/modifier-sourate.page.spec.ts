import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModifierSouratePage } from './modifier-sourate.page';

describe('ModifierSouratePage', () => {
  let component: ModifierSouratePage;
  let fixture: ComponentFixture<ModifierSouratePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModifierSouratePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
