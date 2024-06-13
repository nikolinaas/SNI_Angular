import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicViewComponent } from './music-view.component';

describe('MusicViewComponent', () => {
  let component: MusicViewComponent;
  let fixture: ComponentFixture<MusicViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
