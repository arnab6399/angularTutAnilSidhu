import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchLoopSignal } from './switch-loop-signal';

describe('SwitchLoopSignal', () => {
  let component: SwitchLoopSignal;
  let fixture: ComponentFixture<SwitchLoopSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchLoopSignal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchLoopSignal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
