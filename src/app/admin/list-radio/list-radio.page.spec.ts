import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListRadioPage } from './list-radio.page';

describe('ListRadioPage', () => {
  let component: ListRadioPage;
  let fixture: ComponentFixture<ListRadioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListRadioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
