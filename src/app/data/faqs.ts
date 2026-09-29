export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    id: '1',
    category: 'General',
    question: 'What is truck dispatching?',
    answer: 'Truck dispatching is the process of coordinating loads for commercial truck drivers and carriers. A dispatcher helps find freight, negotiates rates, communicates with brokers and shippers, manages paperwork, and provides ongoing support to keep a trucking operation moving efficiently.',
  },
  {
    id: '2',
    category: 'General',
    question: 'What does a dispatcher do?',
    answer: 'A dispatcher handles many of the administrative and communication tasks that come with running a trucking business — including searching for loads, negotiating rates with brokers, managing pickup and delivery coordination, assisting with documentation, and providing ongoing support to the driver or carrier.',
  },
  {
    id: '3',
    category: 'General',
    question: 'Who can use Broadwing Solution\'s dispatching services?',
    answer: 'Broadwing Solution primarily serves owner-operators, independent truck drivers, and small-to-medium trucking companies operating in the United States. If you have your own authority and operate commercially, contact us to discuss whether our services fit your operation.',
  },
  {
    id: '4',
    category: 'Equipment',
    question: 'What equipment types do you support?',
    answer: 'We support a range of equipment types including dry van, reefer, flatbed, step deck, power only, hotshot, box truck, and car hauler. Contact our team to discuss your specific equipment and operating requirements.',
  },
  {
    id: '5',
    category: 'Operations',
    question: 'Do you work with owner-operators?',
    answer: 'Yes. Owner-operators are a primary focus of our dispatch services. We understand the unique challenges of running your own trucking business and offer dispatch support designed to help owner-operators spend more time driving and less time on administrative tasks.',
  },
  {
    id: '6',
    category: 'Operations',
    question: 'Can I choose my preferred lanes and operating areas?',
    answer: 'Yes. Your lane preferences, operating areas, and any regions you want to avoid are collected during onboarding and factored into our load search process. While we cannot guarantee loads in every preferred lane, we work to align freight opportunities with your stated preferences.',
  },
  {
    id: '7',
    category: 'Loads',
    question: 'How does load booking work?',
    answer: 'Our team searches for loads that match your equipment, location, and preferences. When a potential load is identified, we present it to you for approval. You make the final decision on every load — we never book a load without your authorization.',
  },
  {
    id: '8',
    category: 'Rates',
    question: 'Do you help with rate negotiations?',
    answer: 'Yes. Rate negotiation is part of our dispatch service. Our team communicates with brokers and shippers to discuss rate and terms. We cannot guarantee specific rates, as negotiations depend on market conditions and broker willingness, but we work professionally to support your rate goals.',
  },
  {
    id: '9',
    category: 'Support',
    question: 'Do you provide 24/7 dispatch support?',
    answer: 'Our team strives to provide responsive dispatch support. Contact us to discuss current availability and communication hours so we can ensure our service fits your operating schedule.',
  },
  {
    id: '10',
    category: 'Getting Started',
    question: 'How do I sign up with Broadwing Solution?',
    answer: 'Complete the carrier application through our Sign Up as a Driver page. Our team will review your application and contact you regarding next steps. The process includes sharing information about your business, equipment, authority, and operating preferences.',
  },
  {
    id: '11',
    category: 'Getting Started',
    question: 'What documents are required to get started?',
    answer: 'Typical documents include your operating authority, certificate of insurance, W-9, and motor carrier information. Specific requirements may vary based on your operation. Our team will communicate document requirements during the onboarding process.',
  },
  {
    id: '12',
    category: 'Getting Started',
    question: 'How does the application process work?',
    answer: 'The application involves sharing your personal, business, equipment, authority, and preference information through our secure online form. After submission, our team reviews your application and contacts you to discuss next steps and begin onboarding.',
  },
  {
    id: '13',
    category: 'Rates',
    question: 'How is Broadwing Solution compensated?',
    answer: 'Broadwing Solution charges a dispatch service fee. Specific fee information is provided during the onboarding process. Contact our team to discuss current service terms.',
  },
  {
    id: '14',
    category: 'Loads',
    question: 'Can you guarantee loads every week?',
    answer: 'We cannot guarantee load availability, as freight markets fluctuate based on seasonality, economic conditions, lane demand, and other factors. Our team actively searches for suitable freight, but specific load volume cannot be promised.',
  },
  {
    id: '15',
    category: 'Operations',
    question: 'Do I maintain control of my truck and business decisions?',
    answer: 'Absolutely. You always retain full control of your truck and business. Broadwing Solution is a dispatch and administrative support service. Every load decision is yours — we never commit your truck without your approval.',
  },
];
