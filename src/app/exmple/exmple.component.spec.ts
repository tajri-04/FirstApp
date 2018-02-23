import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExmpleComponent } from './exmple.component';

describe('ExmpleComponent', () => {
  let component: ExmpleComponent;
  let fixture: ComponentFixture<ExmpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExmpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExmpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
