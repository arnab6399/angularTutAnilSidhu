import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayBindingTodolist } from './two-way-binding-todolist';

describe('TwoWayBindingTodolist', () => {
  let component: TwoWayBindingTodolist;
  let fixture: ComponentFixture<TwoWayBindingTodolist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoWayBindingTodolist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWayBindingTodolist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
