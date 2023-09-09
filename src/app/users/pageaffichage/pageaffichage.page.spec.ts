import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageaffichagePage } from './pageaffichage.page';

describe('PageaffichagePage', () => {
  let component: PageaffichagePage;
  let fixture: ComponentFixture<PageaffichagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PageaffichagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
