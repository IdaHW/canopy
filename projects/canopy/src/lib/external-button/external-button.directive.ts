import { Directive, HostBinding, Input } from '@angular/core';

let nextUniqueId = 0;

@Directive({
  selector: '[lgExternalButton]',
  standalone: true,
})
export class LgExternalButtonDirective {
  @Input()
  @HostBinding('attr.id')
  id = `lg-external-button-${nextUniqueId++}`;
}
