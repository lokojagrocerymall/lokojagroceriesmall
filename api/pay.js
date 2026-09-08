const Flutterwave = require('flutterwave-node-v3');
const flw = new Flutterwave(process.env.FLW_PUBLIC_KEY, process.env.FLW_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { amount, location, vendor_groups, customer } = req.body;
  try {
    const payload = {
      tx_ref: `LGM-${Date.now()}`,
      amount: amount, currency: 'NGN',
      redirect_url: `https://lokoja-grocery-mall.vercel.app?status=successful`,
      customer: { email: customer.email, name: customer.name },
      meta: { location: location, vendor_groups: vendor_groups },
      subaccounts: Object.keys(vendor_groups).map(sub_id => ({
        id: sub_id, transaction_charge_type: "flat_subaccount", transaction_charge: vendor_groups[sub_id] * 0.90
      }))
    };
    const response = await flw.Payment.initiate(payload);
    res.status(200).json(response);
  } catch (error) { res.status(500).json({ status: 'error', message: error.message }); }
}
