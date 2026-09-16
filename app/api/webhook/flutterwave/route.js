import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const hash = req.headers.get("verif-hash");
    const secretHash = process.env.FLW_WEBHOOK_HASH || "LGM_FLW_2026_SECURE_HASH_12345";
    
    // Verify hash from Flutterwave
    if (hash !== secretHash) {
      return NextResponse.json({ error: "Invalid hash" }, { status: 401 });
    }

    const body = await req.json();
    console.log("Flutterwave webhook received:", body);

    // Only process successful payments
    if (body.status === "successful" || body.data?.status === "successful") {
      const data = body.data || body;
      console.log("Payment successful for:", data.tx_ref, data.amount);

      // TODO: Create order in DB here
      // Your order creation logic will go here
      // For now we just acknowledge receipt
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (err) {
    console.error("Webhook error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: "Flutterwave webhook is active" }, { status: 200 });
}
