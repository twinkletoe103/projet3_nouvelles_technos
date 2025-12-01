import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAccount } from './all-account';

describe('AllAccount', () => {
  let component: AllAccount;
  let fixture: ComponentFixture<AllAccount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllAccount]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllAccount);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
