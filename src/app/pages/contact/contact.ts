import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

export const EQUIPMENT_TYPES = [
  'Dry Van',
  'Reefer',
  'Flatbed',
  'Step Deck',
  'Power Only',
  'Hotshot',
  'Box Truck',
  'Car Hauler',
  'Other'
];

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  equipmentTypes = EQUIPMENT_TYPES;
  
  contactForm: FormGroup;
  submitted = false;
  submitting = false;

  quickLinks = [
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Our Services', href: '/services' },
    { label: 'FAQ', href: '/faq' },
    { label: 'For Drivers', href: '/for-drivers' }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      company: [''],
      phone: [''],
      email: ['', [Validators.required, Validators.email]],
      equipmentType: [''],
      subject: [''],
      message: ['', Validators.required]
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched || this.submitting));
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.submitting = true;

    setTimeout(() => {
      const formValues = this.contactForm.value;
      const existingMessages = JSON.parse(localStorage.getItem('bw_messages') || '[]');
      
      const newMessage = {
        id: `MSG-${Date.now()}`,
        ...formValues,
        submittedAt: new Date().toISOString(),
        status: 'new'
      };

      localStorage.setItem('bw_messages', JSON.stringify([newMessage, ...existingMessages]));
      
      this.submitted = true;
      this.submitting = false;
    }, 1000);
  }

  resetForm(): void {
    this.submitted = false;
    this.contactForm.reset();
  }
}
