import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fordrivers } from './fordrivers';

describe('Fordrivers', () => {
  let component: Fordrivers;
  let fixture: ComponentFixture<Fordrivers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fordrivers],
    }).compileComponents();

    fixture = TestBed.createComponent(Fordrivers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
