// Helper to generate elegant, realistic cookware SVG data URIs for product gallery angles and category cards

export function generateCookwareSvg(
  productName: string,
  category: string,
  angleLabel: string,
  colorScheme: 'roti' | 'honeycomb' | 'hexapro',
  size: string
): string {
  let primaryGradient = ['#2c3036', '#14181c'];
  let accentColor = '#e5a93c'; // Warm metallic gold accent
  let patternSvg = '';

  const cleanId = productName.replace(/[^a-zA-Z0-9]/g, '');

  if (colorScheme === 'honeycomb') {
    primaryGradient = ['#23272e', '#0f1216'];
    accentColor = '#38bdf8'; // Sleek cyan accent
    patternSvg = `
      <pattern id="honeycomb-${cleanId}" width="16" height="28" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
        <path d="M8 0 L16 4.6 L16 13.8 L8 18.4 L0 13.8 L0 4.6 Z" fill="none" stroke="#ffffff" stroke-opacity="0.08" stroke-width="1.2"/>
        <path d="M8 18.4 L16 23 L16 32.2 L8 36.8 L0 32.2 L0 23 Z" fill="none" stroke="#ffffff" stroke-opacity="0.08" stroke-width="1.2"/>
      </pattern>
    `;
  } else if (colorScheme === 'hexapro') {
    primaryGradient = ['#1e232a', '#0d1013'];
    accentColor = '#f43f5e'; // Deep rose/ruby accent
    patternSvg = `
      <pattern id="hexapro-${cleanId}" width="20" height="20" patternUnits="userSpaceOnUse">
        <polygon points="10,0 20,5 20,15 10,20 0,15 0,5" fill="none" stroke="#ffffff" stroke-opacity="0.07" stroke-width="1.5"/>
      </pattern>
    `;
  } else {
    // Roti maker matte steel finish
    primaryGradient = ['#333842', '#1a1d24'];
    accentColor = '#f59e0b';
    patternSvg = `
      <pattern id="grid-${cleanId}" width="30" height="30" patternUnits="userSpaceOnUse">
        <circle cx="15" cy="15" r="1.5" fill="#ffffff" fill-opacity="0.1"/>
      </pattern>
    `;
  }

  const svgString = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${primaryGradient[0]}" />
      <stop offset="100%" stop-color="${primaryGradient[1]}" />
    </linearGradient>

    <linearGradient id="steelMetal" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9" />
      <stop offset="25%" stop-color="#cbd5e1" stop-opacity="0.6" />
      <stop offset="50%" stop-color="#64748b" stop-opacity="0.4" />
      <stop offset="75%" stop-color="#94a3b8" stop-opacity="0.7" />
      <stop offset="100%" stop-color="#334155" stop-opacity="0.9" />
    </linearGradient>

    <linearGradient id="glow" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${accentColor}" stop-opacity="0.3" />
      <stop offset="100%" stop-color="${accentColor}" stop-opacity="0.0" />
    </linearGradient>

    <filter id="dropShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="16" stdDeviation="20" flood-color="#000000" flood-opacity="0.6" />
    </filter>
    
    ${patternSvg}
  </defs>

  <!-- Background -->
  <rect width="800" height="600" fill="url(#bgGrad)" />
  
  <!-- Subtle pattern overlay -->
  ${patternSvg ? `<rect width="800" height="600" fill="url(#${colorScheme === 'honeycomb' ? 'honeycomb-' : colorScheme === 'hexapro' ? 'hexapro-' : 'grid-'}${cleanId})" />` : ''}

  <!-- Ambient Glow -->
  <circle cx="400" cy="300" r="240" fill="url(#glow)" />

  <!-- Cookware Main Visual Representation -->
  <g filter="url(#dropShadow)" transform="translate(400, 270)">
    <!-- Base outer rim -->
    <ellipse cx="0" cy="20" rx="200" ry="120" fill="#0f172a" stroke="#475569" stroke-width="4" />
    <ellipse cx="0" cy="10" rx="194" ry="114" fill="url(#steelMetal)" />
    <ellipse cx="0" cy="0" rx="180" ry="104" fill="#1e293b" stroke="${accentColor}" stroke-width="2" stroke-opacity="0.5" />
    
    <!-- Pattern surface interior -->
    <ellipse cx="0" cy="0" rx="170" ry="96" fill="${colorScheme === 'honeycomb' ? '#111827' : '#0f172a'}" />
    
    ${colorScheme === 'honeycomb' ? `
      <ellipse cx="0" cy="0" rx="160" ry="90" fill="url(#honeycomb-${cleanId})" />
    ` : colorScheme === 'hexapro' ? `
      <ellipse cx="0" cy="0" rx="160" ry="90" fill="url(#hexapro-${cleanId})" />
    ` : `
      <circle cx="0" cy="0" r="70" fill="none" stroke="#475569" stroke-width="3" />
      <circle cx="0" cy="0" r="45" fill="none" stroke="${accentColor}" stroke-width="2" stroke-dasharray="6,6" />
    `}

    <!-- Handle representation -->
    <path d="M 180 -10 L 290 -25 C 310 -25 320 -10 310 10 L 180 20 Z" fill="url(#steelMetal)" />
    <rect x="230" y="-22" width="70" height="38" rx="6" fill="#090d16" stroke="#475569" stroke-width="1.5" />
  </g>

  <!-- Watermark & Spec Metadata Badge -->
  <g transform="translate(40, 40)">
    <rect width="180" height="32" rx="16" fill="#000000" fill-opacity="0.4" stroke="#ffffff" stroke-opacity="0.1" />
    <text x="16" y="21" font-family="'Outfit', sans-serif" font-size="13" font-weight="600" fill="${accentColor}" letter-spacing="1">
      ${category.toUpperCase()}
    </text>
  </g>

  <!-- View Angle Ribbon Badge -->
  <g transform="translate(760, 40)">
    <rect x="-180" y="0" width="180" height="32" rx="16" fill="#000000" fill-opacity="0.5" stroke="${accentColor}" stroke-opacity="0.4" />
    <text x="-90" y="21" font-family="'Outfit', sans-serif" font-size="13" font-weight="600" fill="#ffffff" text-anchor="middle" letter-spacing="1">
      ${angleLabel.toUpperCase()}
    </text>
  </g>

  <!-- Bottom Details Bar -->
  <rect x="0" y="520" width="800" height="80" fill="#090d16" fill-opacity="0.9" />
  <line x1="0" y1="520" x2="800" y2="520" stroke="#334155" stroke-width="1" />
  
  <text x="40" y="554" font-family="'Outfit', sans-serif" font-size="20" font-weight="700" fill="#ffffff">
    ${productName}
  </text>
  
  <text x="40" y="578" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="500" fill="#94a3b8">
    Size: ${size} • Premium Stainless Steel Construction
  </text>

  <g transform="translate(760, 560)">
    <text x="0" y="0" font-family="'Outfit', sans-serif" font-size="12" font-weight="600" fill="${accentColor}" text-anchor="end" letter-spacing="1.5">
      SHRI VIJAYA KITCHENWARE
    </text>
  </g>
</svg>
  `.trim();

  return `data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`;
}
