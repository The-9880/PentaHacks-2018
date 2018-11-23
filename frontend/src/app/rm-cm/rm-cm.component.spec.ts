import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RMCMComponent } from './rm-cm.component';

describe('RMCMComponent', () => {
  let component: RMCMComponent;
  let fixture: ComponentFixture<RMCMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RMCMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RMCMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
