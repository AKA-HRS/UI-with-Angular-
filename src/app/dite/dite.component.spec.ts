import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiteComponent } from './dite.component';

describe('DiteComponent', () => {
  let component: DiteComponent;
  let fixture: ComponentFixture<DiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
