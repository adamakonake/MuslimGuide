import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HidjriPage } from './hidjri.page';

describe('HidjriPage', () => {
  let component: HidjriPage;
  let fixture: ComponentFixture<HidjriPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HidjriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
