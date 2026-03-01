import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
   title: "Terms and Conditions",
   description:
      "Terms and Conditions for Buddhadeb Koner's portfolio and freelance services website.",
};

export default function TermsAndConditionsPage() {
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
                  { label: "Terms and Conditions" },
               ]}
            />

            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
               Terms and <span className="text-highlight">Conditions</span>
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
                     Welcome to {ownerName}&apos;s portfolio website (
                     <a
                        href={websiteUrl}
                        className="text-highlight hover:underline"
                     >
                        {websiteUrl}
                     </a>
                     ). By accessing and using this website, you agree to comply
                     with and be bound by the following terms and conditions. If
                     you do not agree with any part of these terms, please do not
                     use this website.
                  </p>
               </section>

               {/* Website Purpose */}
               <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">
                     2. Website Purpose
                  </h2>
                  <p>
                     This website serves as a personal portfolio and
                     informational platform for {ownerName}, a freelance
                     FullStack Web Developer. The website is designed to showcase
                     projects, skills, experience, blog posts, and professional
                     achievements. It is intended for informational and
                     promotional purposes only.
                  </p>
               </section>

               {/* No Transactions */}
               <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">
                     3. No Online Transactions
                  </h2>
                  <p>
                     This website does not facilitate, process, or handle any
                     financial transactions, payments, or purchases. There is no
                     e-commerce functionality, payment gateway, or billing
                     system integrated into this website. Any business
                     arrangements or payments for freelance services are handled
                     separately outside this platform through mutual agreement
                     between the parties involved.
                  </p>
               </section>

               {/* Intellectual Property */}
               <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">
                     4. Intellectual Property
                  </h2>
                  <p>
                     All content on this website, including but not limited to
                     text, graphics, logos, images, project showcases, blog
                     posts, code snippets, design mockups, and other materials,
                     is the intellectual property of {ownerName} unless otherwise
                     stated. You may not reproduce, distribute, modify, or
                     create derivative works from any content on this website
                     without prior written permission.
                  </p>
                  <p>
                     Third-party trademarks, logos, and brand names displayed on
                     this website belong to their respective owners and are used
                     for identification and reference purposes only.
                  </p>
               </section>

               {/* Use of Website */}
               <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">
                     5. Acceptable Use
                  </h2>
                  <p>By using this website, you agree not to:</p>
                  <ul className="list-disc list-inside space-y-2 pl-4">
                     <li>
                        Use the website for any unlawful or prohibited purpose.
                     </li>
                     <li>
                        Attempt to gain unauthorized access to any part of the
                        website, server, or systems connected to it.
                     </li>
                     <li>
                        Disrupt, interfere with, or attempt to compromise the
                        security or functionality of the website.
                     </li>
                     <li>
                        Copy, scrape, or harvest content from this website
                        without permission.
                     </li>
                     <li>
                        Misrepresent your identity or affiliation when
                        contacting through this website.
                     </li>
                  </ul>
               </section>

               {/* Contact Form & Communication */}
               <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">
                     6. Contact & Communication
                  </h2>
                  <p>
                     This website may provide means to contact {ownerName} via
                     email or social media links. Any information you provide
                     through these channels (such as your name and email
                     address) will only be used to respond to your inquiry. Your
                     information will not be shared with third parties, sold, or
                     used for marketing purposes without your explicit consent.
                  </p>
               </section>

               {/* Third-Party Links */}
               <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">
                     7. Third-Party Links
                  </h2>
                  <p>
                     This website may contain links to third-party websites,
                     social media profiles, external project repositories (e.g.,
                     GitHub), and other resources. These links are provided for
                     convenience and informational purposes only. {ownerName}{" "}
                     does not endorse, control, or assume any responsibility for
                     the content, privacy policies, or practices of any
                     third-party websites.
                  </p>
               </section>

               {/* Blog Content */}
               <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">
                     8. Blog & Content Disclaimer
                  </h2>
                  <p>
                     Blog posts and articles published on this website represent
                     the personal opinions and experiences of {ownerName}. While
                     every effort is made to ensure accuracy, the content is
                     provided &quot;as is&quot; without warranty. Technical
                     content, tutorials, and code examples are shared for
                     educational purposes and should be independently verified
                     before use in production environments.
                  </p>
               </section>

               {/* Disclaimer of Warranties */}
               <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">
                     9. Disclaimer of Warranties
                  </h2>
                  <p>
                     This website is provided on an &quot;as is&quot; and
                     &quot;as available&quot; basis. {ownerName} makes no
                     warranties, express or implied, regarding the website&apos;s
                     operation, availability, accuracy, or reliability. To the
                     fullest extent permitted by law, {ownerName} disclaims all
                     warranties, including implied warranties of
                     merchantability, fitness for a particular purpose, and
                     non-infringement.
                  </p>
               </section>

               {/* Limitation of Liability */}
               <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">
                     10. Limitation of Liability
                  </h2>
                  <p>
                     In no event shall {ownerName} be liable for any direct,
                     indirect, incidental, special, consequential, or punitive
                     damages arising out of or related to your use of this
                     website. This includes, but is not limited to, damages for
                     loss of profits, data, goodwill, or other intangible
                     losses, even if {ownerName} has been advised of the
                     possibility of such damages.
                  </p>
               </section>

               {/* Changes */}
               <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">
                     11. Changes to Terms
                  </h2>
                  <p>
                     {ownerName} reserves the right to modify or update these
                     terms and conditions at any time without prior notice.
                     Changes will be effective immediately upon posting on this
                     page. It is your responsibility to review these terms
                     periodically. Continued use of the website after changes
                     constitutes acceptance of the updated terms.
                  </p>
               </section>

               {/* Governing Law */}
               <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">
                     12. Governing Law
                  </h2>
                  <p>
                     These terms and conditions are governed by and construed in
                     accordance with the laws of India. Any disputes arising
                     from the use of this website shall be subject to the
                     exclusive jurisdiction of the courts in Kolkata, West
                     Bengal, India.
                  </p>
               </section>

               {/* Contact */}
               <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">
                     13. Contact Information
                  </h2>
                  <p>
                     If you have any questions about these terms, please contact:
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
