import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentRoomComponent } from './treatment-room.component';

describe('TreatmentRoomComponent', () => {
  let component: TreatmentRoomComponent;
  let fixture: ComponentFixture<TreatmentRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreatmentRoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreatmentRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
