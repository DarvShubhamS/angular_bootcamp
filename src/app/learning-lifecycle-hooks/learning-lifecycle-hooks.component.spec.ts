import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningLifecycleHooksComponent } from './learning-lifecycle-hooks.component';

describe('LearningLifecycleHooksComponent', () => {
  let component: LearningLifecycleHooksComponent;
  let fixture: ComponentFixture<LearningLifecycleHooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningLifecycleHooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningLifecycleHooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
