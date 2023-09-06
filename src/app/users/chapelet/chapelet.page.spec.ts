import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChapeletPage } from './chapelet.page';

describe('ChapeletPage', () => {
  let component: ChapeletPage;
  let fixture: ComponentFixture<ChapeletPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChapeletPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
