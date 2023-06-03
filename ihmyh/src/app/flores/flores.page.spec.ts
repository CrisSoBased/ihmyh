import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FloresPage } from './flores.page';

describe('HomePage', () => {
  let component: FloresPage;
  let fixture: ComponentFixture<FloresPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FloresPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FloresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
