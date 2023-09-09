import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeLecteursPage } from './liste-lecteurs.page';

describe('ListeLecteursPage', () => {
  let component: ListeLecteursPage;
  let fixture: ComponentFixture<ListeLecteursPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListeLecteursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
