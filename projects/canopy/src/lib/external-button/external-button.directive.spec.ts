import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LgExternalButtonDirective } from './external-button.directive';

@Component({
  template: ` <button lgExternalButton>Button 1</button>
    <button lgExternalButton>Button 2</button>
    <button lgExternalButton [id]="customId">Button 3</button>`,
  standalone: true,
  imports: [ LgExternalButtonDirective ],
})
class TestComponent {
  customId = 'custom-id';
}

describe('LgExternalButtonDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let buttonElements: Array<DebugElement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TestComponent ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();

    buttonElements = fixture.debugElement.queryAll(
      By.directive(LgExternalButtonDirective),
    );
  });

  it('should create', () => {
    expect(buttonElements.length).toBe(3);
  });

  it('should have auto-generated IDs', () => {
    const button1 = buttonElements[0].nativeElement;
    const button2 = buttonElements[1].nativeElement;

    expect(button1.id).toMatch(/^lg-external-button-\d+$/);
    expect(button2.id).toMatch(/^lg-external-button-\d+$/);
    expect(button1.id).not.toBe(button2.id);
  });

  it('should accept a custom ID', () => {
    const button3 = buttonElements[2].nativeElement;

    expect(button3.id).toBe('custom-id');
  });

  it('should update ID when input changes', () => {
    const button3 = buttonElements[2].nativeElement;

    expect(button3.id).toBe('custom-id');

    fixture.componentInstance.customId = 'new-custom-id';
    fixture.detectChanges();

    expect(button3.id).toBe('new-custom-id');
  });
});
