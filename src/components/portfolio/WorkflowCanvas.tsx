export function WorkflowCanvas() {
  const nodes = [
    { x: 60, y: 120, label: "Lead" },
    { x: 220, y: 60, label: "Apollo" },
    { x: 380, y: 130, label: "AI Agent" },
    { x: 540, y: 70, label: "CRM" },
    { x: 700, y: 150, label: "Email" },
    { x: 220, y: 240, label: "Voice" },
    { x: 400, y: 300, label: "LLM" },
    { x: 580, y: 250, label: "Calendar" },
  ];
  const links: [number, number][] = [[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[2,6]];
  return (
    <svg viewBox="0 0 800 380" className="w-full h-full">
      <defs>
        <linearGradient id="line" x1="0" x2="1">
          <stop offset="0%" stopColor="#0077B6" stopOpacity="0.2"/>
          <stop offset="50%" stopColor="#CAF0F8" stopOpacity="1"/>
          <stop offset="100%" stopColor="#0077B6" stopOpacity="0.2"/>
        </linearGradient>
        <radialGradient id="nodeGrad">
          <stop offset="0%" stopColor="#CAF0F8"/>
          <stop offset="100%" stopColor="#0077B6"/>
        </radialGradient>
        <filter id="glow"><feGaussianBlur stdDeviation="3"/></filter>
      </defs>
      {links.map(([a,b],i) => (
        <line key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
          stroke="url(#line)" strokeWidth="1.5" className="animate-dash" strokeDasharray="6 8"/>
      ))}
      {nodes.map((n,i) => (
        <g key={i} style={{ animationDelay: `${i*0.2}s` }} className="animate-pulse-node">
          <circle cx={n.x} cy={n.y} r="18" fill="url(#nodeGrad)" filter="url(#glow)" opacity="0.5"/>
          <circle cx={n.x} cy={n.y} r="9" fill="#CAF0F8"/>
          <text x={n.x} y={n.y + 34} textAnchor="middle" fill="#03045E" fontSize="11" fontFamily="Inter" opacity="0.75">{n.label}</text>
        </g>
      ))}
    </svg>
  );
}
