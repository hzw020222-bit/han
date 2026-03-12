import { useState, useEffect, useRef } from "react";

const STAGES = [
  {
    name: "Egg",
    minXP: 0,
    emoji: "🥚",
    color: "#ffb3c6",
    glow: "#ff6b9d",
    description: "A mysterious egg...",
    draw: (ctx, t) => {
      // Egg body
      ctx.fillStyle = "#fff0f5";
      ctx.beginPath();
      ctx.ellipse(60, 68, 28, 34, 0, 0, Math.PI * 2);
      ctx.fill();
      // Shell shine
      ctx.fillStyle = "rgba(255,255,255,0.7)";
      ctx.beginPath();
      ctx.ellipse(52, 55, 9, 14, -0.4, 0, Math.PI * 2);
      ctx.fill();
      // Crack (appears after some xp)
      ctx.strokeStyle = "#ffb3c6";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(58, 44); ctx.lineTo(63, 52); ctx.lineTo(56, 58);
      ctx.stroke();
      // Wobble dots
      ctx.fillStyle = "#ffb3c6";
      ctx.beginPath(); ctx.arc(60 + Math.sin(t * 0.03) * 2, 110, 4, 0, Math.PI * 2); ctx.fill();
    },
  },
  {
    name: "Sprout",
    minXP: 60,
    emoji: "🐣",
    color: "#ffd6a5",
    glow: "#ffaa33",
    description: "It hatched! So tiny!",
    draw: (ctx, t) => {
      const bob = Math.sin(t * 0.04) * 3;
      // Body
      ctx.fillStyle = "#fff3cd";
      ctx.beginPath(); ctx.ellipse(60, 75 + bob, 22, 20, 0, 0, Math.PI * 2); ctx.fill();
      // Head
      ctx.fillStyle = "#fff3cd";
      ctx.beginPath(); ctx.arc(60, 52 + bob, 19, 0, Math.PI * 2); ctx.fill();
      // Cheeks
      ctx.fillStyle = "#ffb347";
      ctx.globalAlpha = 0.5;
      ctx.beginPath(); ctx.ellipse(47, 57 + bob, 7, 5, 0, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.ellipse(73, 57 + bob, 7, 5, 0, 0, Math.PI * 2); ctx.fill();
      ctx.globalAlpha = 1;
      // Eyes
      ctx.fillStyle = "#3d2b1f";
      ctx.beginPath(); ctx.arc(53, 50 + bob, 4, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(67, 50 + bob, 4, 0, Math.PI * 2); ctx.fill();
      // Eye shine
      ctx.fillStyle = "white";
      ctx.beginPath(); ctx.arc(55, 48 + bob, 1.5, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(69, 48 + bob, 1.5, 0, Math.PI * 2); ctx.fill();
      // Mouth
      ctx.strokeStyle = "#3d2b1f"; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.arc(60, 56 + bob, 5, 0.1, Math.PI - 0.1); ctx.stroke();
      // Tiny wings
      ctx.fillStyle = "#ffe0a0";
      ctx.beginPath(); ctx.ellipse(38, 72 + bob, 10, 6, -0.4, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.ellipse(82, 72 + bob, 10, 6, 0.4, 0, Math.PI * 2); ctx.fill();
      // Feet
      ctx.fillStyle = "#ffaa33";
      ctx.beginPath(); ctx.ellipse(50, 94, 8, 4, 0, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.ellipse(70, 94, 8, 4, 0, 0, Math.PI * 2); ctx.fill();
    },
  },
  {
    name: "Coder Bud",
    minXP: 180,
    emoji: "🐱",
    color: "#b5ead7",
    glow: "#2ec4b6",
    description: "Learning to code!",
    draw: (ctx, t) => {
      const bob = Math.sin(t * 0.04) * 2;
      // Body
      ctx.fillStyle = "#c8f0e0";
      ctx.beginPath(); ctx.ellipse(60, 78 + bob, 26, 24, 0, 0, Math.PI * 2); ctx.fill();
      // Head
      ctx.fillStyle = "#c8f0e0";
      ctx.beginPath(); ctx.arc(60, 50 + bob, 22, 0, Math.PI * 2); ctx.fill();
      // Ears
      ctx.fillStyle = "#c8f0e0";
      ctx.beginPath(); ctx.moveTo(42, 34 + bob); ctx.lineTo(36, 20 + bob); ctx.lineTo(52, 30 + bob); ctx.closePath(); ctx.fill();
      ctx.beginPath(); ctx.moveTo(78, 34 + bob); ctx.lineTo(84, 20 + bob); ctx.lineTo(68, 30 + bob); ctx.closePath(); ctx.fill();
      ctx.fillStyle = "#ffb3c6";
      ctx.beginPath(); ctx.moveTo(43, 32 + bob); ctx.lineTo(38, 22 + bob); ctx.lineTo(51, 31 + bob); ctx.closePath(); ctx.fill();
      ctx.beginPath(); ctx.moveTo(77, 32 + bob); ctx.lineTo(82, 22 + bob); ctx.lineTo(69, 31 + bob); ctx.closePath(); ctx.fill();
      // Cheeks
      ctx.fillStyle = "#ffb3c6"; ctx.globalAlpha = 0.5;
      ctx.beginPath(); ctx.ellipse(44, 54 + bob, 8, 6, 0, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.ellipse(76, 54 + bob, 8, 6, 0, 0, Math.PI * 2); ctx.fill();
      ctx.globalAlpha = 1;
      // Eyes (happy)
      ctx.strokeStyle = "#3d2b1f"; ctx.lineWidth = 2.5;
      ctx.beginPath(); ctx.arc(52, 49 + bob, 5, Math.PI, 0); ctx.stroke();
      ctx.beginPath(); ctx.arc(68, 49 + bob, 5, Math.PI, 0); ctx.stroke();
      // Tiny laptop
      ctx.fillStyle = "#silver";
      ctx.fillStyle = "#4a9eff";
      ctx.fillRect(42, 90, 36, 5);
      ctx.fillStyle = "#2d7dd2";
      ctx.fillRect(44, 82, 32, 9);
      ctx.fillStyle = "#0d1b2a";
      ctx.fillRect(46, 83, 28, 7);
      // Code on screen
      ctx.fillStyle = "#4ade80";
      ctx.font = "5px monospace";
      ctx.fillText(">_", 48, 88);
      // Tail
      ctx.strokeStyle = "#c8f0e0"; ctx.lineWidth = 5;
      ctx.beginPath(); ctx.moveTo(86, 80 + bob); ctx.quadraticCurveTo(100, 65 + bob, 90, 50 + bob); ctx.stroke();
    },
  },
  {
    name: "Dev Cat",
    minXP: 380,
    emoji: "😸",
    color: "#a0c4ff",
    glow: "#4361ee",
    description: "Shipping features daily!",
    draw: (ctx, t) => {
      const bob = Math.sin(t * 0.04) * 2;
      const earWiggle = Math.sin(t * 0.08) * 1.5;
      // Cape/hoodie body
      ctx.fillStyle = "#5b8dee";
      ctx.beginPath(); ctx.ellipse(60, 80 + bob, 30, 28, 0, 0, Math.PI * 2); ctx.fill();
      // Head
      ctx.fillStyle = "#bde0fe";
      ctx.beginPath(); ctx.arc(60, 50 + bob, 24, 0, Math.PI * 2); ctx.fill();
      // Ears
      ctx.fillStyle = "#bde0fe";
      ctx.beginPath(); ctx.moveTo(40, 33 + bob + earWiggle); ctx.lineTo(33, 17 + bob); ctx.lineTo(53, 28 + bob); ctx.closePath(); ctx.fill();
      ctx.beginPath(); ctx.moveTo(80, 33 + bob - earWiggle); ctx.lineTo(87, 17 + bob); ctx.lineTo(67, 28 + bob); ctx.closePath(); ctx.fill();
      ctx.fillStyle = "#ffb3c6";
      ctx.beginPath(); ctx.moveTo(41, 31 + bob + earWiggle); ctx.lineTo(35, 20 + bob); ctx.lineTo(52, 29 + bob); ctx.closePath(); ctx.fill();
      ctx.beginPath(); ctx.moveTo(79, 31 + bob - earWiggle); ctx.lineTo(85, 20 + bob); ctx.lineTo(68, 29 + bob); ctx.closePath(); ctx.fill();
      // Cheeks
      ctx.fillStyle = "#ffb3c6"; ctx.globalAlpha = 0.6;
      ctx.beginPath(); ctx.ellipse(44, 55 + bob, 9, 7, 0, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.ellipse(76, 55 + bob, 9, 7, 0, 0, Math.PI * 2); ctx.fill();
      ctx.globalAlpha = 1;
      // Eyes (stars / sparkle)
      ctx.fillStyle = "#3d2b1f";
      ctx.beginPath(); ctx.arc(51, 49 + bob, 6, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(69, 49 + bob, 6, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = "#ffd700";
      ctx.font = "bold 9px sans-serif";
      ctx.fillText("★", 47, 53 + bob);
      ctx.fillText("★", 65, 53 + bob);
      // Glasses
      ctx.strokeStyle = "#2d3142"; ctx.lineWidth = 1.5;
      ctx.strokeRect(44, 44 + bob, 14, 11);
      ctx.strokeRect(62, 44 + bob, 14, 11);
      ctx.beginPath(); ctx.moveTo(58, 49 + bob); ctx.lineTo(62, 49 + bob); ctx.stroke();
      // Hoodie pocket + code badge
      ctx.fillStyle = "#4a7de8";
      ctx.fillRect(48, 80, 24, 16);
      ctx.fillStyle = "#0d1b2a"; ctx.font = "5px monospace";
      ctx.fillStyle = "#a0c4ff"; ctx.fillText("{ }", 53, 91);
      // Tail
      ctx.strokeStyle = "#bde0fe"; ctx.lineWidth = 6;
      ctx.beginPath(); ctx.moveTo(88, 85 + bob); ctx.quadraticCurveTo(105, 68 + bob, 92, 48 + bob); ctx.stroke();
    },
  },
  {
    name: "Code Wizard",
    minXP: 650,
    emoji: "🧙",
    color: "#ffd6ff",
    glow: "#c77dff",
    description: "Legendary 10x developer!",
    draw: (ctx, t) => {
      const bob = Math.sin(t * 0.04) * 2;
      const glow = (Math.sin(t * 0.05) + 1) / 2;
      // Magical aura
      ctx.save();
      ctx.globalAlpha = 0.15 + glow * 0.1;
      ctx.fillStyle = "#c77dff";
      ctx.beginPath(); ctx.arc(60, 62, 48, 0, Math.PI * 2); ctx.fill();
      ctx.globalAlpha = 1; ctx.restore();
      // Robe body
      ctx.fillStyle = "#7b2fff";
      ctx.beginPath(); ctx.ellipse(60, 82 + bob, 32, 30, 0, 0, Math.PI * 2); ctx.fill();
      // Star pattern on robe
      ctx.fillStyle = "#ffd6ff"; ctx.font = "8px sans-serif";
      ctx.fillText("✦", 48, 80 + bob);
      ctx.fillText("✦", 65, 90 + bob);
      ctx.fillText("✦", 52, 95 + bob);
      // Head
      ctx.fillStyle = "#e8c8ff";
      ctx.beginPath(); ctx.arc(60, 48 + bob, 25, 0, Math.PI * 2); ctx.fill();
      // Wizard hat
      ctx.fillStyle = "#5a00e0";
      ctx.beginPath(); ctx.moveTo(60, 8 + bob); ctx.lineTo(38, 30 + bob); ctx.lineTo(82, 30 + bob); ctx.closePath(); ctx.fill();
      ctx.fillStyle = "#7b2fff";
      ctx.beginPath(); ctx.ellipse(60, 31 + bob, 26, 8, 0, 0, Math.PI * 2); ctx.fill();
      // Hat star
      ctx.fillStyle = "#ffd700"; ctx.font = "10px sans-serif";
      ctx.fillText("⭐", 53, 22 + bob);
      // Ears
      ctx.fillStyle = "#e8c8ff";
      ctx.beginPath(); ctx.moveTo(37, 38 + bob); ctx.lineTo(30, 24 + bob); ctx.lineTo(48, 33 + bob); ctx.closePath(); ctx.fill();
      ctx.beginPath(); ctx.moveTo(83, 38 + bob); ctx.lineTo(90, 24 + bob); ctx.lineTo(72, 33 + bob); ctx.closePath(); ctx.fill();
      // Cheeks
      ctx.fillStyle = "#c77dff"; ctx.globalAlpha = 0.5;
      ctx.beginPath(); ctx.ellipse(44, 52 + bob, 9, 7, 0, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.ellipse(76, 52 + bob, 9, 7, 0, 0, Math.PI * 2); ctx.fill();
      ctx.globalAlpha = 1;
      // Eyes (magical swirls)
      ctx.fillStyle = "#3d2b1f";
      ctx.beginPath(); ctx.arc(51, 46 + bob, 7, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(69, 46 + bob, 7, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = "#c77dff";
      ctx.beginPath(); ctx.arc(51, 46 + bob, 4, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(69, 46 + bob, 4, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = "white";
      ctx.beginPath(); ctx.arc(53, 44 + bob, 2, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(71, 44 + bob, 2, 0, Math.PI * 2); ctx.fill();
      // Wand
      ctx.strokeStyle = "#5a00e0"; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(84, 70 + bob); ctx.lineTo(100, 50 + bob); ctx.stroke();
      ctx.fillStyle = "#ffd700"; ctx.font = "12px sans-serif";
      ctx.fillText("✨", 94, 52 + bob);
      // Tail with glow
      ctx.strokeStyle = "#c77dff"; ctx.lineWidth = 6;
      ctx.shadowColor = "#c77dff"; ctx.shadowBlur = 10;
      ctx.beginPath(); ctx.moveTo(90, 88 + bob); ctx.quadraticCurveTo(108, 68 + bob, 94, 45 + bob); ctx.stroke();
      ctx.shadowBlur = 0;
    },
  },
];

function PetCanvas({ stage, xp, tickRef }) {
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, 120, 120);
      stage.draw(ctx, t);
      t++;
      animRef.current = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(animRef.current);
  }, [stage]);

  return (
    <canvas
      ref={canvasRef}
      width={120}
      height={120}
      style={{ imageRendering: "pixelated" }}
    />
  );
}

function StatSlider({ icon, label, value, setValue, max, xpPer, color, unit }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 5 }}>
        <span style={{ fontSize: 13, color: "#e0e0e0" }}>{icon} {label}</span>
        <span style={{ fontSize: 12, color, fontWeight: 700 }}>
          {value}{unit} <span style={{ color: "#aaa", fontWeight: 400, fontSize: 11 }}>= +{value * xpPer} XP</span>
        </span>
      </div>
      <div style={{ position: "relative" }}>
        <input
          type="range" min={0} max={max} value={value}
          onChange={e => setValue(Number(e.target.value))}
          style={{ width: "100%", accentColor: color, cursor: "pointer", height: 6 }}
        />
      </div>
    </div>
  );
}

const MESSAGES = {
  "Egg":        ["Keep coding to hatch me! 🥚", "I can feel your keystrokes... 🥚", "Almost time to crack out! 🥚"],
  "Sprout":     ["Yay! I hatched! Code more! 🐣", "Every commit helps me grow!", "I love when you code! 🐣"],
  "Coder Bud":  ["I'm learning HTML from you! 🐱", "Push more commits, senpai!", "Projects make me so happy~ 💻"],
  "Dev Cat":    ["Ship it! Ship it! 😸", "I reviewed your PR, LGTM! 🚀", "10 commits today? Legend! 😸"],
  "Code Wizard":["You've achieved true mastery ✨", "The code flows through us both 🔮", "Together, we are unstoppable! 🧙"],
};

export function CodePet() {
  const [streak, setStreak] = useState(2);
  const [hours, setHours] = useState(1);
  const [commits, setCommits] = useState(3);
  const [projects, setProjects] = useState(0);
  const [msgIdx, setMsgIdx] = useState(0);
  const [particles, setParticles] = useState([]);
  const [prevStageIdx, setPrevStageIdx] = useState(0);
  const tickRef = useRef(0);

  const xp = streak * 12 + hours * 10 + commits * 8 + projects * 25;
  const stageIdx = STAGES.reduce((acc, s, i) => (xp >= s.minXP ? i : acc), 0);
  const stage = STAGES[stageIdx];
  const nextStage = STAGES[stageIdx + 1];
  const xpInStage = xp - stage.minXP;
  const xpNeeded = nextStage ? nextStage.minXP - stage.minXP : 1;
  const pct = nextStage ? Math.min(100, (xpInStage / xpNeeded) * 100) : 100;

  useEffect(() => {
    if (stageIdx > prevStageIdx) {
      const newP = Array.from({ length: 18 }, (_, i) => ({
        id: Date.now() + i,
        x: 30 + Math.random() * 140,
        y: 60 + Math.random() * 80,
        emoji: ["✨","🌟","💫","⭐","🎉","🎊"][Math.floor(Math.random() * 6)],
        dx: (Math.random() - 0.5) * 4,
        dy: -2 - Math.random() * 3,
        life: 1,
      }));
      setParticles(newP);
      setTimeout(() => setParticles([]), 1800);
    }
    setPrevStageIdx(stageIdx);
  }, [stageIdx]);

  useEffect(() => {
    const msgs = MESSAGES[stage.name];
    const t = setInterval(() => setMsgIdx(i => (i + 1) % msgs.length), 3500);
    return () => clearInterval(t);
  }, [stage.name]);

  const msgs = MESSAGES[stage.name];

  return (
    <div style={{
      
      
      display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: "'Nunito', sans-serif", padding: 16,
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap" rel="stylesheet" />

      <div style={{ width: "100%", maxWidth: 400 }}>
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <div style={{ fontSize: 26, fontWeight: 900, color: "white", letterSpacing: -0.5 }}>
            🐾 Code Pet
          </div>
          <div style={{ fontSize: 12, color: "#8892b0", fontWeight: 600 }}>
            Grow your companion by coding every day
          </div>
        </div>

        {/* Pet Card */}
        <div style={{
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(12px)",
          border: `1.5px solid ${stage.color}44`,
          borderRadius: 24,
          padding: 24,
          marginBottom: 16,
          position: "relative",
          overflow: "hidden",
          boxShadow: `0 0 40px ${stage.glow}22`,
        }}>
          {/* Particles */}
          {particles.map(p => (
            <div key={p.id} style={{
              position: "absolute", left: p.x, top: p.y,
              fontSize: 18, pointerEvents: "none",
              animation: "floatUp 1.8s ease-out forwards",
            }}>{p.emoji}</div>
          ))}

          <style>{`
            @keyframes floatUp { from { opacity: 1; transform: translateY(0); } to { opacity: 0; transform: translateY(-60px); } }
            @keyframes pulse { 0%,100% { opacity: 0.6; transform: scale(1); } 50% { opacity: 1; transform: scale(1.05); } }
            @keyframes shimmer { 0% { left: -100%; } 100% { left: 200%; } }
          `}</style>

          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            {/* Pet display */}
            <div style={{ flexShrink: 0, textAlign: "center" }}>
              <div style={{
                width: 130, height: 130,
                
                borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                border: `2px solid ${stage.color}55`,
                position: "relative",
              }}>
                <PetCanvas stage={stage} xp={xp} tickRef={tickRef} />
              </div>
              <div style={{
                marginTop: 8, fontSize: 13, fontWeight: 800,
                color: stage.color, textShadow: `0 0 12px ${stage.glow}`,
              }}>
                {stage.emoji} {stage.name}
              </div>
            </div>

            {/* Info */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                
                marginBottom: 12, minHeight: 48, display: "flex", alignItems: "center",
              }}>
                <span style={{ fontSize: 12, color: "#ccd6f6", fontWeight: 600, lineHeight: 1.5 }}>
                  "{msgs[msgIdx]}"
                </span>
              </div>

              <div style={{ marginBottom: 6, display: "flex", justifyContent: "space-between", fontSize: 12 }}>
                <span style={{ color: "#8892b0" }}>Total XP</span>
                <span style={{ color: stage.color, fontWeight: 800 }}>{xp} XP</span>
              </div>

              {/* XP Bar */}
              <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 99, height: 10, overflow: "hidden", marginBottom: 6 }}>
                <div style={{
                  width: `${pct}%`, height: "100%",
                  
                  borderRadius: 99, transition: "width 0.6s cubic-bezier(.34,1.56,.64,1)",
                  boxShadow: `0 0 10px ${stage.glow}`,
                  position: "relative", overflow: "hidden",
                }}>
                  <div style={{
                    position: "absolute", top: 0, bottom: 0, width: "60%",
                    
                    animation: "shimmer 2s infinite",
                  }} />
                </div>
              </div>

              <div style={{ fontSize: 11, color: "#8892b0" }}>
                {nextStage
                  ? `${xpNeeded - xpInStage} XP to ${nextStage.emoji} ${nextStage.name}`
                  : "✨ Maximum evolution reached!"}
              </div>
            </div>
          </div>
        </div>

        {/* Habits Card */}
        <div style={{
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(8px)",
          border: "1.5px solid rgba(255,255,255,0.08)",
          borderRadius: 24, padding: 24, marginBottom: 16,
        }}>
          <div style={{ fontSize: 14, fontWeight: 800, color: "white", marginBottom: 18 }}>
            📊 Today's Habits
          </div>
          <StatSlider icon="🔥" label="Streak" value={streak} setValue={setStreak} max={30} xpPer={12} color={stage.color} unit=" days" />
          <StatSlider icon="⏱" label="Hours coded" value={hours} setValue={setHours} max={12} xpPer={10} color={stage.color} unit="h" />
          <StatSlider icon="📦" label="Commits / PRs" value={commits} setValue={setCommits} max={20} xpPer={8} color={stage.color} unit="" />
          <StatSlider icon="🚀" label="Projects" value={projects} setValue={setProjects} max={10} xpPer={25} color={stage.color} unit="" />
        </div>

        {/* Evolution Path */}
        <div style={{
          background: "rgba(255,255,255,0.04)",
          border: "1.5px solid rgba(255,255,255,0.08)",
          borderRadius: 24, padding: "18px 24px",
        }}>
          <div style={{ fontSize: 14, fontWeight: 800, color: "white", marginBottom: 14 }}>🗺 Evolution Path</div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            {STAGES.map((s, i) => {
              const unlocked = i <= stageIdx;
              const isCurrent = i === stageIdx;
              return (
                <div key={s.name} style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{
                      width: 38, height: 38, borderRadius: "50%",
                      background: unlocked ? `linear-gradient(135deg, ${s.color}, ${s.glow})` : "rgba(255,255,255,0.06)",
                      border: isCurrent ? `2px solid ${s.glow}` : "2px solid transparent",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 18, marginBottom: 4,
                      boxShadow: isCurrent ? `0 0 16px ${s.glow}` : "none",
                      animation: isCurrent ? "pulse 2s infinite" : "none",
                      opacity: unlocked ? 1 : 0.35,
                      transition: "all 0.4s",
                    }}>
                      {s.emoji}
                    </div>
                    <div style={{ fontSize: 8, color: unlocked ? s.color : "#555", fontWeight: 700, maxWidth: 42, lineHeight: 1.2 }}>
                      {s.name}
                    </div>
                  </div>
                  {i < STAGES.length - 1 && (
                    <div style={{
                      width: 18, height: 2, margin: "0 2px", marginBottom: 14,
                      background: i < stageIdx ? `linear-gradient(90deg, ${s.color}, ${STAGES[i+1].color})` : "rgba(255,255,255,0.1)",
                      transition: "background 0.4s",
                    }} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
