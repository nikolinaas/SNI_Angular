import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CultureViewComponent } from './culture-view.component';

describe('CultureViewComponent', () => {
  let component: CultureViewComponent;
  let fixture: ComponentFixture<CultureViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CultureViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CultureViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
