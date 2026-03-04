// ── Razorpay types, constants & localStorage helpers ──────────

export interface PaymentSuccessData {
   orderId: string;
   paymentId: string;
   productTitle: string;
   productSlug: string;
   amount: string;
   timestamp: number;
   shared: boolean;
}

export interface RazorpayOptions {
   key: string;
   amount: number;
   currency: string;
   name: string;
   description: string;
   order_id: string;
   handler: (response: RazorpayResponse) => void;
   prefill?: { name?: string; email?: string };
   theme?: { color: string };
   modal?: { ondismiss: () => void };
}

export interface RazorpayInstance {
   open: () => void;
}

export interface RazorpayResponse {
   razorpay_order_id: string;
   razorpay_payment_id: string;
   razorpay_signature: string;
}

declare global {
   interface Window {
      Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
   }
}

export const WHATSAPP_NUMBER = "919339813998";

const STORAGE_KEY = "rzp_pending_payments";

export function getPendingPayment(slug: string): PaymentSuccessData | null {
   try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      const payments: PaymentSuccessData[] = JSON.parse(raw);
      return payments.find((p) => p.productSlug === slug && !p.shared) ?? null;
   } catch {
      return null;
   }
}

export function savePendingPayment(data: PaymentSuccessData) {
   try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const payments: PaymentSuccessData[] = raw ? JSON.parse(raw) : [];
      const filtered = payments.filter((p) => p.productSlug !== data.productSlug);
      filtered.push(data);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
   } catch { /* ignore */ }
}

export function markPaymentShared(slug: string) {
   try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const payments: PaymentSuccessData[] = JSON.parse(raw);
      const updated = payments.map((p) =>
         p.productSlug === slug ? { ...p, shared: true } : p
      );
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
   } catch { /* ignore */ }
}
