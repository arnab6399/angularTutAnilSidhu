import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Elseif } from './elseif';

describe('Elseif', () => {
  let component: Elseif;
  let fixture: ComponentFixture<Elseif>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Elseif]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Elseif);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
