import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

// Import FAQs data directly
import { faqs } from '../../data/faqs';

export interface DriverBenefit {
  title: string;
  desc: string;
  svgPath: string;
}

export interface OperatingPreference {
  label: string;
  desc: string;
}

export interface OperatorType {
  icon: string;
  title: string;
  desc: string;
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

@Component({
  selector: 'app-fordrivers',
  imports: [CommonModule, RouterLink],
  templateUrl: './fordrivers.html',
  styleUrl: './fordrivers.css',
})
export class Fordrivers {
  heroImage = 'https://images.unsplash.com/photo-1592805144716-feeccccef5ac?w=1400&h=800&fit=crop&auto=format';

  // Driver benefits data
  driverBenefits: DriverBenefit[] = [
    {
      title: 'Dedicated Load Search',
      desc: 'Our team actively searches freight markets to find loads matching your equipment, preferred lanes, and rate goals — so you spend more time driving.',
      svgPath: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
    },
    {
      title: 'Rate Negotiation Support',
      desc: 'We communicate professionally with brokers and shippers to negotiate rates and work toward terms that support your business.',
      svgPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      title: 'Administrative Assistance',
      desc: 'Paperwork, rate confirmations, document coordination, and back-office support handled professionally on your behalf.',
      svgPath: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
    },
    {
      title: 'Broker Communication',
      desc: 'We handle broker calls, status updates, and coordination — reducing the interruptions while you are on the road.',
      svgPath: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
    },
    {
      title: 'Flexible Operating Preferences',
      desc: 'Tell us your preferred lanes, home time, mileage goals, and rate requirements — and we will search freight to match.',
      svgPath: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7'
    },
    {
      title: 'You Stay in Control',
      desc: 'You approve every load before we book anything. Your truck, your business, your decisions — always.',
      svgPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
    }
  ];

  equipmentTypes: string[] = [
    'Dry Van',
    'Reefer',
    'Flatbed',
    'Step Deck',
    'Power Only',
    'Hotshot',
    'Box Truck',
    'Car Hauler'
  ];

  operatingPreferences: OperatingPreference[] = [
    { label: 'Preferred Lanes', desc: 'Specify routes and states you prefer to run' },
    { label: 'Home Time', desc: 'Daily, weekly, bi-weekly, or flexible' },
    { label: 'Rate Goals', desc: 'Share your minimum rate and RPM targets' },
    { label: 'Deadhead Tolerance', desc: 'Tell us how far you will run empty' },
    { label: 'Load Types', desc: 'FTL, partial, dedicated, or flexible' },
    { label: 'Operating Area', desc: 'Local, regional, or OTR' }
  ];

  operatorTypes: OperatorType[] = [
    { icon: '🚛', title: 'Owner-Operators', desc: 'Whether you own one truck or a small fleet, our dispatch service is built around your operation.' },
    { icon: '🆕', title: 'New Owner-Operators', desc: 'Just getting your authority? We can help new carriers navigate their first loads with professional support.' },
    { icon: '🔄', title: 'Experienced Drivers', desc: 'If you have been driving for years but want to reduce administrative work, Broadwing Solution is here.' },
    { icon: '📍', title: 'Regional & OTR Carriers', desc: 'Whether you run regional lanes or go coast to coast, our team supports your operating area.' }
  ];

  // Accordion State Signal
  openFaq = signal<string | null>(null);

  // Filter first 6 FAQs matching relevant categories
  driverFaqs = computed<FAQItem[]>(() => {
    const categories = ['General', 'Operations', 'Getting Started', 'Loads'];
    return (faqs as FAQItem[])
      .filter((f) => categories.includes(f.category))
      .slice(0, 6);
  });

  toggleFaq(id: string): void {
    this.openFaq.update((currentId) => (currentId === id ? null : id));
  }
}
