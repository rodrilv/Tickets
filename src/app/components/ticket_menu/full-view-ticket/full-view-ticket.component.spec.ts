import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FullViewTicketComponent } from './full-view-ticket.component';

describe('FullViewTicketComponent', () => {
  let component: FullViewTicketComponent;
  let fixture: ComponentFixture<FullViewTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullViewTicketComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FullViewTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
