import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NAVIGATION } from './consts/navigation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  menuOpen = false;
  navigation = NAVIGATION;

  private destroy$ = new Subject();

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.menuOpen = false;
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
