import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DesejadosPage } from './desejados.page';

describe('HomePage', () => {
  let component: DesejadosPage;
  let fixture: ComponentFixture<DesejadosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DesejadosPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DesejadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
