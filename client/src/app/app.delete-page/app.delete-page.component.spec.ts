import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDeletePageComponent } from './app.delete-page.component';

describe('AppDeletePageComponent', () => {
  let component: AppDeletePageComponent;
  let fixture: ComponentFixture<AppDeletePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppDeletePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppDeletePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
