import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageDeBienvenuPage } from './page-de-bienvenu.page';

describe('PageDeBienvenuPage', () => {
  let component: PageDeBienvenuPage;
  let fixture: ComponentFixture<PageDeBienvenuPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PageDeBienvenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
