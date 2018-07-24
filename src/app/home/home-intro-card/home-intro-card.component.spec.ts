import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIntroCardComponent } from './home-intro-card.component';

describe('HomeIntroCardComponent', () => {
  let component: HomeIntroCardComponent;
  let fixture: ComponentFixture<HomeIntroCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeIntroCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeIntroCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
