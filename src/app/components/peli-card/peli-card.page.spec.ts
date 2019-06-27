import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliCardPage } from './peli-card.page';

describe('PeliCardPage', () => {
  let component: PeliCardPage;
  let fixture: ComponentFixture<PeliCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliCardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
