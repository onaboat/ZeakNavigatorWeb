'use client';
import { useEffect } from 'react';

export default function ParticleOrb() {
  useEffect(() => {
    const styleSheet = document.createElement('style');
    const particles = Array.from({ length: 300 }, (_, i) => {
      const z = Math.random() * 360;
      const y = Math.random() * 360;
      const hue = (i * 40) / 300;
      
      return `
        .c:nth-child(${i + 1}) {
          animation: orbit${i} 14s infinite;
          animation-delay: ${i * 0.01}s;
          background-color: hsla(${hue}, 100%, 50%, 1);
        }

        @keyframes orbit${i} {
          20% {
            opacity: 1;
          }
          30% {
            transform: rotateZ(-${z}deg) rotateY(${y}deg) translateX(100px) rotateZ(${z}deg);
          }
          80% {
            transform: rotateZ(-${z}deg) rotateY(${y}deg) translateX(100px) rotateZ(${z}deg);
            opacity: 1;
          }
          100% {
            transform: rotateZ(-${z}deg) rotateY(${y}deg) translateX(300px) rotateZ(${z}deg);
          }
        }
      `;
    }).join('\n');

    styleSheet.textContent = particles;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
      return undefined;
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-black overflow-hidden">
      <div className="wrap">
        {[...Array(300)].map((_, i) => (
          <div key={i} className="c" />
        ))}
      </div>

      <style jsx>{`
        .wrap {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transform-style: preserve-3d;
          perspective: 1000px;
          animation: rotate 14s infinite linear;
        }

        @keyframes rotate {
          100% {
            transform: translate(-50%, -50%) rotateY(360deg) rotateX(360deg);
          }
        }

        .c {
          position: absolute;
          width: 2px;
          height: 2px;
          border-radius: 50%;
          opacity: 0;
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
} 