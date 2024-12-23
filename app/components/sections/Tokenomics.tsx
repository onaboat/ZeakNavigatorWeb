export default function Tokenomics() {
  return (
    <section id="tokenomics" className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-secondary">Tokenomics</h2>
        
        {/* Distribution Text */}
        <div className="flex justify-center items-center gap-6 flex-wrap mb-10">
          <div className="flex items-center gap-6">
            <div className="text-center">
              <span className="font-semibold block">pump.fun liquidity pool</span>
              <span className="font-bold text-xl">100%</span>
            </div>
            
            <div className="w-px h-12 bg-primary"></div>
            
            <div className="text-center">
              <span className="font-semibold block">VC's</span>
              <span className="font-bold text-xl">0%</span>
            </div>
            
            <div className="w-px h-12 bg-primary"></div>
            
            <div className="text-center">
              <span className="font-semibold block">Team & early contributors</span>
              <span className="font-bold text-xl">0%</span>
            </div>
            
            <div className="w-px h-12 bg-primary"></div>
            
            <div className="text-center">
              <span className="font-semibold block">Pre-sale</span>
              <span className="font-bold text-xl">0%</span>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
} 