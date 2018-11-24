import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRmComponent } from './my-rm.component';

describe('MyRmComponent', () => {
  let component: MyRmComponent;
  let fixture: ComponentFixture<MyRmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
