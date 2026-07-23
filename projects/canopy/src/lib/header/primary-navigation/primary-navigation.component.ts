import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  HostBinding,
  Input,
  QueryList,
  ViewEncapsulation,
  inject,
} from '@angular/core';

import { LgHideAtDirective } from '../../hide-at';
import { LgLinkMenuComponent } from '../../link-menu';
import { LgShowAtDirective } from '../../show-at';
import { LgAccountMenuMobileItemDirective } from '../account-menu/account-menu-mobile-item.directive';

@Component({
  selector: 'lg-primary-nav',
  templateUrl: './primary-navigation.component.html',
  styleUrls: [ './primary-navigation.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'lg-primary-nav',
    tabindex: '-1',
    role: 'navigation',
    id: 'primary-nav',
    'aria-label': 'Main navigation',
  },
  imports: [ LgHideAtDirective, LgShowAtDirective, LgLinkMenuComponent ],
})
export class LgPrimaryNavComponent {
  private cdr = inject(ChangeDetectorRef);
  private _showResponsiveMenu = false;

  @ContentChildren(LgAccountMenuMobileItemDirective, { descendants: true })
  accountMenuMobileItems: QueryList<LgAccountMenuMobileItemDirective>;

  @Input() set showResponsiveMenu(show: boolean) {
    this._showResponsiveMenu = show;
    this.cdr.markForCheck();
  }
  get showResponsiveMenu() {
    return this._showResponsiveMenu;
  }

  @HostBinding('class.lg-primary-nav--active') get activeClass() {
    return this.showResponsiveMenu;
  }
  @HostBinding('attr.aria-hidden') get ariaHidden() {
    return this.showResponsiveMenu
      ? false
      : null;
  }
}
