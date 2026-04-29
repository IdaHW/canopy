import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgFooterSocialComponent } from './footer-social.component';

describe('LgFooterSocialComponent', () => {
  let component: LgFooterSocialComponent;
  let fixture: ComponentFixture<LgFooterSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LgFooterSocialComponent ],
    }).compileComponents();

    fixture = TestBed.createComponent(LgFooterSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct class', () => {
    expect(fixture.nativeElement.classList.contains('lg-footer-social')).toBe(true);
  });

  it('should have the correct role', () => {
    expect(fixture.nativeElement.getAttribute('role')).toBe('navigation');
  });

  it('should have the correct aria-label', () => {
    expect(fixture.nativeElement.getAttribute('aria-label')).toBe('Social media links');
  });
});
