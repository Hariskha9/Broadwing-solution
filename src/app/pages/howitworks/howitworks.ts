import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface Step {
  n: string;
  title: string;
  desc: string;
  details: string[];
}

@Component({
  selector: 'app-howitworks',
  imports: [CommonModule, RouterLink],
  templateUrl: './howitworks.html',
  styleUrl: './howitworks.css',
})
export class Howitworks {
  steps: Step[] = [
    {
      n: '01',
      title: 'Sign Up',
      desc: 'Complete the carrier application online. Share your personal information, business details, and contact information to get started.',
      details: [
        'Submit the online driver and carrier application',
        'Provide personal and business contact information',
        'Describe your commercial trucking experience',
        'No commitment required to apply'
      ]
    },
    {
      n: '02',
      title: 'Review',
      desc: 'Our team reviews your carrier application, equipment information, authority status, and documentation to ensure we can properly support your operation.',
      details: [
        'Carrier and equipment information review',
        'Operating authority and insurance verification',
        'Required documentation collection',
        'Our team contacts you with any questions'
      ]
    },
    {
      n: '03',
      title: 'Setup',
      desc: 'We collect your dispatch preferences, lane requirements, equipment specifications, rate goals, and operating requirements to build your carrier profile.',
      details: [
        'Preferred lanes and operating areas',
        'Rate and mileage preferences',
        'Equipment type and specifications',
        'Home time and scheduling requirements',
        'Communication preferences'
      ]
    },
    {
      n: '04',
      title: 'Load Search',
      desc: 'Our dispatch team actively searches for freight opportunities that match your equipment, preferred lanes, rate goals, and availability.',
      details: [
        'Active load board searching across major platforms',
        'Broker network and direct relationship sourcing',
        'Equipment and lane-preference-based matching',
        'Rate review before load presentation',
        'You approve every load before booking'
      ]
    },
    {
      n: '05',
      title: 'Dispatch & Support',
      desc: 'Broadwing Solution coordinates your load from booking through delivery — handling broker communication, documentation, status updates, and support throughout.',
      details: [
        'Load booking and rate confirmation management',
        'Pickup and delivery coordination',
        'Broker and shipper communication',
        'Status updates and load tracking support',
        'Detention and accessorial documentation assistance',
        'Problem escalation support'
      ]
    }
  ];
}
