import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {SERVICES } from '../../data/services';

interface Stat {
  icon: string;
  label: string;
  desc: string;
}

interface ProcessStep {
  n: string;
  title: string;
  desc: string;
}

interface Benefit {
  iconType: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  readonly heroImage = 'https://images.unsplash.com/photo-1592805144716-feeccccef5ac?w=1600&h=900&fit=crop&auto=format';
  readonly aboutImage = 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop&auto=format';

  readonly stats: Stat[] = [
    { icon: '🕐', label: '24/7 Dispatch Support', desc: 'Available when you need us' },
    { icon: '🗺️', label: 'Nationwide Coverage', desc: 'All 48 contiguous states' },
    { icon: '🚛', label: 'Multiple Equipment Types', desc: 'Dry van, reefer, flatbed & more' },
    { icon: '📋', label: 'Full Administrative Support', desc: 'Paperwork and docs handled' },
    { icon: '💬', label: 'Dedicated Communication', desc: 'Your team, your advocate' },
    { icon: '⚡', label: 'Fast Load Coordination', desc: 'Efficient, professional service' },
  ];

  readonly processSteps: ProcessStep[] = [
    { n: '01', title: 'Sign Up', desc: 'Complete the carrier application with your business, equipment, and preference details.' },
    { n: '02', title: 'Review', desc: 'Our team reviews your carrier profile and equipment information.' },
    { n: '03', title: 'Setup', desc: 'We collect your lane preferences, operating requirements, and rate goals.' },
    { n: '04', title: 'Load Search', desc: 'Our dispatch team searches for suitable freight that fits your operation.' },
    { n: '05', title: 'Dispatch & Support', desc: 'We coordinate from booking through delivery, communicating every step.' },
  ];

  readonly featuredServices: any[] = SERVICES.slice(0, 6);

  readonly benefits: Benefit[] = [
    {
      iconType: 'shield',
      title: 'Carrier-Focused Service',
      desc: 'Every decision we make is with your operation in mind. Your success is our priority.',
    },
    {
      iconType: 'chat',
      title: 'Transparent Communication',
      desc: 'You always know what is happening with your loads. No surprises, no runaround.',
    },
    {
      iconType: 'document',
      title: 'Administrative Relief',
      desc: 'We handle the paperwork, broker calls, and coordination so you can focus on the road.',
    },
    {
      iconType: 'trend',
      title: 'Professional Growth Support',
      desc: 'We understand your business goals and work toward load opportunities that help you grow.',
    },
  ];
}
