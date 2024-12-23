'use client';
import Logos from "./Logos";
import ParticleOrb from "../ParticleOrb";

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden">
        
            <div className="hero min-h-screen">
                <div className="hero-content text-center">
                    <div className="flex flex-col items-center">
                        <h1 className="text-5xl font-bold text-primary">Power Up Your Wallet. Unlock the Future.</h1>
                        <h3 className="text-3xl font-bold text-primary">Manage Compressed Tokens Effortlessly with zeak Navigator</h3>
                        <div className="max-w-lg mx-auto">
                            <p className="py-6 text-secondary">Simplify Token Management with Cutting-Edge zkCompression Technology—Fast, Secure, and Cost-Effective</p>
                        </div>
                        {/* <ParticleOrb /> */}
                        <Logos />
                    </div>
                </div>
            </div>
        </section>
    );
} 