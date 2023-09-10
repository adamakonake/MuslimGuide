import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LireCoranPage } from './lire-coran.page';

describe('LireCoranPage', () => {
  let component: LireCoranPage;
  let fixture: ComponentFixture<LireCoranPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LireCoranPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
