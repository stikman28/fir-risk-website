---
title: "INTEL-45: Stop Counting Patches"
description: "Microsoft's 2026 Digital Defense Report says reporting should shift from patches deployed to exposure reduced, detection coverage increased and time to mitigate compressed, as weaponization falls well below 24 hours. The one action: replace patch counts in board reporting with those three trend lines."
date: 2026-10-31
type: "intel"
intel_type: "TREND"
tags: ["Board Governance", "Cyber Risk", "Vulnerability Management", "Exposure Management", "Patch Management", "Microsoft", "CISO", "Risk Management"]
---

## The INTEL

**Microsoft's 2026 Digital Defense Report tells leaders to change the scoreboard: "reporting metrics should shift from number of patches deployed to exposure reduced, detection coverage increased, and time-to-mitigate compressed."**

The reason is the clock. Microsoft says the median time from a flaw being discovered in the wild to a working exploit "has now collapsed to well below 24 hours," while enterprise remediation of critical external vulnerabilities "can take 30–60 days." Attackers often don't wait for disclosure at all: pre-disclosure windows of 30 days or more "are now routine." Against that, a count of patches deployed says little about whether the systems attackers actually target are still open.

Microsoft frames the shift as moving "from tool-centric vulnerability management to threat exposure management": knowing what you have exposed, ranking it by real risk and closing the gaps that matter first. Its first priority for organizations is to govern cyber risk at leadership level and report "identity exposure, patch latency, agent permissions, critical dependencies, dwell time, and recovery readiness."

---

## Why It Matters

What gets reported gets managed. A patch count can rise every month while one forgotten, internet-facing VPN stays exposed, and that VPN is where the attack comes from. Exposure reduced, detection coverage and time to mitigate measure the thing the board actually cares about: how open the organization is, and how fast it closes.

The board's job isn't to set patch deadlines. It's to ask for the measures that show whether the defense is keeping pace, and to fund what moves them.

---

## What To Do — One Key Action

**Ask management to replace patch counts in board reporting with three trend lines: exposure reduced (internet-facing and identity systems first), detection coverage, and time to mitigate.**

---

## MITRE ATT&CK

- **T1190 — Exploit Public-Facing Application:** The exposure these metrics are meant to track; Microsoft's incident response data shows it rising from 15% to 24% of initial access.

---

## Learn More

- [Microsoft Digital Defense Report 2026: Decoding emergence (Microsoft, PDF)](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/msc/documents/presentations/CSR/2026-Microsoft-Digital-Defense-Report.pdf) — Primary source, "Top 10 takeaways" and "Ten security priorities"
- [FIR Risk Tuesday E94 — MDDR 2026: A Shift in the Physics of Cyber Risk](/tuesday/e94-shift-in-the-physics-of-cyber-risk/) — Full analysis of the report
- [CISA Known Exploited Vulnerabilities Catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog) — The flaws attackers are actively using

---

*Powered by [FIR Risk Platform](https://firrisk.ai/platform/) — AI-driven threat intelligence for enterprise risk leaders.*
