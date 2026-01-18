import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesAndStyles } from './rules-and-styles';

describe('RulesAndStyles', () => {
  let component: RulesAndStyles;
  let fixture: ComponentFixture<RulesAndStyles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RulesAndStyles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RulesAndStyles);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
