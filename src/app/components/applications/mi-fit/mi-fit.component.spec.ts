import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiFitComponent } from './mi-fit.component';

describe('MiFitComponent', () => {
  let component: MiFitComponent;
  let fixture: ComponentFixture<MiFitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiFitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiFitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
