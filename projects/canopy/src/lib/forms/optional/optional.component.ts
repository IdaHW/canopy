import { Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lg-optional',
  templateUrl: './optional.component.html',
  styleUrls: [ './optional.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
})
export class LgOptionalComponent {
  @HostBinding('class.lg-optional') class = true;
}
