import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModifyPageComponent } from './app.modify-page.component';

describe('AppModifyPageComponent', () => {
  let component: AppModifyPageComponent;
  let fixture: ComponentFixture<AppModifyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModifyPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppModifyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
