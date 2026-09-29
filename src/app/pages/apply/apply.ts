import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface UploadedFile {
  name: string;
  size: number;
  type: string;
}

@Component({
  selector: 'app-apply',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './apply.html',
  styleUrl: './apply.css',
})
export class Apply implements OnInit {
  step = 1;
  submitted = false;
  submitting = false;
  refNumber = '';
  errors: string[] = [];

  usStates = [
    'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA',
    'KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ',
    'NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT',
    'VA','WA','WV','WI','WY'
  ];

  stateNames: Record<string, string> = {
    'AL':'Alabama','AK':'Alaska','AZ':'Arizona','AR':'Arkansas','CA':'California',
    'CO':'Colorado','CT':'Connecticut','DE':'Delaware','FL':'Florida','GA':'Georgia',
    'HI':'Hawaii','ID':'Idaho','IL':'Illinois','IN':'Indiana','IA':'Iowa','KS':'Kansas',
    'KY':'Kentucky','LA':'Louisiana','ME':'Maine','MD':'Maryland','MA':'Massachusetts',
    'MI':'Michigan','MN':'Minnesota','MS':'Mississippi','MO':'Missouri','MT':'Montana',
    'NE':'Nebraska','NV':'Nevada','NH':'New Hampshire','NJ':'New Jersey','NM':'New Mexico',
    'NY':'New York','NC':'North Carolina','ND':'North Dakota','OH':'Ohio','OK':'Oklahoma',
    'OR':'Oregon','PA':'Pennsylvania','RI':'Rhode Island','SC':'South Carolina',
    'SD':'South Dakota','TN':'Tennessee','TX':'Texas','UT':'Utah','VT':'Vermont',
    'VA':'Virginia','WA':'Washington','WV':'West Virginia','WI':'Wisconsin','WY':'Wyoming'
  };

  steps = [
    { id: 1, label: 'Personal', title: 'Personal Information' },
    { id: 2, label: 'Business', title: 'Business / Carrier Information' },
    { id: 3, label: 'Equipment', title: 'Truck & Equipment Information' },
    { id: 4, label: 'Authority', title: 'Authority & Compliance' },
    { id: 5, label: 'Preferences', title: 'Operating Preferences' },
    { id: 6, label: 'Experience', title: 'Driver Experience' },
    { id: 7, label: 'Documents', title: 'Document Uploads' },
    { id: 8, label: 'Communication', title: 'Communication Preferences' },
    { id: 9, label: 'Agreement', title: 'Agreement & Submission' },
  ];

  equipmentTypes = ['Dry Van','Reefer','Flatbed','Step Deck','Box Truck','Power Only','Hotshot','Car Hauler','Other'];
  documentKeys = [
    { key: 'driverLicense', label: "Driver's License" },
    { key: 'medicalCard', label: 'Medical Card' },
    { key: 'cdl', label: 'Commercial Driver\'s License (CDL)' },
    { key: 'w9', label: 'W-9 Form' },
    { key: 'insuranceCert', label: 'Certificate of Insurance' },
    { key: 'operatingAuth', label: 'Operating Authority' },
    { key: 'registration', label: 'Vehicle Registration' },
    { key: 'truckDocs', label: 'Truck Documents' },
    { key: 'trailerDocs', label: 'Trailer Documents' },
    { key: 'other', label: 'Other Supporting Documents' },
  ];

  uploadedDocuments: Record<string, UploadedFile | null> = {};
  applyForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.applyForm = this.fb.group({
      // Step 1: Personal
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      preferredName: [''],
      dateOfBirth: [''],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      secondaryPhone: [''],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      country: ['United States'],
      emergencyName: [''],
      emergencyPhone: [''],
      emergencyRelationship: [''],

      // Step 2: Business
      businessName: ['', Validators.required],
      dba: [''],
      businessType: ['', Validators.required],
      mcNumber: [''],
      dotNumber: [''],
      ein: [''],
      yearsInBusiness: [''],
      yearsDriving: [''],
      yearsOwnerOperator: [''],
      businessAddress: [''],
      mailingAddress: [''],
      dispatchContactName: [''],
      dispatchContactPhone: [''],
      dispatchContactEmail: [''],

      // Step 3: Equipment
      equipmentType: ['', Validators.required],
      truckYear: [''],
      truckMake: [''],
      truckModel: [''],
      truckNumber: [''],
      trailerType: [''],
      trailerYear: [''],
      trailerLength: [''],
      trailerWidth: [''],
      trailerNumber: [''],
      payloadCapacity: [''],
      reeferTempRange: [''],
      hasLiftgate: [false],
      hasPalletJack: [false],
      hasStraps: [false],
      hasChains: [false],
      hasTarps: [false],
      hasOversize: [false],
      hazmatAuth: [false],
      tankerEndorsement: [false],
      hasTwic: [false],

      // Step 4: Authority
      usdot: [''],
      mc: [''],
      authorityStatus: [''],
      authorityActiveDate: [''],
      carrierName: [''],
      safetyRating: [''],
      insuranceCompany: [''],
      cargoInsuranceCoverage: [''],
      autoLiabilityCoverage: [''],
      insuranceExpirationDate: [''],
      boc3Status: [''],

      // Step 5: Preferences
      operatingArea: [''],
      preferredStates: [[]],
      preferredLanes: [''],
      avoidedStates: [[]],
      homeTime: [''],
      preferredLoadType: [''],
      preferredMileage: [''],
      minimumRate: [''],
      preferredRpm: [''],
      deadheadPreference: [''],
      preferredPickupTimes: [[]],
      preferredDeliveryTimes: [[]],
      additionalPreferences: [''],

      // Step 6: Experience
      totalYearsDriving: [''],
      yearsAsOwnerOperator: [''],
      previousEquipmentExp: [''],
      typicalWeeklyMileage: [''],
      preferredLoadTypes: [''],
      previousDispatchExp: [''],
      previousOtrExp: [''],
      additionalExperience: [''],

      // Step 8: Communication
      preferredCommunication: [[]],
      preferredContactHours: [[]],
      agreeToContact: [false, Validators.requiredTrue],
      agreeToDispatchComms: [false, Validators.requiredTrue],
      reviewedPrivacyPolicy: [false, Validators.requiredTrue],
      agreeToTerms: [false, Validators.requiredTrue],
      marketingConsent: [false],

      // Step 9: Agreement
      confirmAccuracy: [false, Validators.requiredTrue],
      agreeTerms: [false, Validators.requiredTrue],
      acknowledgePrivacy: [false, Validators.requiredTrue],
      consentContact: [false, Validators.requiredTrue],
    });
  }

  get progress(): number {
    return ((this.step - 1) / (this.steps.length - 1)) * 100;
  }

  isFieldInvalid(field: string): boolean {
    const control = this.applyForm.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  toggleArrayOption(controlName: string, value: string): void {
    const control = this.applyForm.get(controlName);
    if (control) {
      const currentValues: string[] = control.value || [];
      if (currentValues.includes(value)) {
        control.setValue(currentValues.filter(v => v !== value));
      } else {
        control.setValue([...currentValues, value]);
      }
    }
  }

  isOptionSelected(controlName: string, value: string): boolean {
    const currentValues: string[] = this.applyForm.get(controlName)?.value || [];
    return currentValues.includes(value);
  }

  onFileUpload(event: Event, docKey: string): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      if (file.size > 10 * 1024 * 1024) {
        alert('File size must be under 10MB');
        return;
      }
      const allowed = ['application/pdf','image/jpeg','image/png','application/msword','application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowed.includes(file.type)) {
        alert('Please upload a PDF, JPG, PNG, or Word document');
        return;
      }
      this.uploadedDocuments[docKey] = { name: file.name, size: file.size, type: file.type };
    }
  }

  removeUpload(docKey: string, event: Event): void {
    event.stopPropagation();
    this.uploadedDocuments[docKey] = null;
  }

  validateStep(s: number): boolean {
    this.errors = [];
    let fieldsToValidate: string[] = [];

    if (s === 1) fieldsToValidate = ['firstName', 'lastName', 'phone', 'email', 'address', 'city', 'state', 'zip'];
    if (s === 2) fieldsToValidate = ['businessName', 'businessType'];
    if (s === 3) fieldsToValidate = ['equipmentType'];
    if (s === 8) fieldsToValidate = ['agreeToContact', 'agreeToDispatchComms', 'reviewedPrivacyPolicy', 'agreeToTerms'];
    if (s === 9) fieldsToValidate = ['confirmAccuracy', 'agreeTerms', 'acknowledgePrivacy', 'consentContact'];

    let valid = true;
    for (const field of fieldsToValidate) {
      const control = this.applyForm.get(field);
      if (control) {
        control.markAsTouched();
        if (control.invalid) {
          valid = false;
          this.errors.push(`${field.charAt(0).toUpperCase() + field.slice(1)} is required or invalid.`);
        }
      }
    }
    return valid;
  }

  next(): void {
    if (!this.validateStep(this.step)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    this.errors = [];
    this.step = Math.min(this.step + 1, this.steps.length);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  prev(): void {
    this.step = Math.max(this.step - 1, 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  submit(): void {
    if (!this.validateStep(9)) return;

    this.submitting = true;
    setTimeout(() => {
      const ref = `BWS-${Date.now().toString(36).toUpperCase()}`;
      const applications = JSON.parse(localStorage.getItem('bw_applications') || '[]');
      applications.unshift({
        id: ref,
        ...this.applyForm.value,
        documents: this.uploadedDocuments,
        submittedAt: new Date().toISOString(),
        status: 'new',
        notes: '',
      });
      localStorage.setItem('bw_applications', JSON.stringify(applications));
      this.refNumber = ref;
      this.submitted = true;
      this.submitting = false;
    }, 1500);
  }
}
