import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
export default function Checkout() {
  const handleClick = async () => {
    const res = await fetch('/api/checkout-session', { method: 'POST' });
    const data = await res.json();
    const stripe = await stripePromise;
    stripe.redirectToCheckout({ sessionId: data.id });
  };
  return <button onClick={handleClick}>Subscribe</button>;
}