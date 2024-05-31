import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormControlComponent } from './template-form-control.component';

describe('TemplateFormControlComponent', () => {
  let component: TemplateFormControlComponent;
  let fixture: ComponentFixture<TemplateFormControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateFormControlComponent]
    });
    fixture = TestBed.createComponent(TemplateFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
