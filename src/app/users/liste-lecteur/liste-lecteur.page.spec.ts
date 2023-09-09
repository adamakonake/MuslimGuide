import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeLecteurPage } from './liste-lecteur.page';

describe('ListeLecteurPage', () => {
  let component: ListeLecteurPage;
  let fixture: ComponentFixture<ListeLecteurPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListeLecteurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
