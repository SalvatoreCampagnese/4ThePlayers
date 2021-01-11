import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BracketTournamentPage } from './bracket-tournament.page';

describe('BracketTournamentPage', () => {
  let component: BracketTournamentPage;
  let fixture: ComponentFixture<BracketTournamentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BracketTournamentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BracketTournamentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
