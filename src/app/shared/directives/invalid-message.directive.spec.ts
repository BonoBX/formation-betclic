import { ElementRef, Renderer2 } from '@angular/core';
import { ControlContainer, ReactiveFormsModule } from '@angular/forms';
import { InvalidMessageDirective } from './invalid-message.directive';

describe('InvalidMessageDirective', () => {
  let fg: ControlContainer;
  let renderer: Renderer2;
  let el: ElementRef;
  it('should create an instance', () => {
    const directive = new InvalidMessageDirective(fg, renderer, el);
    expect(directive).toBeTruthy();
  });
});
