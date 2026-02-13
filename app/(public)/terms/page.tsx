import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using Tatla Rent a Car services.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background-dark pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
        <p className="text-slate-400 mb-8">Last Updated: February 2026</p>
        
        <div className="space-y-8 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the services provided by Tatla Rent a Car, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Rental Requirements</h2>
            <p>
              To rent a vehicle, you must possess a valid driver&apos;s license, be at least 21 years of age, and provide a valid form of identification and payment. Additional requirements may apply for specific vehicle categories.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Booking and Cancellation</h2>
            <p>
              Bookings are subject to vehicle availability. Cancellations must be made at least 24 hours in advance to avoid cancellation fees. Specific terms regarding deposits and refunds will be provided at the time of booking.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Vehicle Use</h2>
            <p>
              Vehicles must be used responsibly and in accordance with all traffic laws. Smoking and transporting hazardous materials are strictly prohibited. The renter is responsible for any fines or penalties incurred during the rental period.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Liability and Insurance</h2>
            <p>
              Comprehensive insurance is included with all rentals, subject to an excess fee. The renter is liable for any damage to the vehicle not covered by insurance, as well as for theft or loss of the vehicle or its keys.
            </p>
          </section>
           
           <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Changes to Terms</h2>
            <p>
                We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of the modified terms.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
