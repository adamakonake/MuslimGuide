import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeDesMosqueesPage } from './liste-des-mosquees.page';

describe('ListeDesMosqueesPage', () => {
  let component: ListeDesMosqueesPage;
  let fixture: ComponentFixture<ListeDesMosqueesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListeDesMosqueesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
