import { useState } from "react";

const vegetables = [
  {
    id: "tomato", name: "Tomatoes", emoji: "🍅", color: "#e8453c", bg: "#fff0ef",
    zone: "A", row: "North end (near house)", spacing: "24–36 in apart",
    depth: "Plant deep — bury 2/3 of stem", sunlight: "Full sun",
    water: "Deep water 2–3×/week", days: "70–85 days",
    tips: "Place at north end so they don't shadow shorter plants. Use cages. Remove suckers for bigger fruit. Mulch base well.",
    companions: "Basil, marigolds", count: 3,
    height: "Tall (5–6 ft)",
    sow: "Nursery transplant",
  },
  {
    id: "basil", name: "Basil", emoji: "🌿", color: "#15803d", bg: "#f0fdf4",
    zone: "A", row: "North end (beside tomatoes)", spacing: "10–12 in apart",
    depth: "Same depth as pot", sunlight: "Full sun",
    water: "Moderate — keep moist", days: "25–30 days (leaf harvest)",
    tips: "Tuck between tomato plants — repels aphids & whiteflies, improves tomato flavor. Pinch flower buds to keep leafy all summer.",
    companions: "Tomatoes, peppers", count: 3,
    height: "Short (12–18 in)",
    sow: "Nursery transplant",
  },
  {
    id: "cucumbers", name: "Cucumbers", emoji: "🫛", color: "#0d9488", bg: "#f0fdfa",
    zone: "B", row: "North section — vertical trellis on stakes", spacing: "12 in apart",
    depth: "1 in deep or transplant level", sunlight: "Full sun",
    water: "1 in/week — consistent moisture", days: "50–65 days",
    tips: "Grow vertically using your existing metal stakes + twine along the north fence/house side. Saves bed space. Pick often — don't let them yellow on vine.",
    companions: "Beans, dill", count: 3,
    height: "Climbing (4–5 ft with trellis)",
    sow: "Nursery transplant or direct seed",
  },
  {
    id: "eggplant", name: "Eggplant", emoji: "🍆", color: "#7c3aed", bg: "#f5f0ff",
    zone: "C", row: "Upper-middle section", spacing: "18–24 in apart",
    depth: "Same depth as nursery pot", sunlight: "Full sun",
    water: "Regular, keep moist", days: "65–80 days",
    tips: "Zone 6a Palatine summers are warm — eggplant will thrive in July/Aug heat. Stake when fruit develops. Dark mulch warms soil.",
    companions: "Peppers, beans", count: 2,
    height: "Medium (2–3 ft)",
    sow: "Nursery transplant",
  },
  {
    id: "chilli", name: "Chilli Peppers", emoji: "🌶️", color: "#ea580c", bg: "#fff7ed",
    zone: "D", row: "Middle section (alternating with bell pepper)", spacing: "18 in apart",
    depth: "Same depth as nursery pot", sunlight: "Full sun",
    water: "Moderate — avoid overwatering", days: "60–90 days",
    tips: "Alternate with bell peppers every 18\". Slight drought stress = more heat/capsaicin. Avoid excess nitrogen fertilizer.",
    companions: "Tomatoes, basil", count: 2,
    height: "Medium (2–3 ft)",
    sow: "Nursery transplant",
  },
  {
    id: "bellpepper", name: "Bell Peppers", emoji: "🫑", color: "#ca8a04", bg: "#fefce8",
    zone: "D", row: "Middle section (alternating with chilli)", spacing: "18 in apart",
    depth: "Same depth as nursery pot", sunlight: "Full sun",
    water: "Consistent moisture — don't let dry out", days: "70–85 days",
    tips: "Alternate every 18\" with chilli peppers — same care routine. Support with small stake when fruiting. Zone 6a means longer warm season — great for bell peppers.",
    companions: "Chilli, basil", count: 2,
    height: "Medium (2–3 ft)",
    sow: "Nursery transplant",
  },
  {
    id: "cauliflower", name: "Cauliflower", emoji: "🥦", color: "#6366f1", bg: "#eef2ff",
    zone: "E", row: "Lower-middle section", spacing: "18–24 in apart",
    depth: "Same depth as nursery pot", sunlight: "Full sun (light afternoon shade welcome)",
    water: "Consistent — 1–1.5 in/week, never let dry out", days: "55–70 days",
    tips: "⚠️ Seeds should have been started indoors in mid-February — it's too late for spring seeds now. Buy transplants only and get them in the ground this week (before June). Choose 'Snow Crown' or 'Amazing' — both handle heat better than standard types. In-ground clay soil: amend deeply with compost so roots don't sit in waterlogged soil. When head reaches golf-ball size, tie outer leaves over it to keep it white (blanching). Best long-term plan: start seeds indoors July 1 for a fall harvest — October cauliflower in Zone 6a is sweeter and more reliable than summer.",
    companions: "Dill, celery, nasturtiums — avoid planting near tomatoes or peppers",
    count: "1–2 plants",
    height: "Medium (2–2.5 ft)",
    sow: "Nursery transplant only — too late for seeds",
  },
  {
    id: "carrots", name: "Carrots", emoji: "🥕", color: "#f97316", bg: "#fff7ed",
    zone: "F", row: "South end (front of bed — full open sun)", spacing: "2–3 in apart, rows 6 in",
    depth: "Direct sow seeds 1/4 in deep — DO NOT transplant",
    sunlight: "Full sun (tolerates light shade too)",
    water: "Keep consistently moist until germination, then moderate", days: "70–80 days",
    tips: "In-ground Palatine soil is often clay-heavy — loosen 12\" deep and work in generous compost before sowing. Remove any rocks or clumps — carrots fork in compacted soil. Sow seeds thinly, then thin seedlings to 3\" apart once 2\" tall. Great activity for toddlers to help harvest! Plant a second round mid-June for fall carrots.",
    companions: "Tomatoes, beans, onions, rosemary",
    count: "~30–40 seeds (1 sq ft rows)",
    height: "Low (leafy tops ~12 in)",
    sow: "Direct seed only — never transplant",
  },
];

const weekPlan = [
  { day: "Day 1–2", task: "Soil prep — full bed", detail: "In-ground clay soil needs work — loosen 12\" deep throughout, especially Zone F (carrots). Remove rocks and clumps. Work in 3–4\" of compost to improve drainage and loosen texture. In-ground beds drain slower than raised beds so don't overwater after this week's rain." },
  { day: "Day 3", task: "Build cucumber trellis + sow carrots", detail: "Tie twine horizontally across north-end metal stakes (3–4 rows at 8\" intervals). Then immediately direct sow carrot seeds in Zone F — they need the most germination time (10–14 days)." },
  { day: "Day 4", task: "Plant cauliflower transplant", detail: "Plant 1–2 cauliflower transplants in Zone E, 18–24\" apart. Water in deeply. Choose 'Snow Crown' or 'Amazing' variety — both handle late-spring heat better than standard varieties." },
  { day: "Day 5", task: "Plant north end transplants", detail: "Plant tomatoes deep (Zone A), tuck basil between them, then cucumber transplants at trellis base (Zone B)." },
  { day: "Day 6", task: "Plant middle sections", detail: "Plant eggplant (Zone C), then alternate chilli & bell pepper every 18\" (Zone D). Water all transplants deeply at base." },
  { day: "Day 7", task: "Mulch, fertilize & protect", detail: "Add 2–3\" straw mulch around all transplants (avoid mulching carrot & bean seed zones). Apply balanced 10-10-10 fertilizer. Check wire fence for ground-level gaps." },
];

const harvestTimeline = [
  { month: "Late June", crops: ["🌿 Basil"], color: "#65a30d" },
  { month: "Early July", crops: ["🫛 Cucumbers"], color: "#0d9488" },
  { month: "Mid July", crops: ["🌶️ Chilli", "🫑 Bell Peppers", "🥕 Carrots"], color: "#ea580c" },
  { month: "Mid–Late July", crops: ["🍅 Tomatoes", "🍆 Eggplant", "🥦 Cauliflower"], color: "#e8453c" },
];

export default function GardenPlanner() {
  const [active, setActive] = useState("tomato");
  const selected = vegetables.find((v) => v.id === active);

  return (
    <div style={{
      fontFamily: "'Georgia', serif",
      background: "linear-gradient(160deg, #f9f5ec 0%, #eef7ee 100%)",
      minHeight: "100vh",
      padding: "24px 16px",
      color: "#1a2e1a",
      maxWidth: 500,
      margin: "0 auto",
    }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 22 }}>
        <div style={{ fontSize: 11, letterSpacing: 3, color: "#6b7c6b", textTransform: "uppercase", marginBottom: 4 }}>
          Palatine, IL · Zone 6a · May 2026
        </div>
        <h1 style={{ fontSize: 26, fontWeight: 700, margin: 0, color: "#1a3a1a" }}>
          🌱 Summer Garden Planner
        </h1>
        <div style={{ fontSize: 13, color: "#4a6a4a", marginTop: 4 }}>
          8 Vegetables · In-Ground Bed ~4×14 ft · Full Southern Sun
        </div>
      </div>

      {/* Sun callout */}
      <div style={{
        background: "linear-gradient(135deg, #fef9c3, #fef3c7)",
        border: "1px solid #fbbf24", borderRadius: 12,
        padding: "10px 14px", marginBottom: 16,
        fontSize: 12, color: "#78350f", lineHeight: 1.6,
      }}>
        <strong>☀️ Layout logic:</strong> House faces north → full southern sun all day. Tall plants at <strong>north end</strong> (near house), low plants at <strong>south end</strong> (open sky) — nothing shades anything.
      </div>

      {/* BED LAYOUT */}
      <div style={{
        background: "#fff", borderRadius: 16, padding: "18px 14px",
        marginBottom: 16, boxShadow: "0 2px 16px rgba(0,80,0,0.08)", border: "1px solid #d4e8d4",
      }}>
        <div style={{ fontSize: 11, letterSpacing: 2, color: "#6b7c6b", textTransform: "uppercase", marginBottom: 10 }}>
          🏡 In-Ground Bed Layout — Top View (North → South)
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "#888", marginBottom: 6, padding: "0 4px" }}>
          <span>🏠 NORTH · House</span>
          <span>☀️ SOUTH · Open sky</span>
        </div>

        <div style={{ border: "3px solid #8B6914", borderRadius: 10, background: "#c8a96e12", padding: 8 }}>
          <div style={{ display: "flex", gap: 5, height: 140 }}>
            {[
              { id: "tomato", zone: "A", label: "🍅\n🌿", sub: "Tomato\n+ Basil\n3+3 plants", color: "#e8453c", bg: "#fff0ef", flex: 1.5, tag: "Tallest" },
              { id: "cucumbers", zone: "B", label: "🫛", sub: "Cucumber\n3 plants\n↑ Trellis", color: "#0d9488", bg: "#f0fdfa", flex: 1.2, tag: null },
              { id: "eggplant", zone: "C", label: "🍆", sub: "Eggplant\n2 plants", color: "#7c3aed", bg: "#f5f0ff", flex: 1.1, tag: null },
              { id: "chilli", zone: "D", label: "🌶️\n🫑", sub: "Chilli+Bell\n2+2 plants\nalternating", color: "#ea580c", bg: "#fff7ed", flex: 1.4, tag: null },
              { id: "cauliflower", zone: "E", label: "🥦", sub: "Cauli-\nflower\n1–2 plants", color: "#6366f1", bg: "#eef2ff", flex: 1, tag: "Plant now!" },
              { id: "carrots", zone: "F", label: "🥕", sub: "Carrots\n~35 seeds\ndirect sow", color: "#f97316", bg: "#fff7ed", flex: 1.3, tag: "First fun!" },
            ].map((z) => (
              <div key={z.zone} onClick={() => setActive(z.id)} style={{
                flex: z.flex, background: z.bg, border: `2px solid ${z.color}`,
                borderRadius: 7, display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", cursor: "pointer",
                padding: "4px 2px", transition: "all 0.15s",
                transform: active === z.id || (z.id === "tomato" && active === "basil") || (z.id === "chilli" && active === "bellpepper") || (z.id === "cauliflower" && active === "cauliflower") ? "scale(1.04)" : "scale(1)",
                boxShadow: active === z.id || (z.id === "tomato" && active === "basil") || (z.id === "chilli" && active === "bellpepper") || (z.id === "cauliflower" && active === "cauliflower") ? `0 0 0 2px ${z.color}` : "none",
              }}>
                <div style={{ fontSize: 13, textAlign: "center", whiteSpace: "pre-line", lineHeight: 1.2 }}>{z.label}</div>
                <div style={{ fontSize: 8, fontWeight: 700, color: z.color, marginTop: 2 }}>Zone {z.zone}</div>
                <div style={{ fontSize: 7.5, color: "#555", textAlign: "center", lineHeight: 1.4, whiteSpace: "pre-line" }}>{z.sub}</div>
                {z.tag && (
                  <div style={{ fontSize: 7, background: z.color, color: "#fff", borderRadius: 4, padding: "1px 5px", marginTop: 3 }}>{z.tag}</div>
                )}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 8.5, color: "#8B6914", marginTop: 8, padding: "0 2px" }}>
            <span>🏠 North end</span>
            <span style={{ color: "#bbb" }}>← 14 ft · tap a zone →</span>
            <span>South end ☀️</span>
          </div>
        </div>

        {/* Carrot tip */}
        <div style={{ background: "#fff7ed", border: "1px solid #fed7aa", borderRadius: 8, padding: "8px 12px", marginTop: 10, fontSize: 11, color: "#9a3412" }}>
          🥕 <strong>Carrot tip:</strong> Sow seeds as early as Day 3 — they take 10–14 days to germinate and need the head start. Loosen soil 12" deep and remove any stones first.
        </div>
        <div style={{ background: "#e0f2fe", border: "1px solid #bae6fd", borderRadius: 8, padding: "8px 12px", marginTop: 6, fontSize: 11, color: "#0c4a6e" }}>
          🔧 <strong>Cucumber trellis:</strong> Tie horizontal twine rows between your existing metal stakes along the north side — cucumbers climb up, saving horizontal space.
        </div>
        <div style={{ background: "#eef2ff", border: "1px solid #c7d2fe", borderRadius: 8, padding: "8px 12px", marginTop: 6, fontSize: 11, color: "#3730a3" }}>
          🥦 <strong>Cauliflower alert:</strong> Seeds should have started indoors in Feb — it's too late for seeds now. Transplants only, in ground <em>this week</em>. Pick 'Snow Crown' or 'Amazing'. Or wait and start seeds July 1 for a fall harvest. Amend in-ground clay soil with compost first.
        </div>
      </div>

      {/* Veg selector */}
      <div style={{ fontSize: 11, letterSpacing: 2, color: "#6b7c6b", textTransform: "uppercase", marginBottom: 8 }}>
        📋 Plant Details
      </div>
      <div style={{ display: "flex", gap: 6, marginBottom: 12, overflowX: "auto", paddingBottom: 4 }}>
        {vegetables.map((v) => (
          <button key={v.id} onClick={() => setActive(v.id)} style={{
            padding: "7px 12px", borderRadius: 999,
            border: `2px solid ${v.color}`,
            background: active === v.id ? v.color : v.bg,
            color: active === v.id ? "#fff" : v.color,
            fontWeight: 700, fontSize: 13, cursor: "pointer",
            whiteSpace: "nowrap", transition: "all 0.15s", flexShrink: 0,
          }}>
            {v.emoji}
          </button>
        ))}
      </div>

      {selected && (
        <div style={{
          background: "#fff", borderRadius: 16, padding: 18, marginBottom: 18,
          border: `2px solid ${selected.color}33`,
          boxShadow: "0 2px 16px rgba(0,80,0,0.07)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <div style={{ fontSize: 34 }}>{selected.emoji}</div>
            <div>
              <h2 style={{ margin: 0, fontSize: 19, color: selected.color }}>{selected.name}</h2>
              <div style={{ fontSize: 11, color: "#888" }}>Zone {selected.zone} · {selected.count} · {selected.height}</div>
              <div style={{ fontSize: 11, color: "#bbb" }}>{selected.row}</div>
            </div>
          </div>

          {/* Sow method badge */}
          <div style={{
            display: "inline-block", fontSize: 10, fontWeight: 700,
            background: selected.color, color: "#fff",
            borderRadius: 6, padding: "3px 10px", marginBottom: 12,
          }}>
            🌱 {selected.sow}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 12 }}>
            {[
              { label: "Spacing", val: selected.spacing, icon: "↔️" },
              { label: "Depth", val: selected.depth, icon: "📏" },
              { label: "Sunlight", val: selected.sunlight, icon: "☀️" },
              { label: "Watering", val: selected.water, icon: "💧" },
              { label: "Harvest", val: selected.days, icon: "🗓️" },
              { label: "Companions", val: selected.companions, icon: "🌿" },
            ].map((item) => (
              <div key={item.label} style={{ background: selected.bg, borderRadius: 8, padding: "8px 10px" }}>
                <div style={{ fontSize: 10, color: "#888", marginBottom: 1 }}>{item.icon} {item.label}</div>
                <div style={{ fontSize: 12, fontWeight: 600, color: "#1a2e1a" }}>{item.val}</div>
              </div>
            ))}
          </div>
          <div style={{ background: `${selected.color}11`, border: `1px solid ${selected.color}33`, borderRadius: 10, padding: "10px 12px" }}>
            <div style={{ fontSize: 10, color: selected.color, fontWeight: 700, marginBottom: 3 }}>💡 PRO TIP</div>
            <div style={{ fontSize: 12, color: "#333", lineHeight: 1.6 }}>{selected.tips}</div>
          </div>
        </div>
      )}

      {/* What to buy vs direct sow */}
      <div style={{
        background: "#fff", borderRadius: 16, padding: 18, marginBottom: 18,
        boxShadow: "0 2px 16px rgba(0,80,0,0.07)", border: "1px solid #d4e8d4",
      }}>
        <div style={{ fontSize: 11, letterSpacing: 2, color: "#6b7c6b", textTransform: "uppercase", marginBottom: 12 }}>
          🛒 What to Buy This Weekend
        </div>
        <div style={{ marginBottom: 12 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#1a3a1a", marginBottom: 6 }}>🏪 Nursery — Buy transplants:</div>
          {["🍅 Tomatoes (3 plants)", "🌿 Basil (3 plants)", "🫛 Cucumbers (3 plants)", "🍆 Eggplant (2 plants)", "🌶️ Chilli Peppers (2 plants)", "🫑 Bell Peppers (2 plants)", "🥦 Cauliflower (1–2 plants — 'Snow Crown' or 'Amazing' variety)"].map((item, i) => (
            <div key={i} style={{ fontSize: 12, color: "#444", padding: "3px 0", borderBottom: "1px solid #f0f0f0" }}>✓ {item}</div>
          ))}
        </div>
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#1a3a1a", marginBottom: 6 }}>🌾 Hardware/Garden store — Buy seeds:</div>
          {["🥕 Carrot seeds (Nantes or Danvers variety — good for IL clay-ish soil)"].map((item, i) => (
            <div key={i} style={{ fontSize: 12, color: "#444", padding: "3px 0", borderBottom: "1px solid #f0f0f0" }}>✓ {item}</div>
          ))}
        </div>
      </div>

      {/* Harvest timeline */}
      <div style={{
        background: "#fff", borderRadius: 16, padding: 18, marginBottom: 18,
        boxShadow: "0 2px 16px rgba(0,80,0,0.07)", border: "1px solid #d4e8d4",
      }}>
        <div style={{ fontSize: 11, letterSpacing: 2, color: "#6b7c6b", textTransform: "uppercase", marginBottom: 12 }}>
          📅 Harvest Timeline
        </div>
        {harvestTimeline.map((row, i) => (
          <div key={i} style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 10 }}>
            <div style={{
              minWidth: 78, fontSize: 10, fontWeight: 700, color: "#fff",
              background: row.color, borderRadius: 6, padding: "5px 6px", textAlign: "center", lineHeight: 1.4,
            }}>{row.month}</div>
            <div style={{ fontSize: 13, color: "#333" }}>{row.crops.join("  ·  ")}</div>
          </div>
        ))}
      </div>

      {/* 7-Day plan */}
      <div style={{
        background: "#fff", borderRadius: 16, padding: 18, marginBottom: 18,
        boxShadow: "0 2px 16px rgba(0,80,0,0.07)", border: "1px solid #d4e8d4",
      }}>
        <div style={{ fontSize: 11, letterSpacing: 2, color: "#6b7c6b", textTransform: "uppercase", marginBottom: 12 }}>
          🗓️ 7-Day Action Plan
        </div>
        {weekPlan.map((item, i) => (
          <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 10 }}>
            <div style={{
              minWidth: 64, fontSize: 9, fontWeight: 700, color: "#fff",
              background: "#2d6a2d", borderRadius: 6, padding: "4px 5px", textAlign: "center", lineHeight: 1.4,
            }}>{item.day}</div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#1a3a1a" }}>{item.task}</div>
              <div style={{ fontSize: 11, color: "#555", lineHeight: 1.5 }}>{item.detail}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Palatine notes */}
      <div style={{
        background: "linear-gradient(135deg, #1a3a1a, #2d6a2d)",
        borderRadius: 16, padding: 18, color: "#fff",
      }}>
        <div style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10, color: "#90c890" }}>
          📍 Palatine, IL · Zone 6a Notes
        </div>
        {[
          "✅ Zone 6a — longer warm season, great for peppers, eggplant & tomatoes",
          "☀️ Full southern sun in your backyard — best possible setup for all 8 crops",
          "🪱 In-ground bed: amend clay-heavy Palatine soil with 3–4\" compost before planting — improves drainage & root penetration for all crops",
          "🥕 Sow carrot seeds Day 1 — they need 10–14 days just to germinate",
          "🥦 Cauliflower timing is tight — buy transplants NOW & choose 'Snow Crown' or 'Amazing' variety for heat tolerance",
          "🥦 Blanch cauliflower heads: tie outer leaves over the head when golf-ball size to keep it white",
          "🐰 Check wire fence for ground-level gaps before planting — rabbits love carrot tops!",
          "🌧️ In-ground clay soil drains slowly — let bed dry slightly between waterings, but keep cauliflower consistently moist; stress causes buttoning",
          "👧 Carrots are a great toddler harvest activity — let them pull in mid-July!",
        ].map((tip, i) => (
          <div key={i} style={{ fontSize: 12, lineHeight: 1.8, color: "#d0ead0" }}>{tip}</div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: 14, fontSize: 10, color: "#aaa" }}>
        Final Garden Plan · Palatine, IL · In-Ground Bed · May 2026
      </div>
    </div>
  );
}
