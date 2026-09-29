import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { getServiceBySlug, SERVICES } from '../../data/services';

@Component({
  selector: 'app-servicesdetail',
  imports: [CommonModule, RouterLink],
  templateUrl: './servicesdetail.html',
  styleUrl: './servicesdetail.css',
})
export class Servicesdetail implements OnInit {
  service: any | undefined;
  prevService: any | null = null;
  nextService: any | null = null;
  heroImage: string = '';
  openFaqIndex: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug') || '';
      this.loadService(slug);
    });
  }

  loadService(slug: string): void {
    const currentService = getServiceBySlug(slug);

    if (!currentService) {
      this.router.navigate(['/services'], { replaceUrl: true });
      return;
    }

    this.service = currentService;
    this.openFaqIndex = null;

    const currentIndex = SERVICES.findIndex(s => s.slug === slug);
    this.prevService = currentIndex > 0 ? SERVICES[currentIndex - 1] : null;
    this.nextService = currentIndex < SERVICES.length - 1 ? SERVICES[currentIndex + 1] : null;

    this.heroImage = `https://images.unsplash.com/photo-${this.service.imageId}?w=1400&h=600&fit=crop&auto=format`;
  }

  toggleFaq(index: number): void {
    this.openFaqIndex = this.openFaqIndex === index ? null : index;
  }
}