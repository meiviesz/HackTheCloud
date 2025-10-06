import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Organizers } from './organizers';

describe('Organizers', () => {
  let component: Organizers;
  let fixture: ComponentFixture<Organizers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Organizers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Organizers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
