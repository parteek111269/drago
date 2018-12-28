import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Registerlevel1Component } from './registerlevel1.component';

describe('Registerlevel1Component', () => {
  let component: Registerlevel1Component;
  let fixture: ComponentFixture<Registerlevel1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Registerlevel1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Registerlevel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
