import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInsertPageComponent } from './app.insert-page.component';

describe('AppInsertPageComponent', () => {
  let component: AppInsertPageComponent;
  let fixture: ComponentFixture<AppInsertPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppInsertPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppInsertPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
