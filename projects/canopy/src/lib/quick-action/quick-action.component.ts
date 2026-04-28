import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

/**
 *  @deprecated Use button or link instead. Will be removed in a future major release (date/version TBC).
 */
@Component({
  selector: '[lg-quick-action]',
  templateUrl: './quick-action.component.html',
  styleUrls: [ './quick-action.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class LgQuickActionComponent {
  @HostBinding('class.lg-quick-action') class = true;
}
