import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";
import { websites, mobileApps } from "@/data/shop";

const razorpay = new Razorpay({
   key_id: process.env.RAZORPAY_KEY_ID!,
   key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

// Build a lookup map of slug → priceINR for server-side price validation
const priceMap = new Map<string, number>();
for (const p of [...websites, ...mobileApps]) {
   if (p.priceINR) priceMap.set(p.slug, p.priceINR);
}

export async function POST(req: NextRequest) {
   try {
      const body = await req.json();
      const { amount, currency, productSlug, productTitle } = body as {
         amount: number;
         currency: string;
         productSlug: string;
         productTitle: string;
      };

      if (!amount || !productSlug || !productTitle) {
         return NextResponse.json(
            { error: "Missing required fields" },
            { status: 400 }
         );
      }

      // Server-side price validation — prevent client-side price tampering
      const expectedPrice = priceMap.get(productSlug);
      if (!expectedPrice) {
         return NextResponse.json(
            { error: "Product not found or is free" },
            { status: 400 }
         );
      }

      // Amount from client is in base currency unit (e.g. 499),
      // Razorpay expects paise (49900)
      const expectedAmountPaise = expectedPrice * 100;
      const requestedAmountPaise = amount * 100;

      if (requestedAmountPaise !== expectedAmountPaise) {
         return NextResponse.json(
            { error: "Price mismatch" },
            { status: 400 }
         );
      }

      const order = await razorpay.orders.create({
         amount: expectedAmountPaise,
         currency: currency || "INR",
         notes: {
            productSlug,
            productTitle,
         },
      });

      return NextResponse.json({
         orderId: order.id,
         amount: expectedPrice,
         currency: order.currency,
         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      });
   } catch (error: unknown) {
      console.error("Razorpay order creation error:", error);
      return NextResponse.json(
         { error: "Failed to create order" },
         { status: 500 }
      );
   }
}
