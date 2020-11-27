import { TemplateRef, ViewContainerRef } from '@angular/core';
import { InvalidMessageDirective } from './invalid-message.directive';
import { InvalidTypeDirective } from './invalid-type.directive';

describe('InvalidTypeDirective', () => {
  let invalidMessage: InvalidMessageDirective;
  let templateRef: TemplateRef<any>;
  let viewContainer: ViewContainerRef;
  it('should create an instance', () => {
    const directive = new InvalidTypeDirective(invalidMessage, templateRef, viewContainer);
    expect(directive).toBeTruthy();
  });
});
