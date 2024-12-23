export default function About() {
  const features = [
    {
      title: "Efficiency Meets Simplicity",
      description: "Reduce storage costs and optimize token management with cutting-edge compression technology."
    },
    {
      title: "Unlock the Future of Token Management",
      description: "Easily compress and decompress tokens with one-click functionality—no technical expertise required."
    },
    {
      title: "Built for Developers, Perfect for Everyone",
      description: "Navigate seamlessly with a clean, user-friendly design built for both developers and everyday users."
    },
    {
      title: "Future-Ready Features",
      description: "Prepare for advanced tools like swapping compressed tokens, micropayments, and AI reccomendations.",
      badge: "Soon"
    }
  ];

  return (
    <section id="about" className=" py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-base-200 rounded-lg p-6">
              <div className="font-mono">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg text-primary">{feature.title}</span>
                  {feature.badge && (
                    <span className="ml-auto text-xs border border-primary rounded px-2 py-0.5 text-primary">
                      {feature.badge}
                    </span>
                  )}
                </div>
    
                <div className="text-secondary">
                  <p>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 