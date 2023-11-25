import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDisplayPageComponent } from './app.display-page.component';

describe('AppDisplayPageComponent', () => {
  let component: AppDisplayPageComponent;
  let fixture: ComponentFixture<AppDisplayPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppDisplayPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppDisplayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
