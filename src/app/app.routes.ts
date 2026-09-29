import { Routes } from '@angular/router';
import { Body } from './layout/body/body';
import { Admin } from './pages/admin/admin';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Services } from './pages/services/services';
import { Servicesdetail } from './pages/servicesdetail/servicesdetail';
import { Howitworks } from './pages/howitworks/howitworks';
import { Fordrivers } from './pages/fordrivers/fordrivers';
import { Faq } from './pages/faq/faq';
import { Resources } from './pages/resources/resources';
import { Contact } from './pages/contact/contact';
import { Apply } from './pages/apply/apply';
import { Privacy } from './pages/privacy/privacy';
import { Terms } from './pages/terms/terms';
import { Notfound } from './pages/notfound/notfound';

export const routes: Routes = [
    // Standalone Route (No Layout Wrapper)
  { path: 'admin', component: Admin },

  // Layout Group Route (All public routes nested inside Layout)
  {
    path: '',
    component: Body,
    children: [
      { path: '', component: Home },
      { path: 'about', component: About },
      { path: 'services', component: Services },
      { path: 'services/:slug', component: Servicesdetail },
      { path: 'how-it-works', component: Howitworks },
      { path: 'for-drivers', component: Fordrivers },
      { path: 'faq', component: Faq },
      { path: 'resources', component: Resources },
      { path: 'contact', component: Contact },
      { path: 'apply', component: Apply },
      { path: 'privacy', component: Privacy },
      { path: 'terms', component: Terms },
      { path: '**', component: Notfound } // 404 Wildcard
    ]
  }
];
