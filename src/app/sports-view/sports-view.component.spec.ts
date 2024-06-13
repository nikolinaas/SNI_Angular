import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsViewComponent } from './sports-view.component';

describe('SportsViewComponent', () => {
  let component: SportsViewComponent;
  let fixture: ComponentFixture<SportsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SportsViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
