import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleimgShowComponent } from './multipleimg-show.component';

describe('MultipleimgShowComponent', () => {
  let component: MultipleimgShowComponent;
  let fixture: ComponentFixture<MultipleimgShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleimgShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleimgShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
