import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcqComponent } from './icq.component';

describe('IcqComponent', () => {
  let component: IcqComponent;
  let fixture: ComponentFixture<IcqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IcqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
