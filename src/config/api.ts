// API Configuration for AI Microtech Link
// Edge function URLs - these are provided by Supabase after deployment

export const API_CONFIG = {
  // Supabase Edge Function URLs
  CONTACT_FORM_URL: import.meta.env.VITE_CONTACT_FORM_URL || 'https://gscszypqjkxgtlkssteu.supabase.co/functions/v1/contact-form',
  NEWSLETTER_SIGNUP_URL: import.meta.env.VITE_NEWSLETTER_URL || 'https://gscszypqjkxgtlkssteu.supabase.co/functions/v1/newsletter-signup',
  
  // Domain
  DOMAIN: 'aimicrotechlink.com',
  
  // Email addresses
  PRIMARY_EMAIL: 'info@aimicrotechlink.com',
  ADMIN_EMAIL: 'admin@aimicrotechlink.com',
};

// Google Analytics Tracking ID
export const GA_TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID || 'G-XXXXXXXXXX';
