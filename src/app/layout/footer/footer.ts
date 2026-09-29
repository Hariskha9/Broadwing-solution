import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SERVICES } from '../../data/services'; // Adjust the import path as needed

@Component({
  selector: 'app-footer',
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  readonly year: number = new Date().getFullYear();
  readonly services = SERVICES;

  readonly quickLinks = [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'How It Works', to: '/how-it-works' },
    { label: 'For Drivers', to: '/for-drivers' },
    { label: 'Resources', to: '/resources' },
    { label: 'Contact Us', to: '/contact' },
  ];

  readonly supportLinks = [
    { label: 'FAQ', to: '/faq' },
    { label: 'Resources', to: '/resources' },
    { label: 'Apply Now', to: '/apply' },
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Terms & Conditions', to: '/terms' },
  ];

  readonly socialLinks = [
    {
      name: 'Facebook',
      href: '#',
      iconType: 'facebook',
    },
    {
      name: 'LinkedIn',
      href: '#',
      iconType: 'linkedin',
    },
    {
      name: 'Instagram',
      href: '#',
      iconType: 'instagram',
    },
    {
      name: 'X / Twitter',
      href: '#',
      iconType: 'twitter',
    },
  ];
}
