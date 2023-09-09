import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeannoncesPage } from './listeannonces.page';

describe('ListeannoncesPage', () => {
  let component: ListeannoncesPage;
  let fixture: ComponentFixture<ListeannoncesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListeannoncesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
