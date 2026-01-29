import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextualVar } from './contextual-var';

describe('ContextualVar', () => {
  let component: ContextualVar;
  let fixture: ComponentFixture<ContextualVar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContextualVar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContextualVar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
