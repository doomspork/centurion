/**
 * Central content + configuration for the Centurion Restoration site.
 *
 * Extracting copy and toggles here (instead of hard-coding them into markup)
 * is the migration payoff: editing the site no longer means hunting through
 * inline-styled HTML. The two booleans mirror the original design-tool props
 * (`showEmergencyBar`, `showServiceStrip`), both defaulting to `true`.
 */

export const site = {
  name: 'Centurion Restoration',
  phone: '(555) 010-0199',
  phoneHref: 'tel:+15550100199',
  email: 'info@centurionrestoration.com',
  serviceArea: '[Your city & surrounding counties]',
  licenseNumber: '[000000]',
  year: 2026,

  /** Toggles carried over from the original design-tool props. */
  showEmergencyBar: true,
  showServiceStrip: true,
} as const;

export const emergencyBar = [
  '24/7 Emergency Response',
  'Licensed & Insured',
  'We Bill Your Insurance Directly',
];

export const nav = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why' },
  { label: 'Process', href: '#process' },
  { label: 'Reviews', href: '#reviews' },
];

export const heroTrust = [
  'IICRC Certified',
  'Licensed & Insured',
  'Family-Owned',
  'Works With Your Insurance',
];

export const serviceStrip = ['Water', 'Fire', 'Mold', 'Asbestos'];

export const services = [
  {
    numeral: 'I',
    title: 'Water Damage',
    body: 'Burst pipes, floods, and storm intrusion. Rapid extraction, structural drying, and moisture mapping to stop the damage at its source.',
  },
  {
    numeral: 'II',
    title: 'Fire & Smoke',
    body: 'Soot, char, and stubborn odor. We clean, deodorize, and rebuild — restoring everything the fire tried to take.',
  },
  {
    numeral: 'III',
    title: 'Mold Remediation',
    body: 'Containment, HEPA filtration, and safe removal. We eliminate the mold and the moisture that feeds it.',
  },
  {
    numeral: 'IV',
    title: 'Asbestos Abatement',
    body: 'Certified, code-compliant removal and disposal. Handled safely, documented fully, and done right the first time.',
  },
];

export const credentials = [
  'IICRC Certified',
  'EPA Lead-Safe',
  'Licensed Abatement',
  'OSHA Trained',
  'Bonded & Insured',
];

export const stats = [
  { value: '24/7', label: 'Emergency Response' },
  { value: '100%', label: 'Certified Crew' },
  { value: 'Direct', label: 'Insurance Billing' },
  { value: 'Local', label: 'Family-Owned' },
];

export const process = [
  { numeral: 'I', title: 'Call', body: 'One call, day or night. We answer and mobilize immediately.' },
  { numeral: 'II', title: 'Assess', body: 'On-site inspection, moisture and contaminant testing, and a clear scope.' },
  { numeral: 'III', title: 'Restore', body: 'Mitigation, remediation, and rebuild by certified specialists.' },
  { numeral: 'IV', title: 'Recover', body: 'Final walkthrough, full documentation, and insurance handoff.' },
];

export const reviews = [
  {
    quote:
      'They were at our house within the hour of a basement flood. Calm, professional, and thorough — they made a nightmare feel handled.',
    name: 'M. Rivera',
    role: 'Homeowner',
  },
  {
    quote:
      'After a kitchen fire, they handled everything — including the insurance paperwork. You’d never know it happened.',
    name: 'D. Chen',
    role: 'Property Manager',
  },
  {
    quote:
      'Certified, careful, and honest about the mold in our crawlspace. They fixed the root cause, not just the symptom.',
    name: 'S. Patel',
    role: 'Homeowner',
  },
];

export const damageTypes = ['Water Damage', 'Fire & Smoke', 'Mold', 'Asbestos', 'Not sure yet'];
