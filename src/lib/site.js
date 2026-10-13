export const SITE = {
  name: 'European Digital Trust Council',
  short: 'EDTC',
  tagline: 'Build Trust. Enable Innovation.',
  url: (import.meta.env?.VITE_SITE_URL || 'https://edtc.ai').replace(/\/$/, ''),
  email: 'info@europeandigitaltrustcouncil.de',
  partnersEmail: 'partners@europeandigitaltrustcouncil.de',
  // The current site lists three different addresses. Only the city is shown until EDTC confirms one.
  city: 'Essen, Germany',
  coverage: 'EU & EEA · remote delivery available',
  contactEndpoint: import.meta.env?.VITE_CONTACT_ENDPOINT || '',
  readinessCheckUrl: import.meta.env?.VITE_READINESS_CHECK_URL || '',
  showEditorial: import.meta.env?.VITE_SHOW_EDITORIAL === 'true',
  reviewDate: '9 October 2026',
}

export const DISCLAIMER =
  'EDTC provides independent readiness and governance assessments. We do not provide legal advice, regulatory certification or official approval, and an EDTC assessment does not guarantee legal compliance.'
