import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsMosqueesPage } from './details-mosquees.page';

describe('DetailsMosqueesPage', () => {
  let component: DetailsMosqueesPage;
  let fixture: ComponentFixture<DetailsMosqueesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailsMosqueesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
