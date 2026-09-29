import { Component, OnInit, OnDestroy, HostListener, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { SERVICES } from '../../data/services'; // Adjust import path as needed

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit, OnDestroy {
  private router = inject(Router);
  private routerSub!: Subscription;

  // Reactive state management using Signals
  mobileOpen = signal<boolean>(false);
  scrolled = signal<boolean>(false);
  servicesOpen = signal<boolean>(false);
  currentPath = signal<string>('/');

  readonly services = SERVICES;

  readonly navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Services', to: '/services', hasDropdown: true },
    { label: 'How It Works', to: '/how-it-works' },
    { label: 'For Drivers', to: '/for-drivers' },
    { label: 'Resources', to: '/resources' },
    { label: 'Contact Us', to: '/contact' },
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled.set(window.scrollY > 20);
  }

  ngOnInit() {
    this.currentPath.set(this.router.url);

    // Close menus and update current path on route navigation
    this.routerSub = this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.currentPath.set(event.urlAfterRedirects);
        this.mobileOpen.set(false);
        this.servicesOpen.set(false);
      });
  }

  ngOnDestroy() {
    if (this.routerSub) {
      this.routerSub.unsubscribe();
    }
  }

  toggleMobileMenu() {
    this.mobileOpen.update((val) => !val);
  }

  isActive(to: string): boolean {
    const path = this.currentPath();
    return to === '/' ? path === '/' : path.startsWith(to);
  }
}
