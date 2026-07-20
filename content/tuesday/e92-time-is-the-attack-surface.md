---
title: "E92 - Time Is the Attack Surface"
description: "A Microsoft/Accenture report written for governments contains one idea every private risk leader should steal: cyber loss is no longer priced by whether you're breached — it's priced by three clocks. Recovery time (each extra week of downtime roughly triples the economic damage), adversary tempo (a disclosed espionage campaign ran 80–90% of its lifecycle on agentic AI), and your data's shelf life (harvest-now-decrypt-later is already operational). All three clocks need an owner."
date: 2026-07-21
image: "/images/tuesday/e92-time-is-the-attack-surface.png"
thumbnail: "/images/tuesday/e92-time-is-the-attack-surface.png"
source: "Microsoft & Accenture — Securing Nations in the Intelligent Economy (2026)"
sourceUrl: "https://wwps.microsoft.com/blog/securing-nations-ai-quantum-disruption"
tags: ["Cyber Resilience", "Business Continuity", "Recovery Time", "Economic Impact", "Agentic AI", "AI Security", "GTG-1002", "Quantum Computing", "Post-Quantum Cryptography", "Harvest Now Decrypt Later", "Data Protection", "Board Governance", "Risk Appetite", "CISO", "Risk Management"]
---

## A report for nations, a lesson for boards

Microsoft and Accenture published "Securing Nations in the Intelligent Economy" for an audience of policymakers — its four-pillar agenda is addressed to governments, its case studies run through national AI authorities, and it closes, as vendor reports do, with the authors' own product story. Most of that is not for us.

But buried in the policy language is an economic argument with direct private-sector teeth, backed by one of the cleanest empirical anchors we've seen in a vendor report this year: a real cyberattack that showed up in a G7 nation's GDP statistics. This edition extracts the three findings that survive the translation from statecraft to the boardroom — and runs our usual incentive check on the ones that don't.

— Bruce, FIR Risk Advisory

---

## Bottom Line

For years, cyber risk has been priced on *likelihood of compromise* — will we be breached, and how do we make that less likely. This report's data argues the price is now set by three clocks instead: **how long recovery takes** (economic damage grows non-linearly, roughly tripling with each extension of downtime), **how fast the adversary moves** (a disclosed real-world intrusion ran 80–90% of its lifecycle on AI, at machine speed), and **how long your data stays sensitive** (encrypted data stolen today sits on a delayed fuse until quantum decryption matures).

Same thesis, three surfaces: **speed and duration of exposure — not just likelihood of compromise — now drives economic loss.**

---

## The One Sentence Your Board Needs

> **"Our cyber loss is no longer priced by whether we get breached — it's priced by how many days we stay down, how many minutes the attacker needs, and how many years our stolen data stays valuable. All three clocks need an owner."**

---

## 1. Recovery time is a convex curve — every extra week roughly triples the bill

Start with the empirical anchor. In Q3 2025 a cyberattack halted Jaguar Land Rover's manufacturing — and the damage was visible in national statistics. UK motor vehicle production fell **28.6%** in September, the country's lowest car output in **73 years**; overall production fell 2.0%; the incident shaved roughly **0.1% off UK monthly GDP (~$2.5B)**, and quarterly growth slowed to 0.1% from 0.3%. A single company's incident, measurable in a G7 economy's output. That part is not modeling — it's the Office for National Statistics.

The report then models what duration does to damage. Using input-output tables — the standard tool for tracing how a shock to one industry propagates through the ones that buy and sell from it — it simulates a cyberattack on an upstream oil-and-gas operation in an oil-dependent economy, at three levels of resilience:

- Operations restored within a week: **1.4%** of monthly GDP lost
- Disrupted first week, gradual restoration from week two: **4.6%** (~$4.7B)
- Nearly two weeks to restore, tail into week four: **13.7%**

The shape matters more than the numbers. From scenario one to two the damage multiplies **3.3×**; from two to three, **3.0×**. Damage doesn't grow in proportion to downtime — it compounds. Which means the reverse is also true: investment that compresses recovery time buys *exponential* risk reduction, not linear. Every CISO argues this qualitatively. This report hands you a citable multiplier.

One honesty note before it goes in your board memo: the JLR case and the scenario model are **two separate analyses** in the report — the real incident was not run through the 1.4/4.6/13.7 framework, and implying otherwise would overreach. Real event proves it happens; model quantifies how it scales.

> **INTEL [GLOBAL] [FINDING]:** Microsoft/Accenture input-output modeling of a critical-infrastructure cyberattack shows national monthly GDP impact scaling non-linearly with recovery time — 1.4% (≤1 week), 4.6% (~3 weeks), 13.7% (~30 days) — each extension roughly tripling damage. Empirical companion: the 2025 Jaguar Land Rover incident measurably reduced UK monthly GDP ~0.1% (~$2.5B), with motor vehicle production down 28.6% (ONS). Board implication: recovery-time compression yields convex, not linear, risk reduction — RTO investment now has a quantified multiplier attached.

---

## 2. The adversary's clock now runs at machine speed

The second clock is the attacker's. The report's centerpiece case is one our readers already know from INTEL-1 and E87: Anthropic's disclosure — activity detected in September 2025, findings published that November — that a suspected state-linked actor, GTG-1002, used Claude Code, an agentic AI coding tool, to run an espionage campaign against roughly **30 high-value organizations** including financial institutions, chemical manufacturers, technology firms, and government agencies. Anthropic's estimate: **80–90% of the attack lifecycle was executed by AI**, with human operators intervening at only **4–6 decision points**.

What's new is not the incident — it's who is citing it. When the world's largest security vendor elevates a competitor-AI-lab's disclosure into a national-security policy document, the agentic threat has formally crossed from frontier-lab warning to mainstream doctrine. The thread we started pulling in April is now the establishment position.

The report surrounds the case with tempo data: public institutions absorbed **2,632 attacks per week** in Q2 2025, up **26% year-over-year** (Check Point). And the defender side isn't keeping pace — per Accenture's own survey research: **1 in 3** organizations say AI has amplified their existing cyber risk, **87%** say AI-generated lures are more convincing than before, **90%** say they are not equipped to withstand an AI-enabled attack, and only **17%** have fully built a secure cloud foundation for AI. Those four are self-reported perception figures from a vendor survey — directionally useful, not measured outcomes — and we label them as such. The $25 million deepfake-video executive impersonation that hit a Greater China multinational is the concrete reminder of what the perception gap costs when it's wrong.

The operational translation: detection and response SLAs were calibrated to human-speed adversaries. An intrusion lifecycle that is 80–90% automated does not honor a 24–48-hour lateral-movement assumption.

> **INTEL [GLOBAL] [THREAT]:** The GTG-1002 case (Anthropic disclosure, Nov 2025 — 80–90% AI-executed intrusion lifecycle, human input at 4–6 decision points, ~30 targets) has been elevated into Microsoft/Accenture national-security doctrine, marking the agentic-AI threat's transition from frontier-lab warning to mainstream policy evidence. Supporting tempo: 2,632 attacks/week on public institutions, +26% YoY (Check Point). Defender SLAs built on human-paced adversaries need re-baselining; SOC automation is now an adversary-tempo-matching investment, not an efficiency play.

---

## 3. The long fuse: your data's shelf life is part of the attack surface

The third clock is the slowest and the least attended. "Harvest now, decrypt later" is already operational: adversaries — criminal and state-backed — are stealing encrypted data *today*, warehousing it against the day quantum computing can open it. For regulated firms this is the clock that matters most, because your data has the longest confidentiality shelf life in the economy: health records, financial account data, PII, trade secrets — sensitive for 10–20+ years.

The report's timeline claim deserves both attention and a caveat. Attention: the consensus estimate for breaking RSA-2048 was ~20 million qubits; the report cites newer research (a Google researcher's analysis, via Quantum Insider) suggesting an advanced **one-million-qubit system — achievable by ~2030 —** could do it, with Caltech's 6,100-qubit neutral-atom array offered as evidence of hardware pace. Caveat: that is a projection resting on physical-qubit counts, not error-corrected logical qubits; independent academic estimates still run wider and later, and both report authors sell quantum-readiness services. We print the number with that label attached — and note that the strategic conclusion doesn't depend on it. Whether the fuse is 2030 or 2040, data exfiltrated today is already burning it.

Governments are acting on specific deadlines: the **US has mandated federal migration to post-quantum cryptography by 2035**, backed by **$7.1B**; the **EU and UK plan critical-infrastructure PQC by 2030** with full migration by 2035; **India's** National Quantum Mission targets 2026–28; **South Korea** finalized standards in 2025 for deployment by 2035. NIST's post-quantum standards (ML-KEM, ML-DSA) are finalized — the tooling exists.

And here is the stat we'd put on a slide: **66% of executives rank AI as the most game-changing technology; only 22% say quantum.** Read against the deadlines above, that's a systematic under-weighting — which for an early mover is an arbitrage. Crypto-inventory work started now is cheap, differentiating with regulators, and years ahead of the peer group.

> **INTEL [GLOBAL] [TREND]:** "Harvest-now-decrypt-later" reframes data confidentiality shelf-life as attack surface: encrypted data stolen today is compromised on a delayed fuse regardless of when quantum decryption matures (vendor-cited projection: 1M qubits ~2030 could break RSA-2048 — treat as industry estimate, not settled fact; prior consensus ~20M qubits). National PQC deadlines are specific: US 2035 ($7.1B), EU/UK critical infrastructure 2030, India 2026–28, South Korea standards 2025. Executive attention is inverted vs. the deadline pressure (66% rank AI most game-changing vs 22% quantum) — early crypto-inventory movers gain disproportionate regulatory positioning.

---

## The test we ran before we believed any of it

Our standing rule: name the seller before quoting the pitch. Microsoft sells AI-centric cyber defense, quantum-safe engineering, and national-scale security operations — the report's closing pages say so explicitly. Accenture sells the consulting to implement all of it. Two of the three legs of this edition — AI threat urgency and quantum urgency — are things the authors are paid to make you feel.

So we weighted the evidence accordingly. The strongest leg is the one no one is selling: the JLR impact comes from the UK Office for National Statistics — government production and GDP data with no product attached. The agentic-AI case rests on Anthropic's own disclosure — a primary source whose commercial incentive runs *against* publicizing misuse of its product, which is why we cite Anthropic directly rather than the report's retelling. The quantum timeline is the weakest link — vendor-relayed, projection-based, physical-qubit-denominated — so it carries an inline caveat, and our conclusions were built to survive without it.

There's also a pattern worth a sentence of its own: within this single report, the AI threat is evidenced by *disclosed, dated incidents*, while the quantum threat is evidenced by *projections and perception surveys*. That asymmetry in evidentiary rigor mirrors the 66/22 executive attention gap — leaders fund what has incident reports. The lesson isn't that quantum is hype; it's that risks with long fuses never generate incident reports until the fuse ends. That's exactly why they're mispriced.

> **INTEL [GLOBAL] [PATTERN]:** Within Microsoft/Accenture's own report, AI risk is supported by disclosed incidents (GTG-1002, deepfake fraud, ONS-measured JLR impact) while quantum risk rests entirely on projections and perception data — an evidentiary asymmetry that mirrors the 66%-vs-22% executive attention gap. Long-fuse risks structurally lack incident evidence until they detonate; boards anchoring solely on incident-backed risks will systematically underprice them.

---

## So What Should Organizations Actually Do?

*Each of these stands alone — if you read nothing else, assess your organization against these four.*

1. **Measure your recovery time in days — then price it.** Economic modeling of real incidents shows cyber damage compounds with downtime: each extra week of disruption roughly *triples* the loss rather than adding to it *[the report's 1.4% → 4.6% → 13.7% GDP scenarios, Section 1]*. The question for your team: if an attack halted core operations today, how many days to restore — and when did we last prove that number with a live failover test rather than a paper plan? Budget accordingly: a dollar that shortens recovery buys more risk reduction than a dollar that marginally improves prevention.
2. **Assume the intruder moves in minutes, not days.** Attackers now automate the bulk of an intrusion — in one disclosed 2025 espionage campaign, AI executed 80–90% of the attack lifecycle with humans stepping in only a handful of times *[the GTG-1002 case, Section 2]*. If your incident-response plan assumes a 24–48-hour window before an intruder spreads, it was calibrated for human-speed adversaries who are disappearing. The question: which containment steps — isolating a host, suspending an account, revoking a credential — can execute automatically, without waiting for a human? Expect insurers and regulators to start asking the same.
3. **Inventory the data that must stay secret for a decade.** Adversaries are stealing encrypted data *today* to decrypt it when quantum computing matures *["harvest now, decrypt later," Section 3]*. Anything that must remain confidential for 10+ years — health records, financial accounts, PII, trade secrets — is effectively at risk the day it's exfiltrated, whenever that decryption day arrives. The action: catalogue where that long-lived data lives and what encryption protects it — today's standard public-key cryptography *[RSA/ECC]* is the class at risk, the replacement standards are finalized *[NIST post-quantum]*, and government migration deadlines run 2030–2035. Starting the inventory in 2026 costs little, and only 22% of executives are paying attention — being early here is cheap differentiation.
4. **Ask what your risk register can't see.** Budget processes naturally fund the risks that produced last quarter's incidents — and systematically starve the risks that won't produce an incident until it's too late to act *[the long-fuse problem, Section 3]*. The test for your next risk-appetite review: name one material risk with zero incident history but a fixed external deadline — quantum-era decryption is the canonical example — and check whether it appears anywhere in your capital plan. If it doesn't, your funding model is driven by memory, not exposure.

The report was written to tell nations that resilience is destiny. Strip the statecraft and the private-sector version is simpler: the attacker's clock sped up, your recovery clock got more expensive, and your data's clock never stopped. Owning all three is the job now.

---

## Learn More

- [Securing Nations in the Intelligent Economy (Microsoft & Accenture)](https://wwps.microsoft.com/blog/securing-nations-ai-quantum-disruption) — Primary source
- [Disrupting the first reported AI-orchestrated cyber espionage campaign (Anthropic)](https://www-cdn.anthropic.com/d7dd50dd1185f59be051b307150d877f2b82bd2c.pdf) — Primary disclosure for the GTG-1002 case
- [MITRE ATT&CK Campaign C0062](https://attack.mitre.org/campaigns/C0062/) — Technique mapping for the GTG-1002 campaign
- [NIST Post-Quantum Cryptography Standards](https://csrc.nist.gov/projects/post-quantum-cryptography) — The finalized replacement standards (ML-KEM, ML-DSA)
- [CISA Post-Quantum Cryptography Initiative](https://www.cisa.gov/quantum) — US migration guidance for the harvest-now-decrypt-later era
- [FIR Risk Tuesday E91 — The Window Closed](/tuesday/e91-the-window-closed/) — The collapsed detection-response window this edition's tempo findings extend
- [FIR Risk Tuesday E89 — The April Inflection](/tuesday/e89-the-april-inflection/) — The AI offense/defense inflection point
- [FIR Risk Tuesday E87 — The Agents Have Keys](/tuesday/e87-the-agents-have-keys/) — When agentic AI got production access
- [FIR Risk Intelligence](https://github.com/stikman28/fir-risk-intelligence) — Source prompts, methodology, all published INTEL

---

*Powered by [FIR Risk Platform](https://firrisk.ai/platform/) — AI-driven threat intelligence for enterprise risk leaders.*
