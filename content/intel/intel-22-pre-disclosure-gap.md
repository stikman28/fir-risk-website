---
title: "INTEL-22: The Pre-Disclosure Gap"
description: "For the first time in the Verizon DBIR's history, exploiting an unpatched vulnerability is the #1 way attackers break in — and 29% of the critical ones were weaponized before a patch existed. The lesson isn't 'patch faster'; it's a consistent, risk-based patching discipline you never let slip."
date: 2026-06-24
type: "intel"
intel_type: "VULNERABILITY"
tags: ["Vulnerability Management", "CISA KEV", "Zero-Day", "Patch Management", "Exploitation", "Verizon DBIR", "CISO", "Risk Management", "MITRE ATT&CK"]
---
## The INTEL

**For the first time in the Verizon DBIR's history, exploiting an unpatched vulnerability is the single most common way attackers break in — and 29% of the critical ones were weaponized before a patch existed. "Patch when it's disclosed" is now "patch after the breach."**

The 2026 DBIR puts exploitation of vulnerabilities at the top of the initial-access list — 31% of breaches, up from 20% a year ago, a 55% jump that finally pushed it past stolen credentials and phishing. As a raw attack action, it doubled, to 32% of breaches.

But the number that should reset your vulnerability-management strategy is in the year-in-review: **29% of known-exploited vulnerabilities were attacked *before* they were publicly disclosed.** Nearly a third were live zero-days before a CVE, an advisory, or a patch existed. The assumption underneath every patch program — that disclosure gives you a head start — is now wrong roughly one time in three.

---

## Why It Matters

It's tempting to read "exploitation is now the #1 way in" as "we need to patch faster." That's the wrong lesson — and the 29% proves it: when nearly a third of critical bugs are exploited *before* a patch exists, no amount of speed wins the race. Heroic, reactive patching is a treadmill — the DBIR shows defenders shipping 30% more fixes and still losing ground, with only 26% of KEV vulnerabilities fully remediated.

What actually holds the line is the opposite of heroics: a **consistent, risk-based patching discipline**, executed the same way every cycle. Not "patch everything, faster," but "patch the exploitable, exposed things first — every time, without the program degrading the moment things get busy."

And the stakes are rising. As we covered in [E89](/tuesday/e89-the-april-inflection/), defenders and vendors are now using frontier AI — Claude Mythos and its peers — to find vulnerabilities faster than ever. That's good news, but it means the inflow of known issues is accelerating. A steady, risk-ranked routine scales with that flood. Sporadic, speed-driven patching does not.

---

## What To Do — One Key Action

**Don't chase speed — protect consistency. Make your patching routine a risk-based discipline that runs the same way every cycle, and defend it as a fundamental: rank by exploitability and exposure, patch the dangerous and exposed systems first, and never let the program lapse when the quarter gets busy.**

Speed is a treadmill; consistency is a compounding asset. The organizations that stay out of the DBIR's breach data aren't the ones that patch fastest in a crisis — they're the ones whose risk-ranked patching cadence never slips. And with frontier-AI vulnerability discovery accelerating the inflow ([E89](/tuesday/e89-the-april-inflection/)), the discipline matters more each quarter, not less.

The one question for your next review: not "can we patch faster?" but **"is our risk-based patching routine consistent — and protected — even in our busiest weeks?"** The full prioritization playbook is in [E90](/tuesday/e90-refinement-not-revolution/); staying consistent on this fundamental is where it starts.

---

## MITRE ATT&CK

- **T1190 — Exploit Public-Facing Application:** Now the #1 initial-access vector in the DBIR. The defender controls are exposure management and edge-device patch velocity — executed under the assumption that some critical bugs are exploited before disclosure.

---

## Learn More

- [FIR Risk Tuesday E90 — Refinement, Not Revolution](/tuesday/e90-refinement-not-revolution/) — The full 2026 DBIR breakdown
- [FIR Risk Tuesday E89 — The April Inflection](/tuesday/e89-the-april-inflection/) — AI-accelerated vulnerability discovery (Claude Mythos)
- [2026 Verizon Data Breach Investigations Report](https://www.verizon.com/business/resources/reports/dbir/) — Primary source
- [CISA Known Exploited Vulnerabilities Catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog) — The KEV list at the center of the finding

---

*Powered by [FIR Risk Platform](https://firrisk.ai/platform/) — AI-driven threat intelligence for enterprise risk leaders.*
