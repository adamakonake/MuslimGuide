import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LireCoransPage } from './lire-corans.page';

describe('LireCoransPage', () => {
  let component: LireCoransPage;
  let fixture: ComponentFixture<LireCoransPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LireCoransPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
