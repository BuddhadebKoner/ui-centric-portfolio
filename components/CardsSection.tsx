export default function CardsSection() {
   const cards = [
      {
         title: "Web Development",
         description: "Building responsive and modern web applications with the latest technologies.",
         icon: "💻",
      },
      {
         title: "UI/UX Design",
         description: "Creating beautiful and intuitive user interfaces that users love.",
         icon: "🎨",
      },
      {
         title: "Performance",
         description: "Optimizing applications for speed and seamless user experience.",
         icon: "⚡",
      },
      {
         title: "Mobile First",
         description: "Designing with mobile devices in mind for perfect responsiveness.",
         icon: "📱",
      },
   ];

   return (
      <section className="py-20">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
               <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  What I Do
               </h2>
               <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Delivering exceptional digital experiences through expertise in various domains
               </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
               {cards.map((card, index) => (
                  <div
                     key={index}
                     className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-highlight transition-all hover:shadow-lg"
                  >
                     <div className="text-4xl mb-4">{card.icon}</div>
                     <h3 className="text-xl font-semibold text-foreground mb-2">
                        {card.title}
                     </h3>
                     <p className="text-muted-foreground">{card.description}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
