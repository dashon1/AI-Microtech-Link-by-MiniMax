export const redirectToCheckout = async (priceId: string, appName: string) => {
  const res = await fetch('/api/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ priceId, appName, mode: 'payment' }),
  });
  const { url, error } = await res.json();
  if (error) throw new Error(error);
  window.location.href = url;
};

export const redirectToSubscription = async (priceId: string, appName: string) => {
  const res = await fetch('/api/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ priceId, appName, mode: 'subscription' }),
  });
  const { url, error } = await res.json();
  if (error) throw new Error(error);
  window.location.href = url;
};
