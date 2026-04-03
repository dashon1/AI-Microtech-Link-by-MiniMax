export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { priceId, appName, mode } = req.body;
  const secret = process.env.STRIPE_SECRET_KEY;

  if (!secret) return res.status(500).json({ error: 'Stripe not configured' });
  if (!priceId) return res.status(400).json({ error: 'Missing priceId' });

  const origin = req.headers.origin || 'https://aimicrotechlink.com';

  const body = new URLSearchParams({
    'line_items[0][price]': priceId,
    'line_items[0][quantity]': '1',
    mode: mode || 'subscription',
    success_url: `${origin}/success?app=${encodeURIComponent(appName || '')}`,
    cancel_url: `${origin}/apps`,
    allow_promotion_codes: 'true',
  });

  const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${secret}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: body.toString(),
  });

  const session = await response.json();
  if (session.error) return res.status(400).json({ error: session.error.message });

  res.status(200).json({ url: session.url });
}
