---
title: "E91 - The Window Closed"
description: "Three 2026 threat reports — Rapid7, VulnCheck, and Zscaler — from three different corners of the industry reach one conclusion: the window between when a threat appears and when it hurts you has collapsed. Nearly 3 in 10 vulnerabilities are exploited on or before disclosure, initial access is now a commoditized product, and 100% of red-tested AI systems failed. The neutral Verizon breach data agrees."
date: 2026-07-14
image: "/images/tuesday/e91-the-window-closed.png"
thumbnail: "/images/tuesday/e91-the-window-closed.png"
source: "Rapid7, VulnCheck & Zscaler ThreatLabz 2026 Threat Reports"
sourceUrl: "https://vulncheck.com/"
tags: ["Threat Intelligence", "Vulnerability Management", "CISA KEV", "Exploit Intelligence", "Initial Access Brokers", "Ransomware", "Third-Party Risk", "Supply Chain", "AI Security", "Zero Trust", "Exposure Management", "Attack Surface", "CISO", "Risk Management", "SMB Security"]
---

## One report is a claim. Three is a pattern.

Any single vendor threat report is easy to discount. The company publishing it sells the cure for the disease it diagnoses, and it has every reason to make the disease sound terminal. We read them anyway — carefully, and against each other — because when reports that share nothing but a publication quarter start telling the same story from opposite ends of the industry, the story stops being marketing and starts being signal.

That is what happened this quarter. Three reports landed — Rapid7 from the threat-intelligence world, VulnCheck from the vulnerability-intelligence world, Zscaler from the AI-security world. Different companies, different datasets, different attack surfaces. And underneath the three different vocabularies is one identical finding: **the window between when a threat appears and when it hurts you has collapsed.** Not narrowed. Collapsed.

This edition is the FIR reading of all three at once — what each one actually proves, why the agreement matters more than the individual claims, and the one test we ran to make sure we weren't just echoing three sales pitches.

---

## Bottom Line

For a decade, security strategy rested on a comfortable assumption: that between the moment a threat appeared and the moment it reached you, there was *time* — to detect, to triage, to patch. Every dollar spent on faster response was a bet that speed could offset exposure.

Three 2026 reports say that bet no longer pays, and they say it from three unrelated vantage points. VulnCheck measures the collapse: nearly three in ten actively-exploited vulnerabilities were being weaponized **on or before the day they were disclosed** — there was no window to be fast inside of. Rapid7 explains the collapse: initial access has been **industrialized into a product**, bought pre-packaged from brokers, so the attacker's preparation happens upstream and off your clock. Zscaler shows the collapse reaching even the newest surface: **100% of the AI systems it red-teamed contained critical vulnerabilities.**

The translation for a risk leader: you will not out-*detect* a threat that arrives before the patch exists, purchased ready-made, moving at machine speed. The strategy every one of these reports points toward — and the neutral breach data supports — is a shift from **reacting faster to being exposed less.**

---

## The One Sentence Your Board Needs

> **"Three independent 2026 threat reports, none of which cites the others, all reached the same conclusion: the era where speed of response could offset exposure is over. The winning move in 2026 is not faster reaction — it is less to react to."**

---

## 1. The exploit now arrives before the fix

Start with the hardest number of the three. VulnCheck's 2026 Exploit Intelligence Report found that **28.96% of the vulnerabilities added to CISA's Known Exploited Vulnerabilities catalog in 2025 were exploited on or before the day their CVE was published** — up from 23.6% the year before. Nearly three in ten. For those, "patch faster" was never an option; exploitation *preceded* disclosure. (Verizon's DBIR, working from a completely separate dataset, put the same figure at 29% — two independent sources landing on the same fraction, which is exactly the kind of agreement worth trusting.)

The case study that makes it visceral is Microsoft SharePoint's "ToolShell." Microsoft patched two flaws on July 8, 2025. Eleven days later it disclosed that those patches were **incomplete** — and that attackers were already exploiting the bypass, a critical unauthenticated remote-code-execution flaw, *before the complete fix existed.* Within days, three China-nexus actors were named; one was running ransomware. By year-end that single flaw had drawn ten distinct threat actors and multiple ransomware families. VulnCheck ranked it the #2 most-exploited vulnerability of the year.

And attackers didn't only chase the new: 884 CVEs picked up first-time exploitation evidence in 2025, and more than 160 of them dated from 2024 — old, unpatched flaws, revisited. The catalog everyone treats as the definitive list of what's being exploited is, in VulnCheck's framing, a starting point, not the whole map.

---

## 2. Access has become a product

If VulnCheck explains *how fast*, Rapid7's 2026 Global Threat Landscape Report explains *why so fast.* Its through-line, chapter by chapter — "The Disappearance of Predictive Lead Time," "The Industrialization of Access," "Ransomware as a Downstream Income" — is that intrusion has been broken into an assembly line. Initial Access Brokers and specialized collectives now remove the operational friction that used to slow attackers down. Access to a target is a **pre-packaged product**, bought and sold, feeding a separate downstream stage where ransomware operators do the monetizing.

That decomposition is the whole point. When access is something an attacker has to *build* against your specific environment, you have time inside their effort — reconnaissance is noisy, tooling takes work, and a good defender can intervene mid-campaign. When access is something an attacker *buys*, that time is already gone. The preparation happened upstream, by someone else, sold as a commodity, before your name ever entered the picture. Rapid7's framing of ransomware as "downstream income" rather than a start-to-finish operation is the market-structure explanation for the collapsed window VulnCheck measures.

---

## 3. Even the newest surface fails at machine speed

The third report looks somewhere neither of the others does: enterprise AI systems. Zscaler's ThreatLabz 2026 AI Security research ran authorized red-team simulations — ethical hackers emulating real-world adversaries — against live AI deployments, and found **critical vulnerabilities in 100% of the AI systems tested.** Not a sampled estimate. Every system evaluated.

For our purposes the AI angle is almost beside the point. What matters is that a **brand-new attack surface**, tested independently by a third company with a third methodology, exhibits the identical pattern the other two describe on older ground: compromise happening faster than human-paced security operations can intervene. "Failure" here means a red team found an exploitable critical flaw — not a confirmed breach — and that distinction is worth stating plainly. But the direction is unambiguous. Detect-triage-respond cycles built around human clock speed are structurally too slow when the flaw is found in minutes, on a surface most organizations deployed faster than they secured.

---

## The test we ran before we believed any of it

Here is the fair objection, and you should raise it in your own boardroom before a skeptic does: **all three of these companies sell the cure for the disease they diagnose.** Rapid7 sells exposure management. VulnCheck sells exploit intelligence. Zscaler sells Zero Trust. Three vendors who profit from alarm, all sounding the alarm, is not by itself proof of anything.

So we tested the thesis against the one dataset in this space with no product to move: **the Verizon DBIR** — the neutral, incident-based breach data we covered in E90. It points the same direction, from forensics rather than a sales deck. Third-party involvement in breaches rose 60% year-over-year to nearly half of all breaches. Organizations took a median of roughly **eight months** to remediate half of the password and permission weaknesses sitting in their vendors' cloud environments. And that independent 29% pre-disclosure-exploitation figure lines up almost exactly with VulnCheck's 28.96%.

The vendors have every reason to sound the alarm. The breach data has none. They agree anyway — and where the vendor claim and the neutral data disagree or can't be checked, we left it out of this edition entirely. *That* is why we're calling this a pattern and not a marketing cycle.

---

## So What Should Organizations Actually Do?

This part doesn't need theatrics — only clarity. You cannot out-detect a threat that arrives before the patch, bought pre-packaged, moving at machine speed. So stop optimizing the reaction and start shrinking the target.

1. **Assume the patch window is zero for anything internet-facing.** Prioritize *exposure reduction* — take unpatchable edge devices off the open internet, decommission what you don't need, shrink the attack surface — over patch speed alone. You cannot win the patch race; the smart move is to stop entering it.
2. **Treat your vendors' access as your own.** The breach data now puts third-party involvement behind roughly half of all breaches, with remediation of vendor weaknesses dragging for months. Make mandatory MFA and credential hygiene a *contract term* with critical vendors — not a polite request.
3. **Govern AI before it governs your risk.** As AI moves into core workflows it becomes core infrastructure — and, on this evidence, an untested one. Put AI usage under the same access controls, visibility, and board-level oversight you'd demand of any other critical system.
4. **Re-baseline the board conversation around exposure, not speed.** The metric that mattered last year — mean time to respond — assumes a window that no longer reliably exists. Ask instead: how much of our surface is exposed, to whom, and for how long?

And finally: the reports disagree on the mechanism and agree on the conclusion. The organizations that come through 2026 well won't be the ones that reacted fastest. They'll be the ones that made sure there was less to react to.

---

## Learn More

- [VulnCheck 2026 Exploit Intelligence Report](https://vulncheck.com/) — Pre-disclosure exploitation data and the ToolShell case study
- [Rapid7 2026 Global Threat Landscape Report](https://www.rapid7.com/) — The industrialization of initial access
- [Zscaler ThreatLabz 2026 AI Security Report](https://www.zscaler.com/threatlabz) — Red-team findings on enterprise AI systems
- [CISA Known Exploited Vulnerabilities Catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog) — The catalog at the center of the exploitation findings
- [FIR Risk Tuesday E90 — Refinement, Not Revolution](/tuesday/e90-refinement-not-revolution/) — The 2026 Verizon DBIR, the neutral breach data this edition tests against
- [FIR Risk Tuesday E87 — The Agents Have Keys](/tuesday/e87-the-agents-have-keys/) — The AI-risk thread this edition's third report extends
- [FIR Risk Intelligence](https://github.com/stikman28/fir-risk-intelligence) — Source prompts, methodology, all published INTEL

---

*Powered by [FIR Risk Platform](https://firrisk.ai/platform/) — AI-driven threat intelligence for enterprise risk leaders.*
