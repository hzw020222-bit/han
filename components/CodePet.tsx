import { useState, useEffect, useRef } from "react";

// 1. 定义阶段数据
const STAGES = [
  {
    name: "Egg",
    minXP: 0,
    emoji: "🥚",
    color: "#ffb3c6",
    glow: "#ff6b9d",
    description: "A mysterious egg...",
    draw: (ctx: CanvasRenderingContext2D, t: number) => {
      ctx.fillStyle = "#fff0f5";
      ctx.beginPath();
      ctx.ellipse(60, 68, 28, 34, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "rgba(255,255,255,0.7)";
      ctx.beginPath();
      ctx.ellipse(52, 55, 9, 14, -0.4, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#ffb3c6";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(58, 44); ctx.lineTo(63, 52); ctx.lineTo(56, 58);
      ctx.stroke();
    },
  },
  {
    name: "Sprout",
    minXP: 60,
    emoji: "🐣",
    color: "#ffd6a5",
    glow: "#ffaa33",
    description: "It hatched! So tiny!",
    draw: (ctx: CanvasRenderingContext2D, t: number) => {
      const bob = Math.sin(t * 0.04) * 3;
      ctx.fillStyle = "#fff3cd";
      ctx.beginPath(); ctx.ellipse(60, 75 + bob, 22, 20, 0, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(60, 52 + bob, 19, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = "#3d2b1f";
      ctx.beginPath(); ctx.arc(53, 50 + bob, 4, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(67, 50 + bob, 4, 0, Math.PI * 2); ctx.fill();
    },
  },
  {
    name: "Coder Bud",
    minXP: 180,
    emoji: "🐱",
    color: "#b5ead7",
    glow: "#2ec4b6",
    description: "Learning to code!",
    draw: (ctx: CanvasRenderingContext2D, t: number) => {
      const bob = Math.sin(t * 0.04) * 2;
      ctx.fillStyle = "#c8f0e0";
      ctx.beginPath(); ctx.ellipse(60, 78 + bob, 26, 24, 0, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(60, 50 + bob, 22, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = "#3d2b1f"; ctx.lineWidth = 2.5;
      ctx.beginPath(); ctx.arc(52, 49 + bob, 5, Math.PI, 0); ctx.stroke();
      ctx.beginPath(); ctx.arc(68, 49 + bob, 5, Math.PI, 0); ctx.stroke();
    },
  },
  {
    name: "Code Wizard",
    minXP: 650,
    emoji: "🧙",
    color: "#ffd6ff",
    glow: "#c77dff",
    description: "Legendary 10x developer!",
    draw: (ctx: CanvasRenderingContext2D, t: number) => {
      const bob = Math.sin(t * 0.04) * 2;
      ctx.fillStyle = "#7b2fff";
      ctx.beginPath(); ctx.ellipse(60, 82 + bob, 32, 30, 0, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = "#e8c8ff";
      ctx.beginPath(); ctx.arc(60, 48 + bob, 25, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = "#3d2b1f";
      ctx.beginPath(); ctx.arc(51, 46 + bob, 7, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(69, 46 + bob, 7, 0, Math.PI * 2); ctx.fill();
    },
  },
];

const MESSAGES: Record<string, string[]> = {
  "Egg": ["Keep coding to hatch me! 🥚", "Almost time to crack! 🥚"],
  "Sprout": ["Yay! I hatched! 🐣", "Every commit helps me grow!"],
  "Coder Bud": ["I'm learning HTML! 🐱", "Push more commits!"],
  "Code Wizard": ["True mastery ✨", "The code flows through us! 🧙"],
};

// 2. 核心组件：画布 (修复了 TS 报错)
function PetCanvas({ stage, t }: { stage: any; t: number }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, 120, 120);
    stage.draw(ctx, t);
  }, [stage, t]);

  return <canvas ref={canvasRef} width={120} height={120} className="mx-auto" style={{ imageRendering: "pixelated" }} />;
}

// 3. 辅助组件：滑动条
function StatSlider({ icon, label, value, setValue, max, xpPer, color, unit }: any) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 5 }}>
        <span style={{ fontSize: 13, color: "#e0e0e0" }}>{icon} {label}</span>
        <span style={{ fontSize: 12, color, fontWeight: 700 }}>
          {value}{unit} <span style={{ color: "#aaa", fontWeight: 400, fontSize: 11 }}>= +{value * xpPer} XP</span>
        </span>
      </div>
      <input
        type="range" min={0} max={max} value={value}
        onChange={e => setValue(Number(e.target.value))}
        style={{ width: "100%", accentColor: color, cursor: "pointer" }}
      />
    </div>
  );
}

// 4. 主组件
export function CodePet() {
  const [streak, setStreak] = useState(2);
  const [hours, setHours] = useState(1);
  const [commits, setCommits] = useState(3);
  const [projects, setProjects] = useState(0);
  const [msgIdx, setMsgIdx] = useState(0);
  const [t, setT] = useState(0);

  // --- 拖拽逻辑 ---
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [rel, setRel] = useState({ x: 0, y: 0 });

  const onMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    const box = e.currentTarget.getBoundingClientRect();
    setIsDragging(true);
    setRel({ x: e.clientX - box.left, y: e.clientY - box.top });
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      setPosition({ x: e.clientX - rel.x, y: e.clientY - rel.y });
    };
    const onMouseUp = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [isDragging, rel]);

  // --- 动画循环 ---
  useEffect(() => {
    const timer = setInterval(() => setT(prev => prev + 1), 50);
    return () => clearInterval(timer);
  }, []);

  const xp = streak * 12 + hours * 10 + commits * 8 + projects * 25;
  const stageIdx = STAGES.reduce((acc, s, i) => (xp >= s.minXP ? i : acc), 0);
  const stage = STAGES[stageIdx];
  const nextStage = STAGES[stageIdx + 1];
  const xpInStage = xp - stage.minXP;
  const xpNeeded = nextStage ? nextStage.minXP - stage.minXP : 1;
  const pct = nextStage ? Math.min(100, (xpInStage / xpNeeded) * 100) : 100;
  const msgs = MESSAGES[stage.name] || [];

  return (
    <div 
      onMouseDown={onMouseDown}
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
        zIndex: 9999,
        cursor: isDragging ? 'grabbing' : 'grab',
        userSelect: 'none',
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        fontFamily: "'Nunito', sans-serif",
        padding: 16,
      }}
    >
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap" rel="stylesheet" />

      <div style={{ width: "100%", maxWidth: 350 }}>
        {/* 宠物主卡片 */}
        <div style={{
          background: "rgba(15, 23, 42, 0.9)",
          backdropFilter: "blur(12px)",
          border: `1.5px solid ${stage.color}44`,
          borderRadius: 24,
          padding: 24,
          boxShadow: `0 10px 30px rgba(0,0,0,0.5), 0 0 20px ${stage.glow}22`,
        }}>
          <div style={{ display: "flex", gap: 15, alignItems: "center" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ width: 100, height: 100, borderRadius: "50%", border: `1px solid ${stage.color}33`, display: "flex", alignItems: "center" }}>
                <PetCanvas stage={stage} t={t} />
              </div>
              <div style={{ marginTop: 8, fontSize: 12, fontWeight: 800, color: stage.color }}>
                {stage.emoji} {stage.name}
              </div>
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ minHeight: 40, marginBottom: 8 }}>
                <span style={{ fontSize: 12, color: "#ccd6f6" }}>"{msgs[msgIdx % msgs.length]}"</span>
              </div>
              <div style={{ height: 8, background: "rgba(255,255,255,0.1)", borderRadius: 10, overflow: "hidden" }}>
                <div style={{ width: `${pct}%`, height: "100%", background: stage.color, transition: "width 0.3s" }} />
              </div>
              <div style={{ fontSize: 10, color: "#8892b0", marginTop: 4 }}>{xp} XP Total</div>
            </div>
          </div>

          <div style={{ marginTop: 20 }}>
            <StatSlider icon="🔥" label="Streak" value={streak} setValue={setStreak} max={30} xpPer={12} color={stage.color} unit="d" />
            <StatSlider icon="⏱" label="Hours" value={hours} setValue={setHours} max={12} xpPer={10} color={stage.color} unit="h" />
          </div>
        </div>
      </div>
    </div>
  );
}
