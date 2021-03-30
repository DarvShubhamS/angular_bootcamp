import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpService } from 'src/http.service';
import { AppComponent } from './app.component';


describe('AppComponent', () => {
  let mockhttpservice
  let Data
  let spy: any

  beforeEach(async () => {
    // creating fake data
    Data = [
      { id: 1, name: 'shubham' },
      { id: 2, name: 'user2' },
      { id: 3, name: 'user3' }
    ]

    // setting up mock service
    mockhttpservice = {
      getData: () => of(Data)
    }


    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        {
          provide: HttpService,
          useValue: mockhttpservice
        }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'LearningTesting'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('LearningTesting');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('LearningTesting app is running!');
  });

  // mocking get data http api call
  it('get data from server', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    spy = spyOn(mockhttpservice, 'getData').and.returnValue(of(Data));
    app.users = spy()
    app.ngOnInit()

    expect(spy).toHaveBeenCalled()
    expect(app.users.length).toBe(3)


  })
});






