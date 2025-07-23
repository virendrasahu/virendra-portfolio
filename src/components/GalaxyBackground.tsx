import { useEffect, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

const GalaxyBackground = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Create initial stars
    const initialStars: Star[] = [];
    for (let i = 0; i < 100; i++) {
      initialStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.8 + 0.2,
      });
    }
    setStars(initialStars);

    // Animate stars
    const animateStars = () => {
      setStars(prevStars =>
        prevStars.map(star => ({
          ...star,
          y: star.y > 100 ? -5 : star.y + star.speed,
          opacity: Math.sin(Date.now() * 0.001 + star.id) * 0.3 + 0.7,
        }))
      );
    };

    const interval = setInterval(animateStars, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Galaxy gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950" />
      
      {/* Nebula effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Falling stars */}
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.8)`,
          }}
        />
      ))}
      
      {/* Shooting stars */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-80"
            style={{
              top: `${20 + i * 30}%`,
              left: '10%',
              animation: `shootingStar 3s linear infinite`,
              animationDelay: `${i * 2}s`,
              boxShadow: '0 0 6px rgba(255, 255, 255, 0.8)',
            }}
          />
        ))}
      </div>
      
      <style>{`
        @keyframes shootingStar {
          0% {
            transform: translateX(-100px) translateY(-100px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(100vw) translateY(100vh);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default GalaxyBackground;