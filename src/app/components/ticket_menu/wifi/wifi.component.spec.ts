import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WifiComponent } from './wifi.component';

describe('WifiComponent', () => {
  let component: WifiComponent;
  let fixture: ComponentFixture<WifiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WifiComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WifiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
