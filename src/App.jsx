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
    id: "okra", name: "Okra", emoji: "🌾", color: "#84cc16", bg: "#f7fee7",
    zone: "E", row: "Zone E — north edge, beside peppers", spacing: "12–18 in apart",
    depth: "Same depth as nursery pot — do NOT disturb roots",
    sunlight: "Full sun — loves heat",
    water: "1 in/week; once established, surprisingly drought-tolerant",
    days: "50–65 days from transplant",
    tips: "Plant at the north edge of Zone E (closest to Zone D peppers) so its 4–6 ft height doesn't shade the Zone F carrots to the south. Okra hates root disturbance — slide it out of the pot carefully, plant at exact pot depth, water in slowly and deeply. Harvest pods at 3–4 inches long — check every 2–3 days in peak summer. Pods left too long turn woody and tough fast. July and August heat will make this plant explode. Zone 6a summers are perfect for okra.",
    companions: "Tomatoes, peppers, basil — all already in this bed",
    count: "1–2 plants",
    height: "Tall (4–6 ft)",
    sow: "Nursery transplant — handle roots very gently",
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
  { day: "Thu 5/21 AM", task: "Soil prep + build trellis", detail: "Loosen in-ground clay soil 12\" deep throughout. Work in 3–4\" compost — improves drainage and root penetration for all crops. Build cucumber trellis: tie horizontal twine across north-end metal stakes (3–4 rows at 8\" intervals). Bed will be nicely pre-moistened from this week's rain — no need to water soil before planting." },
  { day: "Thu 5/21 AM", task: "Sow carrot seeds first", detail: "Before planting any transplants, direct sow carrot seeds in Zone F (south end). Every day counts — they take 10–14 days to germinate. Sow 1/4\" deep in rows 6\" apart, thinly. Keep soil consistently moist until sprouts appear." },
  { day: "Thu 5/21 PM", task: "Plant north end transplants", detail: "Plant tomatoes deep in Zone A (bury 2/3 of stem for stronger root system). Tuck basil between the tomato plants. Set cucumber transplants at the trellis base in Zone B — they'll start climbing within days." },
  { day: "Thu 5/21 PM", task: "Plant middle sections + okra", detail: "Plant eggplant in Zone C (18–24\" apart). Then alternate chilli & bell pepper every 18\" through Zone D. Plant okra at the north edge of Zone E — slide it out of the pot carefully, don't disturb the roots, plant at exact pot depth. Water all transplants slowly and deeply at base — not overhead." },
  { day: "Fri 5/22", task: "Mulch, fertilize & protect", detail: "Add 2–3\" straw mulch around all transplants — keep clear of stems, and skip the carrot seed zone (they need light to germinate). Apply balanced 10-10-10 fertilizer. Check fence for ground-level gaps — rabbits love fresh carrot sprouts." },
  { day: "📅 Jul 1", task: "Start cauliflower seeds indoors 🥦", detail: "Start 'Snow Crown' or 'Amazing' cauliflower seeds indoors — ~6 weeks before a late-Aug transplant date. This gives you a fall harvest in October when cool temps produce sweeter, denser heads. Fall Zone 6a cauliflower is far more reliable than any summer planting." },
];

const harvestTimeline = [
  { month: "Late June", crops: ["🌿 Basil"], color: "#65a30d" },
  { month: "Early July", crops: ["🫛 Cucumbers"], color: "#0d9488" },
  { month: "Mid July", crops: ["🌶️ Chilli", "🫑 Bell Peppers", "🥕 Carrots"], color: "#ea580c" },
  { month: "Late July", crops: ["🍅 Tomatoes", "🍆 Eggplant"], color: "#e8453c" },
  { month: "July–Sept", crops: ["🌾 Okra (pick every 2–3 days!)"], color: "#84cc16" },
  { month: "🍂 October", crops: ["🥦 Cauliflower (fall crop — seeds start Jul 1)"], color: "#6366f1" },
];

const careGuide = [
  {
    id: "tomato", emoji: "🍅", name: "Tomatoes", color: "#e8453c", bg: "#fff0ef",
    support: { needed: true, label: "Cage or 6 ft stake", note: "Install NOW before roots spread" },
    water: "Deep soak 2–3×/week at base only — never overhead. ~1–2\" per week total. Let soil dry slightly between.",
    fertilize: "Every 2 weeks: tomato fertilizer. Once flowers appear, switch to low-N / high P+K formula.",
    prune: "Remove suckers every 5–7 days — shoots in the V between main stem and branch. Keep 1–2 main stems for bigger fruit.",
    watch: "🐛 Hornworms (hand-pick) · 🍃 Early blight (remove yellowing lower leaves) · 🔴 Blossom-end rot (caused by uneven watering + calcium).",
    now: "Install cages or drive 6 ft stakes immediately if not done. Begin weekly sucker checks.",
  },
  {
    id: "basil", emoji: "🌿", name: "Basil", color: "#15803d", bg: "#f0fdf4",
    support: { needed: false, label: "No support needed" },
    water: "Water at base when top inch of soil is dry. Never overhead — causes leaf spots.",
    fertilize: "Light balanced fertilizer once a month. Too much N = lush but less flavour.",
    prune: "Pinch flower buds off the moment they appear — most critical task. Harvest by cutting just above a leaf pair to keep plant bushy.",
    watch: "🐛 Aphids under leaves · Fusarium wilt (sudden collapse — remove plant, don't replant basil in same spot).",
    now: "Check growing tips daily for flower buds. Harvest any long stems to trigger new side growth.",
  },
  {
    id: "cucumbers", emoji: "🫛", name: "Cucumbers", color: "#0d9488", bg: "#f0fdfa",
    support: { needed: true, label: "Trellis — already up ✓", note: "Train new vines weekly onto twine" },
    water: "1\" per week consistently. Irregular watering = bitter cucumbers. Water at base.",
    fertilize: "Every 2 weeks balanced fertilizer. Ease off nitrogen once vines are running.",
    prune: "Guide new vine growth up the trellis weekly — tie loosely with soft twine. Pinch growing tip once it clears the top of the trellis.",
    watch: "🔶 Cucumber beetles (yellow/black striped) · 🍃 Powdery mildew on leaf faces · Pick off any yellowing cucumbers immediately.",
    now: "Vines should be reaching for the trellis — help them along. Look for first yellow flowers opening.",
  },
  {
    id: "eggplant", emoji: "🍆", name: "Eggplant", color: "#7c3aed", bg: "#f5f0ff",
    support: { needed: true, label: "Light stake when fruiting", note: "Prepare a stake by early July" },
    water: "Deep consistent watering — 1–1.5\" per week. Mulch helps retain warmth and moisture.",
    fertilize: "Every 2–3 weeks balanced. Add high-potassium boost when flowering begins.",
    prune: "Remove dead or yellowing leaves. Thin to 2–3 main branches for fewer, larger fruits.",
    watch: "🐛 Flea beetles (tiny shot-holes in leaves — very common on young eggplant) · 🕷 Spider mites in hot dry spells · Colorado potato beetle.",
    now: "Ensure dark mulch is around the base — eggplant loves warm soil. Watch closely for flea beetle holes on leaves.",
  },
  {
    id: "chilli", emoji: "🌶️", name: "Chilli Peppers", color: "#ea580c", bg: "#fff7ed",
    support: { needed: true, label: "Light stake when fruit sets", note: "Add mid-July when pods are heavy" },
    water: "Moderate — let top inch dry slightly between waterings. Mild drought stress increases capsaicin (heat level).",
    fertilize: "Monthly balanced fertilizer. Excess nitrogen = big plants with few fruits.",
    prune: "Pinch the very first flower bud off to build a stronger plant before heavy fruiting begins.",
    watch: "🐛 Aphids clustering at growing tips · Bacterial spot (dark water-soaked spots on leaves) · Sunscald on fruit in intense heat.",
    now: "Let plants establish fully — resist overwatering. Check leaf undersides for aphids.",
  },
  {
    id: "bellpepper", emoji: "🫑", name: "Bell Peppers", color: "#ca8a04", bg: "#fefce8",
    support: { needed: true, label: "Light stake when fruiting", note: "Add mid-July when peppers are heavy" },
    water: "Consistent 1–1.5\" per week — the most important factor. Inconsistent moisture = blossom drop.",
    fertilize: "Every 2–3 weeks balanced. Extra calcium (crushed eggshell or calcium spray) prevents blossom-end rot.",
    prune: "Remove first 1–2 flower buds to let plant establish. Thin to 2–3 main branches if very bushy.",
    watch: "⚠️ Blossom drop is normal when temp is above 90°F in July — plant will resume setting fruit in August. 🐛 Aphids + pepper maggots.",
    now: "Keep watering very consistent. Remove first buds if they appear before plant is 12\"+ tall.",
  },
  {
    id: "okra", emoji: "🌾", name: "Okra", color: "#84cc16", bg: "#f7fee7",
    support: { needed: true, label: "Stake when 3+ ft tall", note: "Particularly after heavy rain / wind" },
    water: "1\" per week — surprisingly drought-tolerant once established, but consistent water = more pods.",
    fertilize: "Light feeding every 3–4 weeks. Excess nitrogen = very tall plant with few pods.",
    prune: "Remove lower leaves once plant is 2+ ft tall — improves airflow and redirects energy to pods. Side-dress with compost at mid-season.",
    watch: "⚠️ HARVEST URGENCY — pods become woody and inedible in just 2–3 days once they pass 3–4\". Check every single day once production starts. 🐛 Corn earworm · aphids.",
    now: "Plant is still establishing and growing. Be patient — okra is slow to start but explosive once July heat arrives. Don't overwater yet.",
  },
  {
    id: "carrots", emoji: "🥕", name: "Carrots", color: "#f97316", bg: "#fff7ed",
    support: { needed: false, label: "No support needed" },
    water: "Keep consistently moist until sprouts appear (~2 weeks). Once established, deep water 2×/week.",
    fertilize: "Light feed once seedlings are 3\" tall. Avoid high nitrogen — causes forked roots. Phosphorus and potassium are better.",
    prune: "Thinning is critical — once seedlings are 2\" tall, thin to 3\" apart. Crowded carrots = stunted forked roots. This should be happening now.",
    watch: "🐰 Rabbit damage at soil level (check fence gaps) · 🪲 Carrot rust fly · Forking = compacted or rocky soil below surface.",
    now: "Seeds should be germinating or just sprouted. Keep soil moist — don't let surface crust over. Thin to 3\" spacing ASAP once 2\" tall.",
  },
];

export default function GardenPlanner() {
  const [active, setActive] = useState("tomato");
  const [careActive, setCareActive] = useState("tomato");
  const [tab, setTab] = useState("planting");
  const [guideActive, setGuideActive] = useState("sucker");
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
          8 Vegetables · In-Ground Bed ~4×14 ft · Planting Day Thu May 21
        </div>
      </div>

      {/* Tab bar */}
      <div style={{ display: "flex", marginBottom: 20, borderRadius: 12, overflow: "hidden", border: "2px solid #d4e8d4" }}>
        {[
          { id: "planting", label: "🌱 Planting Plan" },
          { id: "care",     label: "🌿 After-Care" },
        ].map((t, i) => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{
            flex: 1, padding: "13px 8px",
            background: tab === t.id ? "#2d6a2d" : "#f0f7f0",
            color: tab === t.id ? "#fff" : "#4a6a4a",
            border: "none",
            borderRight: i === 0 ? "2px solid #d4e8d4" : "none",
            fontSize: 13, fontWeight: 700,
            cursor: "pointer", transition: "all 0.2s",
          }}>{t.label}</button>
        ))}
      </div>

      {tab === "planting" && <>

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
              { id: "okra", zone: "E", label: "🌾", sub: "Okra\n1–2 plants\nnorth edge", color: "#84cc16", bg: "#f7fee7", flex: 1, tag: "Plant today!" },
              { id: "carrots", zone: "F", label: "🥕", sub: "Carrots\n~35 seeds\ndirect sow", color: "#f97316", bg: "#fff7ed", flex: 1.3, tag: "First fun!" },
            ].map((z) => (
              <div key={z.zone} onClick={() => setActive(z.id)} style={{
                flex: z.flex, background: z.bg, border: `2px solid ${z.color}`,
                borderRadius: 7, display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", cursor: "pointer",
                padding: "4px 2px", transition: "all 0.15s",
                transform: active === z.id || (z.id === "tomato" && active === "basil") || (z.id === "chilli" && active === "bellpepper") ? "scale(1.04)" : "scale(1)",
                boxShadow: active === z.id || (z.id === "tomato" && active === "basil") || (z.id === "chilli" && active === "bellpepper") ? `0 0 0 2px ${z.color}` : "none",
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
          🥕 <strong>Carrot tip:</strong> Sow seeds first thing Thu May 21 AM — they take 10–14 days to germinate and every day counts. Loosen clay soil 12" deep and remove any stones before sowing.
        </div>
        <div style={{ background: "#e0f2fe", border: "1px solid #bae6fd", borderRadius: 8, padding: "8px 12px", marginTop: 6, fontSize: 11, color: "#0c4a6e" }}>
          🔧 <strong>Cucumber trellis:</strong> Build before planting Thu morning — tie horizontal twine rows between your existing metal stakes along the north side. Cucumbers climb up, saving horizontal bed space.
        </div>
        <div style={{ background: "#f7fee7", border: "1px solid #bef264", borderRadius: 8, padding: "8px 12px", marginTop: 6, fontSize: 11, color: "#365314" }}>
          🌾 <strong>Okra root tip:</strong> Okra hates root disturbance — slide carefully out of pot, plant at exact same depth, water in slowly. Place at <strong>north edge of Zone E</strong> (beside peppers) so its height doesn't shade Zone F carrots. Harvest pods at 3–4" — don't let them go woody!
        </div>
        <div style={{ background: "#f5f3ff", border: "1px solid #c4b5fd", borderRadius: 8, padding: "8px 12px", marginTop: 6, fontSize: 11, color: "#4c1d95" }}>
          🥦 <strong>Fall cauliflower plan:</strong> Start seeds indoors <strong>July 1</strong> → transplant late Aug → harvest October. Zone E south end or a new spot — decide in July. Choose 'Snow Crown' or 'Amazing'.
        </div>
      </div>

      {/* Detailed Planting Map */}
      <div style={{
        background: "#fff", borderRadius: 16, padding: "18px 14px",
        marginBottom: 16, boxShadow: "0 2px 16px rgba(0,80,0,0.08)", border: "1px solid #d4e8d4",
      }}>
        <div style={{ fontSize: 11, letterSpacing: 2, color: "#6b7c6b", textTransform: "uppercase", marginBottom: 4 }}>
          🗺️ Planting Map — Positions &amp; Spacing
        </div>
        <div style={{ fontSize: 10, color: "#888", marginBottom: 10 }}>
          Top-down view · 4 ft wide × 14 ft long · all plants 6" from bed edges
        </div>
        <div style={{ fontSize: 10, fontWeight: 700, color: "#555", textAlign: "center", marginBottom: 6 }}>
          🏠 NORTH — House side &nbsp;·&nbsp; ←&nbsp;4 ft wide&nbsp;→
        </div>

        <div style={{ border: "3px solid #8B6914", borderRadius: 8, overflow: "hidden" }}>
          {[
            {
              id: "A", color: "#e8453c", bg: "#fff0ef", height: 90,
              sublabel: "Tomato+Basil", depth: "~3 ft",
              plants: [
                { emoji: "🍅", x: 17, y: 8,  name: "T1" },
                { emoji: "🍅", x: 50, y: 8,  name: "T2" },
                { emoji: "🍅", x: 83, y: 8,  name: "T3" },
                { emoji: "🌿", x: 8,  y: 52, name: "B1" },
                { emoji: "🌿", x: 33, y: 52, name: "B2" },
                { emoji: "🌿", x: 67, y: 52, name: "B3" },
              ],
              spacers: [
                { x1: 17, x2: 50, y: 32, label: "~16\"" },
                { x1: 50, x2: 83, y: 32, label: "~16\"" },
                { x1: 8,  x2: 33, y: 74, label: "~10\"" },
                { x1: 33, x2: 67, y: 74, label: "~10\"" },
              ],
            },
            {
              id: "B", color: "#0d9488", bg: "#f0fdfa", height: 64,
              sublabel: "Cucumbers ↑", depth: "~2 ft",
              trellis: true,
              plants: [
                { emoji: "🫛", x: 17, y: 26, name: "C1" },
                { emoji: "🫛", x: 50, y: 26, name: "C2" },
                { emoji: "🫛", x: 83, y: 26, name: "C3" },
              ],
              spacers: [
                { x1: 17, x2: 50, y: 46, label: "~12\"" },
                { x1: 50, x2: 83, y: 46, label: "~12\"" },
              ],
            },
            {
              id: "C", color: "#7c3aed", bg: "#f5f0ff", height: 60,
              sublabel: "Eggplant", depth: "~2 ft",
              plants: [
                { emoji: "🍆", x: 25, y: 16, name: "E1" },
                { emoji: "🍆", x: 75, y: 16, name: "E2" },
              ],
              spacers: [
                { x1: 25, x2: 75, y: 36, label: "24\"" },
              ],
            },
            {
              id: "D", color: "#ea580c", bg: "#fff7ed", height: 66,
              sublabel: "Chilli+Bell", depth: "~2.5 ft",
              plants: [
                { emoji: "🌶️", x: 13, y: 16, name: "Ch1" },
                { emoji: "🫑", x: 38, y: 16, name: "Be1" },
                { emoji: "🌶️", x: 63, y: 16, name: "Ch2" },
                { emoji: "🫑", x: 88, y: 16, name: "Be2" },
              ],
              spacers: [
                { x1: 13, x2: 38, y: 36, label: "~12\"" },
                { x1: 38, x2: 63, y: 36, label: "~12\"" },
                { x1: 63, x2: 88, y: 36, label: "~12\"" },
              ],
            },
            {
              id: "E", color: "#84cc16", bg: "#f7fee7", height: 56,
              sublabel: "Okra (N edge)", depth: "~2 ft",
              plants: [
                { emoji: "🌾", x: 25, y: 12, name: "Ok1" },
                { emoji: "🌾", x: 62, y: 12, name: "Ok2" },
              ],
              spacers: [
                { x1: 25, x2: 62, y: 30, label: "~18\"" },
              ],
            },
            {
              id: "F", color: "#f97316", bg: "#fff7ed", height: 78,
              sublabel: "Carrots (seed)", depth: "~2.5 ft",
              isCarrots: true, plants: [], spacers: [],
            },
          ].map((zone, zi, arr) => (
            <div key={zone.id} style={{
              height: zone.height, background: zone.bg, position: "relative", display: "flex",
              borderBottom: zi < arr.length - 1 ? `2px dashed ${zone.color}55` : "none",
            }}>
              {/* Colour sidebar with zone label */}
              <div style={{
                width: 34, minWidth: 34, background: zone.color,
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2,
              }}>
                <div style={{
                  fontSize: 7.5, fontWeight: 700, color: "#fff",
                  writingMode: "vertical-rl", transform: "rotate(180deg)",
                  letterSpacing: 0.3, lineHeight: 1.3,
                }}>{zone.sublabel}</div>
                <div style={{ fontSize: 6.5, color: "rgba(255,255,255,0.75)", writingMode: "vertical-rl", transform: "rotate(180deg)" }}>{zone.depth}</div>
              </div>

              {/* Plant area */}
              <div style={{ flex: 1, position: "relative" }}>
                {zone.trellis && (
                  <div style={{ position: "absolute", top: 7, left: "4%", right: "4%", borderTop: "2px solid #0d948866" }}>
                    <div style={{ fontSize: 7, color: "#0d9488", background: "#f0fdfa", padding: "0 4px", margin: "-6px auto 0", width: "fit-content" }}>
                      ══ trellis ══
                    </div>
                  </div>
                )}

                {zone.isCarrots ? (
                  <div style={{ position: "absolute", inset: "6px 8px", display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                    {[1,2,3,4,5].map(row => (
                      <div key={row} style={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <div style={{ fontSize: 7, color: "#f97316", minWidth: 24, flexShrink: 0 }}>row {row}</div>
                        <div style={{ flex: 1, display: "flex", gap: "calc((100% - 54px) / 17)", alignItems: "center" }}>
                          {Array(18).fill(0).map((_, i) => (
                            <div key={i} style={{ width: 3, height: 3, borderRadius: "50%", background: "#f9731699", flexShrink: 0 }} />
                          ))}
                        </div>
                        {row === 1 && <div style={{ fontSize: 7, color: "#f97316", minWidth: 22, flexShrink: 0, textAlign: "right" }}>6"↕</div>}
                      </div>
                    ))}
                    <div style={{ fontSize: 7.5, color: "#9a3412", textAlign: "center" }}>Seeds 1–2" apart · thin to 3" · rows 6" apart</div>
                  </div>
                ) : (
                  <>
                    {zone.plants.map((p, pi) => (
                      <div key={pi} style={{
                        position: "absolute", left: `${p.x}%`, top: p.y,
                        transform: "translateX(-50%)", textAlign: "center",
                      }}>
                        <div style={{ fontSize: 15 }}>{p.emoji}</div>
                        <div style={{ fontSize: 6.5, color: zone.color, fontWeight: 700, lineHeight: 1 }}>{p.name}</div>
                      </div>
                    ))}
                    {zone.spacers.map((s, si) => (
                      <div key={si} style={{
                        position: "absolute", left: `${s.x1}%`,
                        width: `${s.x2 - s.x1}%`, top: s.y,
                        borderTop: `1px dashed ${zone.color}99`,
                      }}>
                        <div style={{
                          position: "absolute", left: "50%", top: -7,
                          transform: "translateX(-50%)",
                          fontSize: 7, color: zone.color, background: zone.bg,
                          padding: "0 2px", whiteSpace: "nowrap",
                        }}>{s.label}</div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <div style={{ fontSize: 10, fontWeight: 700, color: "#555", textAlign: "center", marginTop: 6 }}>
          ☀️ SOUTH — Open sky (maximum sun)
        </div>
        <div style={{ fontSize: 9, color: "#aaa", textAlign: "center", marginTop: 3 }}>
          Spacing shown is centre-to-centre · 6" clearance from all bed edges
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
          🛒 What to Buy — Before Thu May 21
        </div>
        <div style={{ marginBottom: 12 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#1a3a1a", marginBottom: 6 }}>🏪 Nursery — Buy transplants:</div>
          {["🍅 Tomatoes (3 plants)", "🌿 Basil (3 plants)", "🫛 Cucumbers (3 plants)", "🍆 Eggplant (2 plants)", "🌶️ Chilli Peppers (2 plants)", "🫑 Bell Peppers (2 plants)"].map((item, i) => (
            <div key={i} style={{ fontSize: 12, color: "#444", padding: "3px 0", borderBottom: "1px solid #f0f0f0" }}>✓ {item}</div>
          ))}
          <div style={{ fontSize: 12, color: "#365314", padding: "3px 0", borderBottom: "1px solid #f0f0f0", fontWeight: 600 }}>✅ 🌾 Okra (1–2 plants — already purchased!)</div>
        </div>
        <div style={{ marginBottom: 12 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#1a3a1a", marginBottom: 6 }}>🌾 Hardware/Garden store — Buy seeds:</div>
          {["🥕 Carrot seeds (Nantes or Danvers variety — good for IL clay-ish soil)"].map((item, i) => (
            <div key={i} style={{ fontSize: 12, color: "#444", padding: "3px 0", borderBottom: "1px solid #f0f0f0" }}>✓ {item}</div>
          ))}
        </div>
        <div style={{ background: "#f5f3ff", border: "1px solid #c4b5fd", borderRadius: 8, padding: "10px 12px" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#4c1d95", marginBottom: 4 }}>📅 Buy later — Fall cauliflower (by Jul 1):</div>
          <div style={{ fontSize: 12, color: "#444" }}>🥦 Cauliflower seeds — 'Snow Crown' or 'Amazing' variety (start indoors July 1, transplant late Aug, harvest October)</div>
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
          🗓️ Planting Day Action Plan — Thu May 21
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
          "🪱 In-ground bed: amend clay-heavy Palatine soil with 3–4\" compost before planting — improves drainage & root penetration",
          "🥕 Sow carrot seeds Thu 5/21 AM first — they need 10–14 days to germinate, every day counts",
          "🌧️ In-ground clay soil drains slowly — bed is pre-soaked from this week's rain, so skip watering soil before planting",
          "🐰 Check wire fence for ground-level gaps before Thu — rabbits love fresh carrot sprouts!",
          "🌾 Okra loves July/Aug heat — Zone 6a summers are perfect. Pick pods at 3–4\" every 2–3 days or they go woody fast",
          "🥦 Fall cauliflower plan: start 'Snow Crown' seeds indoors July 1 → transplant late Aug → harvest October",
          "👧 Carrots are a great toddler harvest activity — let them pull in mid-July!",
        ].map((tip, i) => (
          <div key={i} style={{ fontSize: 12, lineHeight: 1.8, color: "#d0ead0" }}>{tip}</div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: 14, fontSize: 10, color: "#aaa" }}>
        Garden Plan · Palatine, IL · In-Ground Bed · May 2026
      </div>

      </>}

      {tab === "care" && <>

      {/* ── Visual Grow Guides ── */}
      <div style={{
        background: "#fff", borderRadius: 16, padding: 18, marginBottom: 18,
        boxShadow: "0 2px 16px rgba(0,80,0,0.07)", border: "1px solid #d4e8d4",
      }}>
        <div style={{ fontSize: 11, letterSpacing: 2, color: "#6b7c6b", textTransform: "uppercase", marginBottom: 4 }}>
          🎨 Visual Grow Guides
        </div>
        <div style={{ fontSize: 11, color: "#4a6a4a", marginBottom: 12 }}>
          Illustrated reference for pruning, staking &amp; training your plants.
        </div>

        {/* Guide selector pills */}
        <div style={{ display: "flex", gap: 6, overflowX: "auto", marginBottom: 16, paddingBottom: 4 }}>
          {[
            { id: "sucker",  label: "🍅 Tomato Sucker" },
            { id: "caging",  label: "🏗️ Cage & Stake" },
            { id: "trellis", label: "🥒 Trellis" },
            { id: "pstake",  label: "🌶️ Light Stake" },
          ].map(g => (
            <button key={g.id} onClick={() => setGuideActive(g.id)} style={{
              padding: "7px 14px", borderRadius: 999,
              border: "2px solid #16a34a",
              background: guideActive === g.id ? "#16a34a" : "#f0fdf4",
              color: guideActive === g.id ? "#fff" : "#16a34a",
              fontWeight: 700, fontSize: 12, cursor: "pointer",
              whiteSpace: "nowrap", flexShrink: 0, transition: "all 0.15s",
            }}>{g.label}</button>
          ))}
        </div>

        {/* ── SUCKER DIAGRAM ── */}
        {guideActive === "sucker" && (
          <div>
            <svg viewBox="0 0 300 230" style={{ width: "100%", display: "block", maxWidth: 340, margin: "0 auto" }}>
              {/* Soil bed */}
              <rect x="10" y="204" width="280" height="22" rx="3" fill="#c8a96e"/>
              <line x1="10" y1="204" x2="290" y2="204" stroke="#92400e" strokeWidth="2"/>
              <text x="150" y="221" textAnchor="middle" fontSize="9" fill="#92400e">soil level</text>

              {/* Main stem — thick green vertical */}
              <line x1="110" y1="204" x2="110" y2="10" stroke="#16a34a" strokeWidth="8" strokeLinecap="round"/>

              {/* Upper junction + branch (healthy — shown for context) */}
              <circle cx="110" cy="65" r="6" fill="#14532d" stroke="#fff" strokeWidth="1.5"/>
              <line x1="110" y1="65" x2="32" y2="22" stroke="#16a34a" strokeWidth="3.5" strokeLinecap="round"/>
              <ellipse cx="27" cy="18" rx="18" ry="8" fill="#4ade80" transform="rotate(28 27 18)"/>

              {/* Lower junction — where the sucker grows */}
              <circle cx="110" cy="128" r="8" fill="#14532d" stroke="#fff" strokeWidth="2"/>

              {/* Leaf branch (keeps, goes upper-right) */}
              <line x1="110" y1="128" x2="230" y2="56" stroke="#16a34a" strokeWidth="4.5" strokeLinecap="round"/>
              <ellipse cx="235" cy="51" rx="23" ry="10" fill="#4ade80" transform="rotate(-30 235 51)"/>
              <line x1="220" y1="58" x2="238" y2="47" stroke="#16a34a" strokeWidth="1.5"/>

              {/* SUCKER — dashed red, grows from junction into the V */}
              <line x1="110" y1="128" x2="174" y2="74" stroke="#dc2626" strokeWidth="4.5" strokeDasharray="8,4" strokeLinecap="round"/>
              <circle cx="177" cy="71" r="7" fill="#dc2626"/>
              {/* Tiny sucker leaves */}
              <line x1="177" y1="71" x2="192" y2="55" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round"/>
              <ellipse cx="196" cy="51" rx="12" ry="6" fill="#fca5a5" transform="rotate(-28 196 51)"/>

              {/* V arc — highlights the "V" angle */}
              <path d="M 110 98 A 32 32 0 0 1 134 120" fill="none" stroke="#f97316" strokeWidth="3" strokeDasharray="4,3"/>
              <text x="140" y="106" fill="#f97316" fontSize="13" fontWeight="800">V</text>

              {/* Label — Main Stem */}
              <rect x="0" y="152" width="84" height="26" rx="4" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5"/>
              <text x="8" y="169" fill="#16a34a" fontSize="10" fontWeight="700">Main Stem ✓</text>
              <line x1="84" y1="165" x2="104" y2="152" stroke="#16a34a" strokeWidth="1.2" strokeDasharray="3,2"/>

              {/* Label — Leaf Branch */}
              <rect x="158" y="16" width="102" height="26" rx="4" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5"/>
              <text x="164" y="33" fill="#16a34a" fontSize="10" fontWeight="700">Leaf Branch ✓</text>

              {/* Label — Sucker */}
              <rect x="174" y="92" width="120" height="54" rx="4" fill="#fff0ef" stroke="#dc2626" strokeWidth="2"/>
              <text x="181" y="109" fill="#dc2626" fontSize="11" fontWeight="700">⚠ SUCKER</text>
              <text x="181" y="123" fill="#dc2626" fontSize="9">Pinch off when &lt; 2"</text>
              <text x="181" y="136" fill="#dc2626" fontSize="9">Check every 5–7 days</text>
              <line x1="174" y1="108" x2="178" y2="80" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="3,2"/>
            </svg>

            <div style={{ background: "#fff0ef", borderRadius: 10, padding: "10px 14px", marginTop: 8 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#dc2626", marginBottom: 6 }}>
                How to spot &amp; remove tomato suckers:
              </div>
              {[
                "Find every node — the bump where a leaf branch meets the main stem",
                "The sucker sprouts from the V (axil) right at that junction, growing between the upward stem and the branch",
                "It mimics a whole new plant shoot — left alone it becomes a second main stem and robs energy from fruit",
                "Snap it off with clean fingers when it's under 2\" — the cleanest method",
                "Use sharp scissors for anything over 2\" so you don't tear the main stem bark",
                "Re-check every 5–7 days in summer heat — suckers double in size fast",
              ].map((t, i) => (
                <div key={i} style={{ fontSize: 11, color: "#333", lineHeight: 1.75 }}>• {t}</div>
              ))}
            </div>
          </div>
        )}

        {/* ── CAGE & STAKE DIAGRAM ── */}
        {guideActive === "caging" && (
          <div>
            <svg viewBox="0 0 300 220" style={{ width: "100%", display: "block", maxWidth: 340, margin: "0 auto" }}>
              {/* divider */}
              <line x1="150" y1="18" x2="150" y2="204" stroke="#e5e7eb" strokeWidth="1.5" strokeDasharray="4,3"/>

              {/* ── LEFT: WIRE CAGE ── */}
              <text x="75" y="14" textAnchor="middle" fontSize="11" fontWeight="700" fill="#374151">Wire Cage</text>
              <rect x="15" y="190" width="118" height="14" rx="2" fill="#c8a96e"/>
              <line x1="15" y1="190" x2="133" y2="190" stroke="#92400e" strokeWidth="1.5"/>

              {/* cage vertical wires */}
              <line x1="28" y1="62" x2="28" y2="190" stroke="#6b7280" strokeWidth="2.5"/>
              <line x1="122" y1="62" x2="122" y2="190" stroke="#6b7280" strokeWidth="2.5"/>
              {/* back vertical wires (lighter) */}
              <line x1="50" y1="54" x2="50" y2="190" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="5,3"/>
              <line x1="100" y1="54" x2="100" y2="190" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="5,3"/>
              {/* horizontal rings */}
              <ellipse cx="75" cy="62"  rx="47" ry="9" fill="none" stroke="#6b7280" strokeWidth="2" strokeDasharray="5,3"/>
              <ellipse cx="75" cy="97"  rx="47" ry="9" fill="none" stroke="#6b7280" strokeWidth="2"/>
              <ellipse cx="75" cy="132" rx="47" ry="9" fill="none" stroke="#6b7280" strokeWidth="2"/>
              <ellipse cx="75" cy="167" rx="47" ry="9" fill="none" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="5,3"/>
              {/* cage legs driven into soil */}
              <line x1="28" y1="190" x2="28" y2="202" stroke="#6b7280" strokeWidth="2.5"/>
              <line x1="122" y1="190" x2="122" y2="202" stroke="#6b7280" strokeWidth="2.5"/>

              {/* plant inside cage */}
              <line x1="75" y1="190" x2="75" y2="30" stroke="#16a34a" strokeWidth="5" strokeLinecap="round"/>
              <line x1="75" y1="105" x2="108" y2="76" stroke="#16a34a" strokeWidth="3"/>
              <line x1="75" y1="105" x2="44" y2="78" stroke="#16a34a" strokeWidth="3"/>
              <line x1="75" y1="145" x2="110" y2="119" stroke="#16a34a" strokeWidth="3"/>
              <line x1="75" y1="145" x2="42" y2="121" stroke="#16a34a" strokeWidth="3"/>
              <circle cx="114" cy="115" r="7" fill="#e8453c"/>
              <circle cx="38" cy="118" r="7" fill="#e8453c"/>
              <circle cx="112" cy="73" r="5" fill="#e8453c"/>

              {/* cage label callout */}
              <rect x="18" y="28" width="114" height="20" rx="3" fill="#f3f4f6" stroke="#9ca3af" strokeWidth="1"/>
              <text x="75" y="41" textAnchor="middle" fill="#6b7280" fontSize="9">branches grow through rings</text>

              {/* ── RIGHT: SINGLE STAKE ── */}
              <text x="225" y="14" textAnchor="middle" fontSize="11" fontWeight="700" fill="#374151">Single Stake</text>
              <rect x="162" y="190" width="130" height="14" rx="2" fill="#c8a96e"/>
              <line x1="162" y1="190" x2="292" y2="190" stroke="#92400e" strokeWidth="1.5"/>

              {/* wooden stake */}
              <rect x="263" y="42" width="11" height="152" rx="3" fill="#92400e"/>
              <polygon points="263,192 274,192 268.5,205" fill="#78350f"/>

              {/* plant stem */}
              <line x1="220" y1="190" x2="220" y2="28" stroke="#16a34a" strokeWidth="6" strokeLinecap="round"/>
              <line x1="220" y1="108" x2="194" y2="78" stroke="#16a34a" strokeWidth="3"/>
              <line x1="220" y1="108" x2="248" y2="80" stroke="#16a34a" strokeWidth="3"/>
              <line x1="220" y1="152" x2="190" y2="126" stroke="#16a34a" strokeWidth="3"/>
              <circle cx="186" cy="122" r="7" fill="#e8453c"/>
              <circle cx="252" cy="77" r="6" fill="#e8453c"/>

              {/* ties — figure-8 loops (3 of them) */}
              {[82, 126, 166].map((y, i) => (
                <g key={i}>
                  <path d={`M 220 ${y} Q 235 ${y - 6} 248 ${y} Q 258 ${y + 5} 263 ${y}`}
                    fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round"/>
                  <circle cx="241" cy={y - 2} r="3.5" fill="#2563eb" opacity="0.7"/>
                </g>
              ))}

              {/* tie label */}
              <rect x="163" y="98" width="50" height="22" rx="3" fill="#eff6ff" stroke="#2563eb" strokeWidth="1.5"/>
              <text x="169" y="111" fill="#2563eb" fontSize="9" fontWeight="700">soft tie</text>
              <line x1="213" y1="109" x2="238" y2="106" stroke="#2563eb" strokeWidth="1" strokeDasharray="2,2"/>

              {/* stake depth annotation */}
              <line x1="280" y1="190" x2="290" y2="190" stroke="#6b7280" strokeWidth="1"/>
              <line x1="280" y1="204" x2="290" y2="204" stroke="#6b7280" strokeWidth="1"/>
              <line x1="285" y1="190" x2="285" y2="204" stroke="#6b7280" strokeWidth="1"/>
              <text x="292" y="200" fontSize="8" fill="#6b7280">8"</text>
            </svg>

            <div style={{ background: "#f0f9ff", borderRadius: 10, padding: "10px 14px", marginTop: 8 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#0369a1", marginBottom: 6 }}>
                Cage vs Single Stake — when &amp; how:
              </div>
              {[
                "🏗️ Wire cage (recommended): Slip over the seedling right at planting. Drive 3 legs 6–8\" into soil. Branches naturally push through the horizontal rings — no tying ever needed.",
                "🪵 Single 6 ft stake: Drive it 8\" deep, 2\" away from the stem (never through the root ball). Tie the main stem loosely every 12\" as it grows using soft material.",
                "Both: install early — once the plant is 2 ft tall it's hard to cage without snapping branches.",
                "Never use wire or string pulled tight — it girdles the stem. Use cloth strips, foam twist-ties, or velcro, in a loose figure-8 loop.",
              ].map((t, i) => (
                <div key={i} style={{ fontSize: 11, color: "#333", lineHeight: 1.75, marginBottom: 2 }}>• {t}</div>
              ))}
            </div>
          </div>
        )}

        {/* ── TRELLIS DIAGRAM ── */}
        {guideActive === "trellis" && (
          <div>
            <svg viewBox="0 0 300 230" style={{ width: "100%", display: "block", maxWidth: 340, margin: "0 auto" }}>
              {/* Soil */}
              <rect x="10" y="200" width="280" height="22" rx="3" fill="#c8a96e"/>
              <line x1="10" y1="200" x2="290" y2="200" stroke="#92400e" strokeWidth="2"/>
              <text x="150" y="218" textAnchor="middle" fontSize="9" fill="#92400e">soil · posts driven 12" deep</text>

              {/* Left post */}
              <rect x="20" y="36" width="14" height="168" rx="3" fill="#92400e"/>
              <polygon points="20,201 34,201 27,215" fill="#78350f"/>
              <text x="27" y="28" textAnchor="middle" fontSize="9" fill="#92400e" fontWeight="700">Post</text>

              {/* Right post */}
              <rect x="266" y="36" width="14" height="168" rx="3" fill="#92400e"/>
              <polygon points="266,201 280,201 273,215" fill="#78350f"/>
              <text x="273" y="28" textAnchor="middle" fontSize="9" fill="#92400e" fontWeight="700">Post</text>

              {/* Horizontal twine rows */}
              {[64, 100, 136, 172].map((y, i) => (
                <g key={i}>
                  <line x1="34" y1={y} x2="266" y2={y} stroke="#a16207" strokeWidth="2.5" strokeLinecap="round"/>
                  {/* height label on right */}
                  <rect x="244" y={y - 9} width="34" height="16" rx="2" fill="#fef9c3"/>
                  <text x="261" y={y + 4} textAnchor="middle" fontSize="8" fill="#92400e" fontWeight="700">
                    {["12\"", "24\"", "36\"", "48\""][i]}
                  </text>
                </g>
              ))}

              {/* Vine 1 — growing up from base ~x=90 */}
              <line x1="90" y1="200" x2="90" y2="96" stroke="#16a34a" strokeWidth="4" strokeLinecap="round"/>
              <path d="M 90 96 Q 112 82 104 64" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round"/>
              {/* Cucumber fruits */}
              <ellipse cx="74" cy="152" rx="8" ry="17" fill="#86efac" transform="rotate(18 74 152)"/>
              <ellipse cx="106" cy="114" rx="7" ry="15" fill="#86efac" transform="rotate(-12 106 114)"/>
              {/* Tendrils hooking to twine */}
              <path d="M 90 172 Q 80 164 76 172 Q 72 180 82 177" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"/>
              <path d="M 90 136 Q 102 127 106 136 Q 110 145 100 141" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"/>

              {/* Vine 2 — ~x=190 */}
              <line x1="190" y1="200" x2="190" y2="132" stroke="#16a34a" strokeWidth="4" strokeLinecap="round"/>
              <path d="M 190 132 Q 210 116 202 100" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round"/>
              <ellipse cx="174" cy="160" rx="7" ry="15" fill="#86efac" transform="rotate(15 174 160)"/>
              <path d="M 190 172 Q 180 163 176 172 Q 172 181 182 177" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"/>

              {/* Span label at top */}
              <line x1="34" y1="22" x2="266" y2="22" stroke="#9ca3af" strokeWidth="1" strokeDasharray="3,2"/>
              <line x1="34" y1="18" x2="34" y2="26" stroke="#9ca3af" strokeWidth="1"/>
              <line x1="266" y1="18" x2="266" y2="26" stroke="#9ca3af" strokeWidth="1"/>
              <rect x="106" y="14" width="88" height="16" rx="3" fill="#f0fdf4"/>
              <text x="150" y="25" textAnchor="middle" fontSize="9" fill="#16a34a" fontWeight="700">bed width ~4 ft</text>

              {/* Tendril legend */}
              <rect x="10" y="152" width="52" height="22" rx="3" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1.5"/>
              <text x="36" y="166" textAnchor="middle" fontSize="8" fill="#16a34a" fontWeight="700">tendril</text>
            </svg>

            <div style={{ background: "#f0fdfa", borderRadius: 10, padding: "10px 14px", marginTop: 8 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#0f766e", marginBottom: 6 }}>
                Setting up your cucumber trellis (Zone B):
              </div>
              {[
                "Drive 2 sturdy posts (wood or metal) 12\" deep at each end of Zone B — they need to hold a lot of weight when fruiting",
                "Run twine rows at 12\", 24\", 36\" and 48\" from soil — knot tightly around each post",
                "As vines grow, guide the main vine upward — the curly tendrils will hook onto the twine naturally",
                "Loosely tie any stray vines with a soft twist-tie if they wander off the strings",
                "Cucumbers get heavy — check post stability mid-season and re-tension sagging twine",
                "Harvest cucumbers regularly (every 2–3 days) so the vine doesn't snap under overloaded fruit",
              ].map((t, i) => (
                <div key={i} style={{ fontSize: 11, color: "#333", lineHeight: 1.75 }}>• {t}</div>
              ))}
            </div>
          </div>
        )}

        {/* ── LIGHT STAKE DIAGRAM (Pepper / Eggplant / Okra) ── */}
        {guideActive === "pstake" && (
          <div>
            <svg viewBox="0 0 300 225" style={{ width: "100%", display: "block", maxWidth: 340, margin: "0 auto" }}>
              {/* Dividers */}
              <line x1="100" y1="16" x2="100" y2="204" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="3,2"/>
              <line x1="200" y1="16" x2="200" y2="204" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="3,2"/>

              {/* ── CHILLI / BELL PEPPER ── */}
              <text x="50" y="13" textAnchor="middle" fontSize="10" fontWeight="700" fill="#ea580c">Chilli/Bell</text>
              <rect x="6"  y="192" width="92"  height="12" rx="2" fill="#c8a96e"/>
              <line x1="6" y1="192" x2="98" y2="192" stroke="#92400e" strokeWidth="1.5"/>
              <rect x="79" y="46" width="9" height="148" rx="2" fill="#92400e"/>
              <polygon points="79,193 88,193 83.5,206" fill="#78350f"/>
              <line x1="45" y1="192" x2="45" y2="36" stroke="#ea580c" strokeWidth="6" strokeLinecap="round"/>
              <line x1="45" y1="108" x2="20" y2="76" stroke="#ea580c" strokeWidth="3"/>
              <line x1="45" y1="108" x2="70" y2="78" stroke="#ea580c" strokeWidth="3"/>
              <line x1="45" y1="152" x2="18" y2="124" stroke="#ea580c" strokeWidth="3"/>
              <ellipse cx="15" cy="120" rx="6" ry="11" fill="#dc2626" transform="rotate(12 15 120)"/>
              <ellipse cx="72" cy="75"  rx="5" ry="10" fill="#ea580c" transform="rotate(-8 72 75)"/>
              <ellipse cx="17" cy="140" rx="5" ry="10" fill="#dc2626" transform="rotate(15 17 140)"/>
              {[96, 146].map((y, i) => (
                <g key={i}>
                  <path d={`M 45 ${y} Q 58 ${y-5} 68 ${y} Q 74 ${y+4} 79 ${y}`} fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round"/>
                  <circle cx="63" cy={y - 2} r="3" fill="#2563eb" opacity="0.75"/>
                </g>
              ))}

              {/* ── EGGPLANT ── */}
              <text x="150" y="13" textAnchor="middle" fontSize="10" fontWeight="700" fill="#7c3aed">Eggplant</text>
              <rect x="104" y="192" width="92" height="12" rx="2" fill="#c8a96e"/>
              <line x1="104" y1="192" x2="196" y2="192" stroke="#92400e" strokeWidth="1.5"/>
              <rect x="177" y="46" width="9" height="148" rx="2" fill="#92400e"/>
              <polygon points="177,193 186,193 181.5,206" fill="#78350f"/>
              <line x1="143" y1="192" x2="143" y2="36" stroke="#7c3aed" strokeWidth="6" strokeLinecap="round"/>
              <line x1="143" y1="105" x2="118" y2="74" stroke="#7c3aed" strokeWidth="3"/>
              <line x1="143" y1="105" x2="170" y2="76" stroke="#7c3aed" strokeWidth="3"/>
              <line x1="143" y1="152" x2="116" y2="124" stroke="#7c3aed" strokeWidth="3"/>
              <ellipse cx="113" cy="119" rx="8" ry="15" fill="#7c3aed" transform="rotate(8 113 119)"/>
              <ellipse cx="173" cy="73"  rx="7" ry="14" fill="#6d28d9" transform="rotate(-5 173 73)"/>
              {[96, 148].map((y, i) => (
                <g key={i}>
                  <path d={`M 143 ${y} Q 156 ${y-5} 166 ${y} Q 172 ${y+4} 177 ${y}`} fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round"/>
                  <circle cx="160" cy={y - 2} r="3" fill="#2563eb" opacity="0.75"/>
                </g>
              ))}

              {/* ── OKRA (taller) ── */}
              <text x="250" y="13" textAnchor="middle" fontSize="10" fontWeight="700" fill="#65a30d">Okra</text>
              <rect x="202" y="192" width="96" height="12" rx="2" fill="#c8a96e"/>
              <line x1="202" y1="192" x2="298" y2="192" stroke="#92400e" strokeWidth="1.5"/>
              <rect x="273" y="28" width="9" height="166" rx="2" fill="#92400e"/>
              <polygon points="273,193 282,193 277.5,207" fill="#78350f"/>
              {/* taller stem */}
              <line x1="238" y1="192" x2="238" y2="18" stroke="#84cc16" strokeWidth="6" strokeLinecap="round"/>
              <line x1="238" y1="88"  x2="214" y2="58" stroke="#84cc16" strokeWidth="3"/>
              <line x1="238" y1="130" x2="261" y2="100" stroke="#84cc16" strokeWidth="3"/>
              <line x1="238" y1="168" x2="214" y2="144" stroke="#84cc16" strokeWidth="3"/>
              <ellipse cx="211" cy="55"  rx="4" ry="13" fill="#84cc16" transform="rotate(-15 211 55)"/>
              <ellipse cx="263" cy="97"  rx="4" ry="12" fill="#65a30d" transform="rotate(10 263 97)"/>
              <ellipse cx="210" cy="141" rx="4" ry="13" fill="#84cc16" transform="rotate(-8 210 141)"/>
              {[74, 120, 165].map((y, i) => (
                <g key={i}>
                  <path d={`M 238 ${y} Q 251 ${y-5} 261 ${y} Q 268 ${y+4} 273 ${y}`} fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round"/>
                  <circle cx="255" cy={y - 2} r="3" fill="#2563eb" opacity="0.75"/>
                </g>
              ))}
              {/* height annotation */}
              <line x1="286" y1="18"  x2="296" y2="18"  stroke="#9ca3af" strokeWidth="1"/>
              <line x1="286" y1="192" x2="296" y2="192" stroke="#9ca3af" strokeWidth="1"/>
              <line x1="291" y1="18"  x2="291" y2="192" stroke="#9ca3af" strokeWidth="1" strokeDasharray="3,2"/>
              <text x="299" y="110" fontSize="8" fill="#9ca3af" transform="rotate(90 299 110)">4–6 ft</text>

              {/* soil labels */}
              {[50, 150, 250].map((x, i) => (
                <text key={i} x={x} y="208" textAnchor="middle" fontSize="7.5" fill="#92400e">soil</text>
              ))}
            </svg>

            <div style={{ background: "#f7fee7", borderRadius: 10, padding: "10px 14px", marginTop: 8 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#365314", marginBottom: 6 }}>
                Light staking for peppers, eggplant &amp; okra:
              </div>
              {[
                "Drive a stake 8\" into the ground 2\" from the main stem — place it away from the root ball, not through it",
                "Use soft ties: strips of cloth, foam twist-ties, or velcro. Never wire — it cuts through the stem",
                "Tie in a loose figure-8: one loop around the stem, one around the stake — never cinch tight",
                "Add a tie every 12\" as the plant grows taller — don't wait until it's already leaning hard",
                "Peppers & eggplant: stake when fruit clusters start pulling the branches noticeably sideways",
                "Okra: stake when it hits 3 ft+ tall — especially important before summer thunderstorms",
              ].map((t, i) => (
                <div key={i} style={{ fontSize: 11, color: "#333", lineHeight: 1.75 }}>• {t}</div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* After-Planting Care Guide */}
      <div style={{
        background: "#fff", borderRadius: 16, padding: 18, marginBottom: 18,
        boxShadow: "0 2px 16px rgba(0,80,0,0.07)", border: "1px solid #d4e8d4",
      }}>
        <div style={{ fontSize: 11, letterSpacing: 2, color: "#6b7c6b", textTransform: "uppercase", marginBottom: 4 }}>
          🌿 After-Planting Care Guide
        </div>
        <div style={{ fontSize: 11, color: "#4a6a4a", marginBottom: 14 }}>
          Plants are in the ground — here's how to keep them thriving.
        </div>

        {/* Vertical support summary */}
        <div style={{ background: "#fef9c3", border: "1px solid #fbbf24", borderRadius: 10, padding: "10px 12px", marginBottom: 14 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#78350f", marginBottom: 6 }}>🏗️ Vertical Support Needed</div>
          {careGuide.filter(p => p.support.needed).map((p, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 6, marginBottom: 4 }}>
              <span style={{ fontSize: 13 }}>{p.emoji}</span>
              <div>
                <span style={{ fontSize: 11, fontWeight: 700, color: "#1a2e1a" }}>{p.name}</span>
                <span style={{ fontSize: 11, color: "#555" }}> — {p.support.label}</span>
                {p.support.note && <div style={{ fontSize: 10, color: "#ea580c" }}>⚠️ {p.support.note}</div>}
              </div>
            </div>
          ))}
          <div style={{ marginTop: 8, paddingTop: 8, borderTop: "1px solid #fde68a" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#78350f", marginBottom: 4 }}>✅ Self-Supporting</div>
            {careGuide.filter(p => !p.support.needed).map((p, i) => (
              <span key={i} style={{ fontSize: 12, marginRight: 10 }}>{p.emoji} {p.name}</span>
            ))}
          </div>
        </div>

        {/* Plant selector */}
        <div style={{ fontSize: 10, color: "#888", marginBottom: 6 }}>Tap a plant for detailed care instructions:</div>
        <div style={{ display: "flex", gap: 6, marginBottom: 12, overflowX: "auto", paddingBottom: 4 }}>
          {careGuide.map((p) => (
            <button key={p.id} onClick={() => setCareActive(p.id)} style={{
              padding: "7px 12px", borderRadius: 999,
              border: `2px solid ${p.color}`,
              background: careActive === p.id ? p.color : p.bg,
              color: careActive === p.id ? "#fff" : p.color,
              fontWeight: 700, fontSize: 13, cursor: "pointer",
              whiteSpace: "nowrap", transition: "all 0.15s", flexShrink: 0,
            }}>{p.emoji}</button>
          ))}
        </div>

        {/* Care detail card */}
        {(() => {
          const p = careGuide.find(c => c.id === careActive);
          if (!p) return null;
          return (
            <div style={{ border: `2px solid ${p.color}33`, borderRadius: 14, overflow: "hidden" }}>
              <div style={{ background: p.color, padding: "10px 14px", display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 28 }}>{p.emoji}</span>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}>{p.name}</div>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,0.85)" }}>
                    {p.support.needed ? `🏗️ Needs support: ${p.support.label}` : "✅ Self-supporting — no staking needed"}
                  </div>
                </div>
              </div>
              <div style={{ background: "#fef3c7", borderBottom: `1px solid ${p.color}22`, padding: "8px 14px", display: "flex", gap: 8, alignItems: "flex-start" }}>
                <span style={{ fontSize: 14 }}>📅</span>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 700, color: "#92400e", marginBottom: 1 }}>DO THIS NOW (Week 2–3)</div>
                  <div style={{ fontSize: 11, color: "#78350f", lineHeight: 1.5 }}>{p.now}</div>
                </div>
              </div>
              {[
                { icon: "💧", label: "Watering",    val: p.water },
                { icon: "🌱", label: "Fertilizing", val: p.fertilize },
                { icon: "✂️",  label: "Pruning",     val: p.prune },
                { icon: "🐛", label: "Watch For",   val: p.watch },
              ].map((row, i) => (
                <div key={i} style={{
                  display: "flex", gap: 10, padding: "9px 14px",
                  borderBottom: i < 3 ? `1px solid ${p.color}22` : "none",
                  background: i % 2 === 0 ? "#fff" : p.bg,
                }}>
                  <span style={{ fontSize: 16, minWidth: 22 }}>{row.icon}</span>
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 700, color: p.color, marginBottom: 1 }}>{row.label}</div>
                    <div style={{ fontSize: 11, color: "#333", lineHeight: 1.6 }}>{row.val}</div>
                  </div>
                </div>
              ))}
            </div>
          );
        })()}
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

      {/* Fall cauliflower reminder */}
      <div style={{ background: "#f5f3ff", border: "1px solid #c4b5fd", borderRadius: 12, padding: "12px 14px", marginBottom: 18 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#4c1d95", marginBottom: 4 }}>🥦 Don't forget — Fall Cauliflower</div>
        <div style={{ fontSize: 11, color: "#5b21b6", lineHeight: 1.6 }}>
          Start 'Snow Crown' or 'Amazing' seeds indoors <strong>July 1</strong> → transplant late August → harvest October.
          Fall Zone 6a cauliflower produces sweeter, denser heads than any summer planting.
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: 14, fontSize: 10, color: "#aaa" }}>
        Garden Plan · Palatine, IL · In-Ground Bed · May 2026
      </div>

      </>}
    </div>
  );
}
