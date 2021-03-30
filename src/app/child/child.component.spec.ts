import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponent } from './child.component';

describe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  //checking @Input()
  it('should check we are getting current input value', () => {
    component.data = 'LearningTesting'
    fixture.detectChanges()

    expect(fixture.nativeElement.querySelector('p').textContent).toBe('LearningTesting')
  })

  // checling @Output
  it('should emit number', () => {
    spyOn(component.childevent, 'emit');

    const button = fixture.nativeElement.querySelector('button')
    button.dispatchEvent(new Event('click'));
    expect(component.childevent.emit).toHaveBeenCalled();
    expect(component.childevent.emit).toHaveBeenCalledWith(5);
  })

  //checking heading is set
  it('should check page contains heading', () => {
    expect(fixture.nativeElement.querySelector('h2').textContent).not.toEqual('')
  })

});
