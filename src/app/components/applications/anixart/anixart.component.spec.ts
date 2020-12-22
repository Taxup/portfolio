import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnixartComponent } from './anixart.component';

describe('AnixartComponent', () => {
  let component: AnixartComponent;
  let fixture: ComponentFixture<AnixartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnixartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnixartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
