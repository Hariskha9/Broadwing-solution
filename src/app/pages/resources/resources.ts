import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { resources, categories } from '../../data/resources';

@Component({
  selector: 'app-resources',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './resources.html',
  styleUrl: './resources.css',
})
export class Resources {
  categories: string[] = categories;
  resources: any[] = resources;

  activeCategory: string = 'All';
  search: string = '';

  get filteredResources(): any[] {
    return this.resources.filter(r => {
      const matchCat = this.activeCategory === 'All' || r.category === this.activeCategory;
      const matchSearch =
        !this.search ||
        r.title.toLowerCase().includes(this.search.toLowerCase()) ||
        r.excerpt.toLowerCase().includes(this.search.toLowerCase());
      return matchCat && matchSearch;
    });
  }

  setCategory(cat: string): void {
    this.activeCategory = cat;
  }

  clearFilters(): void {
    this.search = '';
    this.activeCategory = 'All';
  }
}
