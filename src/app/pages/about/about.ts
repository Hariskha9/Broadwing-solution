import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [CommonModule, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  readonly heroImage = 'https://images.unsplash.com/photo-1695222833131-54ee679ae8e5?w=1400&h=700&fit=crop&auto=format';
  readonly teamImage = 'https://images.unsplash.com/photo-1473445730015-841f29a9490b?w=800&h=600&fit=crop&auto=format';

  readonly whyCards = [
    { icon: '🎯', title: 'Professional Dispatch Support', desc: 'Experienced team dedicated to coordinating loads and supporting your carrier operation.' },
    { icon: '🔍', title: 'Load Search Assistance', desc: 'Active freight search across major platforms and broker networks to find suitable loads.' },
    { icon: '💼', title: 'Negotiation Support', desc: 'Professional broker communication to work toward rates that support your business.' },
    { icon: '🗺️', title: 'Route Planning', desc: 'Lane-preference-based load sourcing to reduce deadhead miles and support your schedule.' },
    { icon: '📋', title: 'Administrative Assistance', desc: 'Paperwork coordination, document management, and back-office support.' },
    { icon: '📞', title: 'Carrier-Focused Communication', desc: 'Transparent, consistent updates so you always know the status of your loads.' },
    { icon: '⚙️', title: 'Flexible Dispatching', desc: 'Tailored to your equipment type, preferred lanes, and operating preferences.' },
    { icon: '🤝', title: 'Dedicated Support', desc: 'A team that represents your interests in every broker and shipper interaction.' },
  ];

  readonly values = [
    { label: 'Reliability', desc: 'Consistent, professional dispatch service you can count on.', color: 'bg-blue-600' },
    { label: 'Transparency', desc: 'Clear communication about everything we do on your behalf.', color: 'bg-blue-700' },
    { label: 'Communication', desc: 'Responsive, proactive updates throughout every load.', color: 'bg-blue-800' },
    { label: 'Professionalism', desc: 'High standards in every broker interaction and driver communication.', color: 'bg-orange-500' },
    { label: 'Growth', desc: 'Supporting carriers in building efficient, profitable operations.', color: 'bg-orange-600' },
    { label: 'Customer Service', desc: 'Driver and carrier needs come first in every decision.', color: 'bg-orange-700' },
  ];
}
