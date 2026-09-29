import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Application {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  businessName: string;
  equipmentType: string;
  state: string;
  mcNumber: string;
  dotNumber: string;
  submittedAt: string;
  status: string;
  notes: string;
}

export interface Message {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  equipmentType: string;
  submittedAt: string;
  status: string;
}
export type AdminView = 'dashboard' | 'applications' | 'application-detail' | 'messages' | 'message-detail';
@Component({
  selector: 'app-admin',
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin implements OnInit {
  authenticated = false;
  loginUsername = '';
  loginPassword = '';
  loginError = '';

  view: AdminView = 'dashboard';
  applications: Application[] = [];
  messages: Message[] = [];
  selectedApp: Application | null = null;
  selectedMsg: Message | null = null;

  searchTerm = '';
  statusFilter = 'all';
  noteText = '';

  readonly applicationStatuses = [
    'new',
    'under-review',
    'docs-required',
    'approved',
    'rejected',
    'active',
    'inactive'
  ];

  readonly statusColors: Record<string, string> = {
    new: 'bg-blue-100 text-blue-700',
    'under-review': 'bg-yellow-100 text-yellow-700',
    'docs-required': 'bg-orange-100 text-orange-700',
    approved: 'bg-green-100 text-green-700',
    rejected: 'bg-red-100 text-red-700',
    active: 'bg-emerald-100 text-emerald-700',
    inactive: 'bg-slate-100 text-slate-600',
    read: 'bg-slate-100 text-slate-600',
    archived: 'bg-gray-100 text-gray-500'
  };

  ngOnInit(): void {
    if (this.authenticated) {
      this.loadData();
    }
  }

  loadData(): void {
    this.applications = JSON.parse(localStorage.getItem('bw_applications') || '[]');
    this.messages = JSON.parse(localStorage.getItem('bw_messages') || '[]');
  }

  login(e: Event): void {
    e.preventDefault();
    if (this.loginUsername === 'admin' && this.loginPassword === 'broadwing2024') {
      this.authenticated = true;
      this.loginError = '';
      this.loadData();
    } else {
      this.loginError = 'Invalid username or password';
    }
  }

  logout(): void {
    this.authenticated = false;
    this.view = 'dashboard';
  }

  getStatusColor(status: string): string {
    return this.statusColors[status] || 'bg-slate-100 text-slate-500';
  }

  updateAppStatus(id: string, status: string): void {
    this.applications = this.applications.map(a => a.id === id ? { ...a, status } : a);
    localStorage.setItem('bw_applications', JSON.stringify(this.applications));
    if (this.selectedApp?.id === id) {
      this.selectedApp.status = status;
    }
  }

  saveNote(id: string): void {
    this.applications = this.applications.map(a => a.id === id ? { ...a, notes: this.noteText } : a);
    localStorage.setItem('bw_applications', JSON.stringify(this.applications));
    if (this.selectedApp?.id === id) {
      this.selectedApp.notes = this.noteText;
    }
  }

  archiveMessage(id: string): void {
    this.messages = this.messages.map(m => m.id === id ? { ...m, status: 'archived' } : m);
    localStorage.setItem('bw_messages', JSON.stringify(this.messages));
    if (this.selectedMsg?.id === id) {
      this.selectedMsg.status = 'archived';
    }
  }

  get filteredApps(): Application[] {
    return this.applications.filter(a => {
      const matchSearch = !this.searchTerm || 
        `${a.firstName} ${a.lastName} ${a.email} ${a.businessName} ${a.id}`
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase());
      const matchStatus = this.statusFilter === 'all' || a.status === this.statusFilter;
      return matchSearch && matchStatus;
    });
  }

  get stats() {
    return {
      total: this.applications.length,
      new: this.applications.filter(a => a.status === 'new').length,
      active: this.applications.filter(a => a.status === 'active').length,
      messages: this.messages.filter(m => m.status === 'new').length
    };
  }

  openAppDetail(app: Application): void {
    this.selectedApp = app;
    this.noteText = app.notes || '';
    this.view = 'application-detail';
  }

  openMsgDetail(msg: Message): void {
    this.selectedMsg = msg;
    this.view = 'message-detail';
  }
}