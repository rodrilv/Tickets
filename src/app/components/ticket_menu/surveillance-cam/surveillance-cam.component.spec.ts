import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SurveillanceCamComponent } from './surveillance-cam.component';

describe('SurveillanceCamComponent', () => {
  let component: SurveillanceCamComponent;
  let fixture: ComponentFixture<SurveillanceCamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveillanceCamComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SurveillanceCamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
