import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeEvenementPage } from './liste-evenement.page';

describe('ListeEvenementPage', () => {
  let component: ListeEvenementPage;
  let fixture: ComponentFixture<ListeEvenementPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListeEvenementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
