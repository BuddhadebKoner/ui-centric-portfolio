import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
   try {
      const body = await req.json();
      const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
         body as {
            razorpay_order_id: string;
            razorpay_payment_id: string;
            razorpay_signature: string;
         };

      if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
         return NextResponse.json(
            { error: "Missing required fields" },
            { status: 400 }
         );
      }

      const secret = process.env.RAZORPAY_KEY_SECRET;
      if (!secret) {
         return NextResponse.json(
            { error: "Server configuration error" },
            { status: 500 }
         );
      }

      // Verify signature: HMAC SHA256 of "order_id|payment_id" with key secret
      const generatedSignature = crypto
         .createHmac("sha256", secret)
         .update(`${razorpay_order_id}|${razorpay_payment_id}`)
         .digest("hex");

      const verified = generatedSignature === razorpay_signature;

      return NextResponse.json({ verified });
   } catch (error: unknown) {
      console.error("Payment verification error:", error);
      return NextResponse.json(
         { error: "Verification failed" },
         { status: 500 }
      );
   }
}
