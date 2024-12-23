export default function Logos() {
  const logos = [
    { name: "Solana", src: "/logos/solana.png" },
    { name: "Helius", src: "/logos/poweredbyhelius.png" },
    { name: "Jupiter", src: "/logos/Jupiter.png" },
    { name: "Pumpfun", src: "/logos/Pumpfun.png" },
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 place-items-center md:grid-cols-4 lg:flex items-center justify-center gap-6 md:gap-8 lg:gap-16">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="w-32 md:w-36 lg:w-40 h-12 md:h-14 lg:h-16 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity"
            >
              <img src={logo.src} alt={logo.name} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 