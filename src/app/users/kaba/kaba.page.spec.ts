import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KabaPage } from './kaba.page';

describe('KabaPage', () => {
  let component: KabaPage;
  let fixture: ComponentFixture<KabaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(KabaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
