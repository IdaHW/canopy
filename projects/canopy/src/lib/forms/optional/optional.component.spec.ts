import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgOptionalComponent } from './optional.component';

describe('LgOptionalComponent', () => {
  let component: LgOptionalComponent;
  let fixture: ComponentFixture<LgOptionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LgOptionalComponent ],
    }).compileComponents();

    fixture = TestBed.createComponent(LgOptionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the default class', () => {
    expect(fixture.nativeElement.classList.contains('lg-optional')).toBe(true);
  });

  it('should display "(optional)" text', () => {
    expect(fixture.nativeElement.textContent.trim()).toBe('(optional)');
  });
});
