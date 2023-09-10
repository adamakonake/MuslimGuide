import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListMosquesPage } from './list-mosques.page';

describe('ListMosquesPage', () => {
  let component: ListMosquesPage;
  let fixture: ComponentFixture<ListMosquesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListMosquesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
