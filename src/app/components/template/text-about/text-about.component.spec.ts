import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAboutComponent } from './text-about.component';

describe('TextAboutComponent', () => {
  let component: TextAboutComponent;
  let fixture: ComponentFixture<TextAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextAboutComponent]
    });
    fixture = TestBed.createComponent(TextAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
