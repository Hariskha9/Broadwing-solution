import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

// Import your FAQs data directly from the relative path
import { faqs } from '../../data/faqs';

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
})
export class Faq {
  categories: string[] = [
    'All',
    'General',
    'Equipment',
    'Operations',
    'Loads',
    'Rates',
    'Support',
    'Getting Started'
  ];

  // State Signals
  activeCategory = signal<string>('All');
  searchQuery = signal<string>('');
  openId = signal<string | null>(null);

  // Initialize signal directly with the imported faqs array
  faqs = signal<FAQItem[]>(faqs);

  // Computed signal to recalculate filtered FAQs when search or activeCategory changes
  filteredFaqs = computed(() => {
    const category = this.activeCategory();
    const search = this.searchQuery().toLowerCase().trim();

    return this.faqs().filter((f) => {
      const matchCat = category === 'All' || f.category === category;
      const matchSearch =
        !search ||
        f.question.toLowerCase().includes(search) ||
        f.answer.toLowerCase().includes(search);
      return matchCat && matchSearch;
    });
  });

  setActiveCategory(cat: string): void {
    this.activeCategory.set(cat);
  }

  toggleFaq(id: string): void {
    this.openId.update((currentId) => (currentId === id ? null : id));
  }

  clearFilters(): void {
    this.searchQuery.set('');
    this.activeCategory.set('All');
  }
}
