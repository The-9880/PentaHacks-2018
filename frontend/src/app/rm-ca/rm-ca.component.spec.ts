import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RMCAComponent } from './rm-ca.component';

describe('RMCAComponent', () => {
  let component: RMCAComponent;
  let fixture: ComponentFixture<RMCAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RMCAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RMCAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
