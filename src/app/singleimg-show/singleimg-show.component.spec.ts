import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleimgShowComponent } from './singleimg-show.component';

describe('SingleimgShowComponent', () => {
  let component: SingleimgShowComponent;
  let fixture: ComponentFixture<SingleimgShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleimgShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleimgShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
