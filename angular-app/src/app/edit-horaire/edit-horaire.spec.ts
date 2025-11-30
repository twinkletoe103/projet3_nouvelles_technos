import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHoraire } from './edit-horaire';

describe('EditHoraire', () => {
  let component: EditHoraire;
  let fixture: ComponentFixture<EditHoraire>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditHoraire]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditHoraire);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
