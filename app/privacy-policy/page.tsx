import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
   title: "Privacy Policy",
   description:
      "Privacy Policy for Buddhadeb Koner's portfolio and freelance services website.",
};

export default function PrivacyPolicyPage() {
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
                  { label: "Privacy Policy" },
               ]}
            />

            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
               Privacy <span className="text-highlight">Policy</span>
            </h1>
            <p className="text-sm text-muted-foreground mb-12">
               Last updated: {lastUpdated}
            </p>

            <div className="space-y-10 text-sm leading-relaxed text-muted-foreground">
               {/* Introduction */}
               <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">
                     1. Introduction
                  </h2>
                  <p>
                     {ownerName} (&quot;I&quot;, &quot;me&quot;, &quot;my&quot;)
                     operates the website{" "}
                     <a
                        href={websiteUrl}
                        className="text-highlight hover:underline"
                     >
                        {websiteUrl}
                     </a>{" "}
                     (the &quot;Website&quot;). This Privacy Policy explains how
                     I collect, use, and protect information when you visit my
                     portfolio website. Your privacy is important to me, and I
                     am committed to protecting any information you may provide.
                  </p>
               </section>

               {/* Information Collection */}
               <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">
                     2. Information I Collect
                  </h2>
                  <p>
                     This website is primarily an informational portfolio. I
                     collect minimal data:
                  </p>

                  <div className="space-y-4 pl-4">
                     <div>
                        <h3 className="font-medium text-foreground mb-1">
                           a) Information You Voluntarily Provide
                        </h3>
                        <p>
                           If you contact me via email or through any contact
                           form, I may receive your name, email address, and the
                           content of your message. This information is provided
                           voluntarily by you and is used solely to respond to
                           your inquiry.
                        </p>
                     </div>

                     <div>
                        <h3 className="font-medium text-foreground mb-1">
                           b) Automatically Collected Information
                        </h3>
                        <p>
                           Like most websites, this site may automatically
                           collect certain non-personally identifiable
                           information when you visit, such as:
                        </p>
                        <ul className="list-disc list-inside space-y-1 mt-2 pl-4">
                           <li>Browser type and version</li>
                           <li>Operating system</li>
                           <li>Referring/exit pages</li>
                           <li>Date/time of your visit</li>
                           <li>Pages viewed</li>
                           <li>
                              Approximate geographic location (country/region
                              level)
                           </li>
                        </ul>
                        <p className="mt-2">
                           This information is collected through standard web
                           server logs and analytics tools to help improve the
                           website experience.
                        </p>
                     </div>
                  </div>
               </section>

               {/* No Transactions */}
               <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">
                     3. No Financial Data Collection
                  </h2>
                  <p>
                     This website does not collect, store, or process any
                     financial information, including credit card numbers, bank
                     account details, or payment information. There is no
                     e-commerce or payment processing functionality on this
                     website. No transactions of any kind are conducted through
                     this platform.
                  </p>
               </section>

               {/* Cookies */}
               <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">
                     4. Cookies & Tracking Technologies
                  </h2>
                  <p>
                     This website may use essential cookies for basic
                     functionality (such as theme preferences). If analytics
                     services are integrated, they may use cookies to understand
                     how visitors interact with the website. These cookies
                     collect anonymous, aggregated data and do not personally
                     identify you.
                  </p>
                  <p>
                     You can control cookies through your browser settings. Note
                     that disabling cookies may affect the functionality of the
                     website.
                  </p>
               </section>

               {/* Third-Party Services */}
               <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">
                     5. Third-Party Services
                  </h2>
                  <p>
                     This website may use or link to the following third-party
                     services:
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-4">
                     <li>
                        <strong>Hosting Provider (Vercel):</strong> The website
                        is hosted on Vercel, which may collect standard server
                        log data.
                     </li>
                     <li>
                        <strong>Cloudinary:</strong> Used for image hosting and
                        optimization. Images displayed on this site may be
                        served through Cloudinary&apos;s CDN.
                     </li>
                     <li>
                        <strong>Spotify API:</strong> The website may display
                        currently playing music information via the Spotify API.
                        No user Spotify data is collected or stored.
                     </li>
                     <li>
                        <strong>External Links:</strong> Links to GitHub,
                        LinkedIn, Twitter/X, Instagram, YouTube, and other
                        platforms are provided for reference. These sites have
                        their own privacy policies.
                     </li>
                  </ul>
                  <p>
                     I do not sell, trade, or rent your personal information to
                     any third parties.
                  </p>
               </section>

               {/* How I Use Information */}
               <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">
                     6. How I Use Information
                  </h2>
                  <p>Any information collected is used solely to:</p>
                  <ul className="list-disc list-inside space-y-2 pl-4">
                     <li>Respond to your inquiries or messages.</li>
                     <li>
                        Improve the website content and user experience.
                     </li>
                     <li>
                        Monitor website performance and fix technical issues.
                     </li>
                     <li>
                        Understand general traffic patterns and visitor
                        demographics (anonymized).
                     </li>
                  </ul>
               </section>

               {/* Data Security */}
               <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">
                     7. Data Security
                  </h2>
                  <p>
                     I take reasonable measures to protect information collected
                     through this website. The website is served over HTTPS,
                     ensuring encrypted communication between your browser and
                     the server. However, no method of transmission over the
                     Internet is 100% secure, and I cannot guarantee absolute
                     security.
                  </p>
               </section>

               {/* Data Retention */}
               <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">
                     8. Data Retention
                  </h2>
                  <p>
                     Any personally identifiable information you provide (e.g.,
                     through email contact) is retained only for as long as
                     necessary to fulfill the purpose for which it was collected,
                     such as responding to your inquiry. Analytics data is
                     retained in anonymized form.
                  </p>
               </section>

               {/* Your Rights */}
               <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">
                     9. Your Rights
                  </h2>
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 pl-4">
                     <li>
                        Request access to any personal data I may hold about
                        you.
                     </li>
                     <li>
                        Request correction or deletion of your personal data.
                     </li>
                     <li>
                        Opt out of any data collection by disabling cookies in
                        your browser.
                     </li>
                     <li>
                        Contact me to ask questions about how your data is
                        handled.
                     </li>
                  </ul>
               </section>

               {/* Children's Privacy */}
               <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">
                     10. Children&apos;s Privacy
                  </h2>
                  <p>
                     This website is not directed at children under the age of
                     13. I do not knowingly collect personal information from
                     children. If you believe a child has provided personal
                     information through this website, please contact me and I
                     will take steps to remove that information.
                  </p>
               </section>

               {/* Changes */}
               <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">
                     11. Changes to This Privacy Policy
                  </h2>
                  <p>
                     I reserve the right to update this Privacy Policy at any
                     time. Changes will be posted on this page with an updated
                     &quot;Last updated&quot; date. I encourage you to review
                     this page periodically to stay informed about how I protect
                     your information.
                  </p>
               </section>

               {/* Contact */}
               <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">
                     12. Contact Information
                  </h2>
                  <p>
                     If you have any questions or concerns about this Privacy
                     Policy, please contact:
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
