import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
   title: "Disclaimer",
   description:
      "Disclaimer for Buddhadeb Koner's portfolio and freelance services website.",
};

export default function DisclaimerPage() {
   const lastUpdated = "March 1, 2026";
   const websiteUrl = "https://buddhadebkoner.in";
   const ownerName = "Buddhadeb Koner";
   const email = "iambuddhadebkoner@gmail.com";

   return (
      <main className="min-h-screen bg-background text-foreground">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="mb-8">
               <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-highlight transition-colors"
               >
                  ← Back to Home
               </Link>
            </div>

            <Breadcrumbs
               items={[
                  { label: "Home", href: "/" },
                  { label: "Disclaimer" },
               ]}
            />

            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
               <span className="text-highlight">Disclaimer</span>
            </h1>
            <p className="text-sm text-muted-foreground mb-12">
               Last updated: {lastUpdated}
            </p>

            <div className="space-y-10 text-sm leading-relaxed text-muted-foreground">
               {/* General Disclaimer */}
               <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">
                     1. General Disclaimer
                  </h2>
                  <p>
                     The information provided on{" "}
                     <a
                        href={websiteUrl}
                        className="text-highlight hover:underline"
                     >
                        {websiteUrl}
                     </a>{" "}
                     (the &quot;Website&quot;) by {ownerName} is for general
                     informational purposes only. All information on the
                     Website is provided in good faith; however, I make no
                     representation or warranty of any kind, express or implied,
                     regarding the accuracy, adequacy, validity, reliability,
                     availability, or completeness of any information on the
                     Website.
                  </p>
               </section>

               {/* No Professional Advice */}
               <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">
                     2. No Professional Advice
                  </h2>
                  <p>
                     The Website does not provide professional advice of any
                     kind. The content, including blog posts, tutorials, and
                     project showcases, is shared for educational and
                     informational purposes. You should not act or refrain from
                     acting based on any content on this Website without seeking
                     appropriate professional advice.
                  </p>
               </section>

               {/* Portfolio & Project Showcases */}
               <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">
                     3. Portfolio & Project Showcases
                  </h2>
                  <p>
                     The projects, designs, and work samples displayed on this
                     Website are for demonstration and portfolio purposes. Some
                     projects may have been developed in collaboration with
                     clients, teams, or organizations. The inclusion of any
                     project does not imply endorsement by any third party. All
                     client work is showcased with appropriate permissions where
                     required.
                  </p>
               </section>

               {/* Digital Product Purchases */}
               <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">
                     4. Digital Product Purchases & Refunds
                  </h2>
                  <p>
                     This Website offers digital products (source code,
                     templates, and app codebases) for purchase. Payments are
                     processed through Razorpay, a third-party payment gateway.
                     {ownerName} does not directly handle, store, or have access
                     to your financial information.
                  </p>
                  <p>
                     After payment, you must send a screenshot of your payment
                     confirmation to{" "}
                     <a
                        href={`mailto:${email}`}
                        className="text-highlight hover:underline"
                     >
                        {email}
                     </a>{" "}
                     for verification. The source code will be delivered via
                     email after manual verification. All sales of digital
                     products are final — no refunds, returns, or cancellations
                     once the source code has been delivered.
                  </p>
                  <p>
                     Any freelance engagements, project agreements, or services
                     are arranged separately through direct communication and
                     are governed by independent contracts or agreements between
                     {ownerName} and the respective client. Such arrangements
                     are outside the scope of this Website.
                  </p>
               </section>

               {/* Code & Technical Content */}
               <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">
                     5. Code & Technical Content
                  </h2>
                  <p>
                     Any code snippets, technical tutorials, development tips,
                     or programming-related content shared on this Website is
                     provided &quot;as is&quot; without any guarantees. While I
                     strive for accuracy:
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-4">
                     <li>
                        Code examples may not be suitable for production use
                        without modifications.
                     </li>
                     <li>
                        Technical information may become outdated as
                        technologies evolve.
                     </li>
                     <li>
                        I am not responsible for any issues arising from the use
                        of code or technical advice from this Website.
                     </li>
                     <li>
                        Always test thoroughly and review code before deploying
                        to production.
                     </li>
                  </ul>
               </section>

               {/* Third-Party Content */}
               <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">
                     6. Third-Party Content & Links
                  </h2>
                  <p>
                     This Website may contain links to external websites,
                     services, or resources. I am not responsible for:
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-4">
                     <li>
                        The content, accuracy, or opinions expressed on
                        third-party websites.
                     </li>
                     <li>
                        The availability or reliability of external services.
                     </li>
                     <li>
                        Any loss or damage arising from your interaction with
                        third-party websites or services.
                     </li>
                  </ul>
                  <p>
                     The inclusion of any link does not imply endorsement or
                     recommendation by {ownerName}.
                  </p>
               </section>

               {/* Testimonials & Results */}
               <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">
                     7. Results & Testimonials
                  </h2>
                  <p>
                     Any results, metrics, or achievements mentioned on this
                     Website relate to specific projects or circumstances and
                     should not be taken as a guarantee of similar outcomes.
                     Individual results may vary depending on project scope,
                     requirements, and other factors.
                  </p>
               </section>

               {/* Availability */}
               <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">
                     8. Website Availability
                  </h2>
                  <p>
                     I strive to keep the Website running smoothly, but I do not
                     guarantee uninterrupted or error-free access. The Website
                     may experience downtime for maintenance, updates, or due to
                     factors beyond my control. I am not liable for any loss or
                     inconvenience caused by the Website being temporarily
                     unavailable.
                  </p>
               </section>

               {/* Errors and Omissions */}
               <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">
                     9. Errors and Omissions
                  </h2>
                  <p>
                     While I endeavor to keep the information on this Website up
                     to date and accurate, I make no guarantees about the
                     completeness, reliability, or accuracy of this information.
                     Any action you take based on the information on this
                     Website is strictly at your own risk. I will not be liable
                     for any losses or damages in connection with the use of
                     this Website.
                  </p>
               </section>

               {/* Changes */}
               <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">
                     10. Changes to This Disclaimer
                  </h2>
                  <p>
                     I reserve the right to amend this Disclaimer at any time.
                     Any changes will be posted on this page with an updated
                     date. By continuing to use the Website after changes are
                     posted, you agree to the revised Disclaimer.
                  </p>
               </section>

               {/* Contact */}
               <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">
                     11. Contact
                  </h2>
                  <p>
                     If you have any questions about this Disclaimer, please
                     contact:
                  </p>
                  <div className="bg-muted/10 border border-border/20 rounded-lg p-4 space-y-1">
                     <p className="font-medium text-foreground">{ownerName}</p>
                     <p>
                        Email:{" "}
                        <a
                           href={`mailto:${email}`}
                           className="text-highlight hover:underline"
                        >
                           {email}
                        </a>
                     </p>
                     <p>
                        Website:{" "}
                        <a
                           href={websiteUrl}
                           className="text-highlight hover:underline"
                        >
                           {websiteUrl}
                        </a>
                     </p>
                  </div>
               </section>
            </div>
         </div>
      </main>
   );
}
