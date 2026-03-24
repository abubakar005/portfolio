type GraphicProps = {
  className?: string;
  "aria-label"?: string;
};

export function ApigeeCertArt({ className, "aria-label": ariaLabel }: GraphicProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 400"
      fill="none"
      className={className}
      role="img"
      aria-label={ariaLabel}
    >
      <defs>
        <linearGradient
          id="cert-apigee-bg"
          x1="0"
          y1="0"
          x2="640"
          y2="400"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0f172a" />
          <stop offset="1" stopColor="#1e3a5f" />
        </linearGradient>
        <linearGradient
          id="cert-apigee-accent"
          x1="120"
          y1="0"
          x2="520"
          y2="400"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4285f4" stopOpacity="0.35" />
          <stop offset="1" stopColor="#34a853" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <rect width="640" height="400" rx="16" fill="url(#cert-apigee-bg)" />
      <rect
        x="24"
        y="24"
        width="592"
        height="352"
        rx="12"
        stroke="rgba(148,163,184,0.35)"
        strokeWidth="2"
        fill="url(#cert-apigee-accent)"
      />
      <rect
        x="40"
        y="40"
        width="560"
        height="320"
        rx="8"
        stroke="rgba(226,232,240,0.12)"
        strokeWidth="1"
        fill="none"
      />
      <circle
        cx="320"
        cy="118"
        r="36"
        stroke="rgba(66,133,244,0.85)"
        strokeWidth="2"
        fill="rgba(15,23,42,0.5)"
      />
      <path
        d="M320 94v16l14 8"
        stroke="rgba(226,232,240,0.9)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <text
        x="320"
        y="192"
        textAnchor="middle"
        fill="#f1f5f9"
        style={{ fontFamily: "system-ui, sans-serif", fontSize: 22, fontWeight: 600 }}
      >
        Apigee API Engineer
      </text>
      <text
        x="320"
        y="226"
        textAnchor="middle"
        fill="#94a3b8"
        style={{ fontFamily: "system-ui, sans-serif", fontSize: 14, fontWeight: 500 }}
      >
        Google Cloud · APIs Development
      </text>
      <text
        x="320"
        y="288"
        textAnchor="middle"
        fill="#64748b"
        style={{ fontFamily: "system-ui, sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em" }}
      >
        CERTIFICATION
      </text>
      <text
        x="320"
        y="318"
        textAnchor="middle"
        fill="#cbd5e1"
        style={{ fontFamily: "system-ui, sans-serif", fontSize: 13 }}
      >
        Dec 2018
      </text>
    </svg>
  );
}

export function UipathCertArt({ className, "aria-label": ariaLabel }: GraphicProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 400"
      fill="none"
      className={className}
      role="img"
      aria-label={ariaLabel}
    >
      <defs>
        <linearGradient
          id="cert-uipath-bg"
          x1="0"
          y1="0"
          x2="640"
          y2="400"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0c0a09" />
          <stop offset="1" stopColor="#292524" />
        </linearGradient>
        <linearGradient
          id="cert-uipath-accent"
          x1="80"
          y1="40"
          x2="560"
          y2="360"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ea580c" stopOpacity="0.45" />
          <stop offset="1" stopColor="#f97316" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <rect width="640" height="400" rx="16" fill="url(#cert-uipath-bg)" />
      <rect
        x="24"
        y="24"
        width="592"
        height="352"
        rx="12"
        stroke="rgba(251,146,60,0.35)"
        strokeWidth="2"
        fill="url(#cert-uipath-accent)"
      />
      <rect
        x="40"
        y="40"
        width="560"
        height="320"
        rx="8"
        stroke="rgba(254,215,170,0.15)"
        strokeWidth="1"
        fill="none"
      />
      <g transform="translate(320 118)">
        <rect
          x="-34"
          y="-26"
          width="68"
          height="52"
          rx="8"
          stroke="rgba(249,115,22,0.9)"
          strokeWidth="2"
          fill="rgba(12,10,9,0.6)"
        />
        <circle cx="-12" cy="-6" r="5" fill="#fdba74" />
        <path d="M8 -2l10 6-10 6v-12z" fill="#fed7aa" />
        <rect x="-22" y="10" width="44" height="4" rx="2" fill="rgba(254,243,199,0.35)" />
      </g>
      <text
        x="320"
        y="192"
        textAnchor="middle"
        fill="#fafaf9"
        style={{ fontFamily: "system-ui, sans-serif", fontSize: 22, fontWeight: 600 }}
      >
        RPA Certified
      </text>
      <text
        x="320"
        y="226"
        textAnchor="middle"
        fill="#a8a29e"
        style={{ fontFamily: "system-ui, sans-serif", fontSize: 14, fontWeight: 500 }}
      >
        UiPath · Robotics
      </text>
      <text
        x="320"
        y="288"
        textAnchor="middle"
        fill="#78716c"
        style={{ fontFamily: "system-ui, sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em" }}
      >
        CERTIFICATION
      </text>
      <text
        x="320"
        y="318"
        textAnchor="middle"
        fill="#d6d3d1"
        style={{ fontFamily: "system-ui, sans-serif", fontSize: 13 }}
      >
        Jun 2018
      </text>
    </svg>
  );
}
