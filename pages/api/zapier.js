export default async function handler(req, res) {
  const zapierWebhookUrl = process.env.ZAPIER_WEBHOOK_URL;
  await fetch(zapierWebhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(req.body),
  });
  res.status(200).json({ status: 'Webhook sent' });
}