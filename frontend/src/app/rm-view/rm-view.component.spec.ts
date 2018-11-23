import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RMViewComponent } from './rm-view.component';

describe('RMViewComponent', () => {
  let component: RMViewComponent;
  let fixture: ComponentFixture<RMViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RMViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RMViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
