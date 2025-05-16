export default function Mission() {
  return (
    <section id="mission" className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-secondary">Our Mission</h2>
        <p className="text-4xl text-center mb-10 text-secondary">Effortless Token Control for Everyone — Streamlined Management, Powerful Compression Tools, and zkCompression-Backed Efficiency</p>
        
        <div className="grid grid-cols-1 max-w-2xl mx-auto">
          {/* $ZK Token Column */}
          <div className="bg-base-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">$ZK Token</h3>
            <div className="space-y-4 text-secondary">
              <p>$ZK is the utility token for zeak Navigator.</p>
              <p>No promises, no expectations.</p>
              <p>Just seamless token management and cutting-edge zkCompression tools.</p>
              <p>Hold $ZK and stay ahead as we unlock the future of Solana.</p>
            </div>
          </div>

          {/* Navigator NFT Column */}
          {/* <div className="bg-base-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Navigator NFT</h3>
            <div className="space-y-4 text-secondary">
              <p>Navigator NFTs are unique digital collectibles inspired by exploration and innovation.</p>
              <p>Top $ZK holders will be rewarded with a Navigator NFT. These NFTs come with exclusive perks—early access to features, premium tools, and more.</p>
              <p>You definitely want to collect one (alpha!).</p>
            </div> 
          </div>*/}
        </div>
      </div>
    </section>
  );
} 