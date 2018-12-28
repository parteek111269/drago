import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Registerlevel2Component } from './registerlevel2.component';

describe('Registerlevel2Component', () => {
  let component: Registerlevel2Component;
  let fixture: ComponentFixture<Registerlevel2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Registerlevel2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Registerlevel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
