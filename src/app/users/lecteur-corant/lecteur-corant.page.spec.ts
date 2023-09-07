import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LecteurCorantPage } from './lecteur-corant.page';

describe('LecteurCorantPage', () => {
  let component: LecteurCorantPage;
  let fixture: ComponentFixture<LecteurCorantPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LecteurCorantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
