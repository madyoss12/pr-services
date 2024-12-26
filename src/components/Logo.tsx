'use client';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-3"
      >
        {/* Main gradient background */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#2563EB' }} />
            <stop offset="100%" style={{ stopColor: '#1E40AF' }} />
          </linearGradient>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.2"/>
          </filter>
        </defs>

        {/* Outer ring with gradient */}
        <circle 
          cx="24" 
          cy="24" 
          r="23" 
          fill="url(#logoGradient)"
          filter="url(#shadow)"
        />

        {/* Inner design elements */}
        <path
          d="M14 34V14H24.5C27.3 14 29.5 14.7 31.1 16.1C32.7 17.5 33.5 19.4 33.5 21.8C33.5 24.2 32.7 26.1 31.1 27.5C29.5 28.9 27.3 29.6 24.5 29.6H19V34H14Z"
          fill="white"
        />
        <path
          d="M19 25.6H24.1C25.5 25.6 26.6 25.3 27.4 24.7C28.2 24.1 28.6 23.2 28.6 22C28.6 20.8 28.2 19.9 27.4 19.3C26.6 18.7 25.5 18.4 24.1 18.4H19V25.6Z"
          fill="url(#logoGradient)"
        />

        {/* Dynamic swoosh */}
        <path
          d="M34 34L29 29.6H32.5L37.5 34H34Z"
          fill="white"
          className="transform origin-center"
        />

        {/* Decorative dots */}
        <circle cx="38" cy="16" r="1.5" fill="white" opacity="0.6" />
        <circle cx="35" cy="13" r="1" fill="white" opacity="0.4" />
      </svg>
      <div className="flex flex-col">
        <span className="text-xl font-bold tracking-tight">PR Services</span>
        <span className="text-xs text-blue-600 font-medium tracking-wider">PRESS RELEASE EXPERTS</span>
      </div>
    </div>
  );
}
