import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Howitworks } from './howitworks';

describe('Howitworks', () => {
  let component: Howitworks;
  let fixture: ComponentFixture<Howitworks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Howitworks],
    }).compileComponents();

    fixture = TestBed.createComponent(Howitworks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
