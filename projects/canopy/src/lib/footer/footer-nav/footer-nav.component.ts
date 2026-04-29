import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  forwardRef,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';

import { LgFooterNavItemComponent } from '../footer-nav-item/footer-nav-item.component';

@Component({
  selector: 'lg-footer-nav',
  templateUrl: './footer-nav.component.html',
  styleUrls: [ 'footer-nav.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'lg-footer-nav',
    role: 'navigation',
    'aria-label': 'Footer links',
  },
  standalone: true,
})
export class LgFooterNavComponent implements AfterViewChecked {
  private currentFooterNavItemLength: number;

  @ContentChildren(forwardRef(() => LgFooterNavItemComponent), {
    descendants: true,
  })
  footerNavItemComponents: QueryList<LgFooterNavItemComponent>;

  ngAfterViewChecked(): void {
    const footerNavItemLength = this.footerNavItemComponents?.toArray().length;

    if (footerNavItemLength && footerNavItemLength !== this.currentFooterNavItemLength) {
      this.currentFooterNavItemLength = footerNavItemLength;
    }
  }
}
