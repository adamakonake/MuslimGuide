import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SourateListePage } from './sourate-liste.page';

describe('SourateListePage', () => {
  let component: SourateListePage;
  let fixture: ComponentFixture<SourateListePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SourateListePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
