import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipbookComponent } from './flipbook.component';

describe('FlipbookComponent', () => {
  let component: FlipbookComponent;
  let fixture: ComponentFixture<FlipbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
