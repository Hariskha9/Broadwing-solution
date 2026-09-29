import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicesdetail } from './servicesdetail';

describe('Servicesdetail', () => {
  let component: Servicesdetail;
  let fixture: ComponentFixture<Servicesdetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Servicesdetail],
    }).compileComponents();

    fixture = TestBed.createComponent(Servicesdetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
