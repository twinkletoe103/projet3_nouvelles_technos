import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryStatus } from './library-status';

describe('LibraryStatus', () => {
  let component: LibraryStatus;
  let fixture: ComponentFixture<LibraryStatus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryStatus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryStatus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
