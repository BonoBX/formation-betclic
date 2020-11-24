import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { InvalidMessageDirective } from './invalid-message.directive';

@Directive({
  selector: '[invalidType]'
})
export class InvalidTypeDirective {

  @Input('invalidType') type: string;
  private hasView: boolean = false;

  constructor(
    private invalidMessage: InvalidMessageDirective,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  ngOnInit() {
    this.invalidMessage.controlValue$.subscribe(
      () => {
        this.setVisible();
      }
    )
  }

  public setVisible() {
    if (this.invalidMessage.match(this.type)) {
      if (!this.hasView) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.hasView = true;
      }
    } else {
      if (this.hasView) {
        this.viewContainer.clear();
        this.hasView = false;
      }
    }
  }
}
