import { Router } from 'express';
import Stripe from 'stripe';
import bodyParser from 'body-parser';

const router = Router();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', { apiVersion: '2024-06-20' });

// Create a Checkout Session – expects { price_cents, name }
router.post('/create-checkout-session', async (req, res) => {
  const { price_cents, name } = req.body;
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: { name },
          unit_amount: price_cents,
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `${process.env.PUBLIC_URL || 'http://localhost:3000'}/store?success=true`,
      cancel_url: `${process.env.PUBLIC_URL || 'http://localhost:3000'}/store?canceled=true`,
    });
    res.json({ url: session.url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Stripe session creation failed' });
  }
});

// Stripe webhook endpoint – verify signature
router.post('/webhook', bodyParser.raw({ type: 'application/json' }), (req, res) => {
  const sig = req.headers['stripe-signature'];
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET || '';
  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig as string, endpointSecret);
  } catch (err) {
    console.error(`⚠️  Webhook signature verification failed.`);
    return res.sendStatus(400);
  }
  // Handle the event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    // TODO: mark order as paid, trigger in‑game delivery
    console.log('✅ Checkout session completed:', session.id);
  }
  res.json({ received: true });
});

export default router;
