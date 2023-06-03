import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InterioresPage } from './interiores.page';

describe('HomePage', () => {
  let component: InterioresPage;
  let fixture: ComponentFixture<InterioresPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InterioresPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InterioresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
