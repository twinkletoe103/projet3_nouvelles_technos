import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEmprunts } from './all-emprunts';

describe('AllEmprunts', () => {
  let component: AllEmprunts;
  let fixture: ComponentFixture<AllEmprunts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllEmprunts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllEmprunts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
