import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalPageCreateTeamPage } from './modal-page-create-team.page';

describe('ModalPageCreateTeamPage', () => {
  let component: ModalPageCreateTeamPage;
  let fixture: ComponentFixture<ModalPageCreateTeamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPageCreateTeamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalPageCreateTeamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
