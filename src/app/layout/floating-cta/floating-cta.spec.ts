import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingCTA } from './floating-cta';

describe('FloatingCTA', () => {
  let component: FloatingCTA;
  let fixture: ComponentFixture<FloatingCTA>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatingCTA],
    }).compileComponents();

    fixture = TestBed.createComponent(FloatingCTA);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
