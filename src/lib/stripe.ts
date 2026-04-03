import { loadStripe } from '@stripe/stripe-js';

const PUBLISHABLE_KEY = 'pk_live_51S0DRr0xw5o9mCvn5JPh4s6ghSqNYks1h5oHkdHhUGvuXp1bSnSgDvwpCCXTsLm18km5Z6lfLXm4aBGPISqHzMHV00XkQXENdP';

let stripePromise: ReturnType<typeof loadStripe> | null = null;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(PUBLISHABLE_KEY);
  }
  return stripePromise;
};

export const redirectToCheckout = async (priceId: string, appName: string) => {
  const stripe = await getStripe();
  if (!stripe) return;

  await stripe.redirectToCheckout({
    lineItems: [{ price: priceId, quantity: 1 }],
    mode: 'payment',
    successUrl: `${window.location.origin}/success?app=${encodeURIComponent(appName)}`,
    cancelUrl: window.location.href,
  });
};

export const redirectToSubscription = async (priceId: string, appName: string) => {
  const stripe = await getStripe();
  if (!stripe) return;

  await stripe.redirectToCheckout({
    lineItems: [{ price: priceId, quantity: 1 }],
    mode: 'subscription',
    successUrl: `${window.location.origin}/success?app=${encodeURIComponent(appName)}`,
    cancelUrl: window.location.href,
  });
};
