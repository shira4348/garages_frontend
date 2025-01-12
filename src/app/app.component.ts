import { Component, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BidiModule, Directionality } from '@angular/cdk/bidi';
import { Subscription } from 'rxjs';
import { LayoutComponent } from './components/layout/layout.component';

@Component({
  selector: 'app-root',
  imports: [BidiModule, LayoutComponent],
  template: '<app-layout></app-layout>',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnDestroy {
  title = 'garage-management-client';

  private flipDirection(): void {
    this.isRtl = !this.isRtl;
    console.log('Direction flipped:', this.isRtl ? 'RTL' : 'LTR');
  }

  /** Whether the widget is in RTL mode or not. */
  private isRtl: boolean;

  /** Subscription to the Directionality change EventEmitter. */
  private _dirChangeSubscription = Subscription.EMPTY;

  constructor(dir: Directionality) {
    this.isRtl = dir.value === 'rtl';

    this._dirChangeSubscription = dir.change.subscribe(() => {
      this.flipDirection();
    });
  }

  ngOnDestroy() {
    this._dirChangeSubscription.unsubscribe();
  }
}
