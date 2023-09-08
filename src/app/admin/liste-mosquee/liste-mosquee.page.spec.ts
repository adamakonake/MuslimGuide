import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeMosqueePage } from './liste-mosquee.page';

describe('ListeMosqueePage', () => {
  let component: ListeMosqueePage;
  let fixture: ComponentFixture<ListeMosqueePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListeMosqueePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
