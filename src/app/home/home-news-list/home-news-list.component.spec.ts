import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNewsListComponent } from './home-news-list.component';

describe('HomeNewsListComponent', () => {
  let component: HomeNewsListComponent;
  let fixture: ComponentFixture<HomeNewsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeNewsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
