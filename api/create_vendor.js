const Flutterwave = require('flutterwave-node-v3');
const flw = new Flutterwave(process.env.FLW_PUBLIC_KEY, process.env.FLW_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { business_name, business_email } = req.body;
  try {
    const payload = { account_name: business_name, account_email: business_email };
    const response = await flw.Subaccount.create(payload);
    res.status(200).json(response);
  } catch (error) { res.status(500).json({ status: 'error', message: error.message }); }
}
