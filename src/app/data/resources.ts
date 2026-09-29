export interface ResourcePost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  imageId: string;
  slug: string;
}

export const resources: ResourcePost[] = [
  {
    id: '1',
    title: 'Understanding Freight Rates: What Every Owner-Operator Should Know',
    excerpt: 'Freight rates fluctuate based on seasonality, fuel costs, lane demand, and market conditions. Here is what owner-operators should understand about rate trends to make better decisions.',
    category: 'Freight Market Education',
    date: 'September 20, 2026',
    readTime: '6 min read',
    imageId: '1601584115197-04ecc0da31d7',
    slug: 'understanding-freight-rates',
  },
  {
    id: '2',
    title: 'Owner-Operator 101: Getting Started in the Trucking Business',
    excerpt: 'Thinking about becoming an owner-operator? This guide covers the basics of starting your owner-operator business, from obtaining your authority to finding your first loads.',
    category: 'Owner-Operator Tips',
    date: 'September 15, 2026',
    readTime: '8 min read',
    imageId: '1695222833131-54ee679ae8e5',
    slug: 'owner-operator-101',
  },
  {
    id: '3',
    title: 'What Does a Truck Dispatcher Do? A Driver\'s Guide',
    excerpt: 'Many drivers are curious about how truck dispatching works and what to expect from a dispatching service. Here is a straightforward breakdown of the dispatcher\'s role.',
    category: 'Dispatching',
    date: 'September 10, 2026',
    readTime: '5 min read',
    imageId: '1592805144716-feeccccef5ac',
    slug: 'what-does-a-truck-dispatcher-do',
  },
  {
    id: '4',
    title: 'Deadhead Miles: How to Reduce Empty Miles and Protect Your Profit',
    excerpt: 'Deadhead miles cost money and wear on your equipment. Smart load planning and lane strategy can significantly reduce the percentage of miles you run empty.',
    category: 'Load Management',
    date: 'September 5, 2026',
    readTime: '5 min read',
    imageId: '1592838064575-70ed626d3a0e',
    slug: 'reduce-deadhead-miles',
  },
  {
    id: '5',
    title: 'Detention Pay: What It Is and How to Document It',
    excerpt: 'Detention happens when loading or unloading takes longer than the agreed free time. Understanding how to document detention properly is essential for getting the pay you are owed.',
    category: 'Trucking Tips',
    date: 'August 28, 2026',
    readTime: '7 min read',
    imageId: '1591768793355-74d04bb6608f',
    slug: 'detention-pay-documentation',
  },
  {
    id: '6',
    title: 'ELD Requirements: What Owner-Operators Need to Know',
    excerpt: 'Electronic Logging Device requirements apply to most commercial motor vehicle drivers. Here is a practical overview of what owner-operators need to understand about ELD compliance.',
    category: 'Compliance',
    date: 'August 22, 2026',
    readTime: '6 min read',
    imageId: '1485575301924-6891ef935dcd',
    slug: 'eld-requirements-owner-operators',
  },
  {
    id: '7',
    title: 'How to Read a Rate Confirmation: A Driver\'s Checklist',
    excerpt: 'Rate confirmations contain important details about your load, pay, and obligations. Here is what to review carefully before signing and starting a load.',
    category: 'Dispatching',
    date: 'August 15, 2026',
    readTime: '5 min read',
    imageId: '1473445730015-841f29a9490b',
    slug: 'how-to-read-rate-confirmation',
  },
  {
    id: '8',
    title: 'Factoring for Truckers: How Invoice Factoring Works',
    excerpt: 'Freight factoring allows carriers to get paid quickly by selling invoices to a factoring company. Here is how the process works and what to consider when choosing a factoring provider.',
    category: 'Business Growth',
    date: 'August 8, 2026',
    readTime: '7 min read',
    imageId: '1778015862504-b877b548266e',
    slug: 'freight-factoring-truckers',
  },
  {
    id: '9',
    title: 'Operating as a Flatbed Carrier: Tips for New Owner-Operators',
    excerpt: 'Flatbed trucking involves unique challenges including load securing, tarping, and specialized cargo. Here are practical tips for flatbed owner-operators just getting started.',
    category: 'Trucking Tips',
    date: 'August 1, 2026',
    readTime: '6 min read',
    imageId: '1778016193071-c841d6a2fc6a',
    slug: 'flatbed-owner-operator-tips',
  },
];

export const categories = [
  'All',
  'Trucking Tips',
  'Dispatching',
  'Owner-Operator Tips',
  'Freight Market Education',
  'Compliance',
  'Business Growth',
  'Load Management',
];
