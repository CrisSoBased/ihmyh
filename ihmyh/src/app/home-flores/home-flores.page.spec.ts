import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeFloresPage } from './home-flores.page';

describe('HomeFloresPage', () => {
  let component: HomeFloresPage;
  let fixture: ComponentFixture<HomeFloresPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeFloresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
