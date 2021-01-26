import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuyCreditsPage } from './buy-credits.page';

describe('BuyCreditsPage', () => {
  let component: BuyCreditsPage;
  let fixture: ComponentFixture<BuyCreditsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyCreditsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuyCreditsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
