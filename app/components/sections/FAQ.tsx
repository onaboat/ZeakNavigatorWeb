export default function FAQ() {
  return (
    <section id="faq" className="py-10">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center mb-10 text-secondary">FAQ</h2>
        <div className="join join-vertical w-full max-w-2xl">
          <input 
            type="radio" 
            name="faq-accordion" 
            className="hidden" 
            defaultChecked 
          />
          
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="faq-accordion" /> 
            <div className="collapse-title text-xl font-medium">
              How Does $ZK Support the Project?
            </div>
            <div className="collapse-content">
              <ul className="list-disc pl-6 space-y-2">
                <li>Fueling Innovation - Funds raised through $ZK support ongoing development, new features, and community growth.</li>
                <li>Web3 VC Vision - Holding $ZK allows the community to act as a decentralized venture capital network, supporting projects and ideas aligned with zkCompression and Web3 values.</li>
                <li>No Promises, No Guarantees - $ZK is about funding the future, not expecting financial returns.</li>
              </ul>
            </div>
          </div>
{/* 
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium">
              What Can Navigator NFTs Do?
            </div>
            <div className="collapse-content">
              <ul className="list-disc pl-6 space-y-2">
                <li>Community Recognition - Represent your role in shaping the community.</li>
                <li>Exclusive Perks - Early access to features, governance input, and alpha drops.</li>
                <li>Skill-Based Rewards - Earn NFTs by contributing to development, art, or marketing to grow the ecosystem.</li>
                <li>Locked Value - Some NFTs require $ZK to be locked, fostering deeper commitment to the project.</li>
              </ul>
            </div>
          </div> */}

          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium">
              Who Is zeak Navigator For?
            </div>
            <div className="collapse-content">
              <ul className="list-disc pl-6 space-y-2">
                <li>Builders & Developers - Simplify token management with cutting-edge tools.</li>
                <li>Traders & Holders - Optimize costs with zkCompression and streamline your workflow.</li>
                <li>Explorers & Innovators - Stay ahead in the Solana ecosystem with a platform designed to grow and adapt.</li>
              </ul>
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium">
              Future Plans (What&apos;s Next?)
            </div>
            <div className="collapse-content">
              <ul className="list-disc pl-6 space-y-2">
                <li>DeFi Tools - Integrations for swapping, staking, and micropayments with compressed tokens.</li>
                <li>Community-Driven Growth - Decisions and directions shaped by NFT holders and contributors.</li>
                <li>Big Reveal at $5M Market Cap - Unlock new details about rewards, partnerships, and expansion plans.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 