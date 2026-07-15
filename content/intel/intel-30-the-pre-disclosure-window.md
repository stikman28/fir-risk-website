---
title: "INTEL-30: The Pre-Disclosure Window"
description: "Nearly three in ten actively-exploited vulnerabilities in 2025 were weaponized on or before the day they were disclosed. VulnCheck's 28.96% figure — corroborated by the Verizon DBIR at 29% — plus the SharePoint ToolShell case study, mean 'patch faster' is a losing race for internet-facing systems. The move: treat the patch window as zero and shift to exposure reduction."
date: 2026-07-15
type: "intel"
intel_type: "VULNERABILITY"
tags: ["Vulnerability Management", "CISA KEV", "Exploit Intelligence", "Pre-Disclosure Exploitation", "Exposure Management", "Patch Management", "CISO", "MITRE ATT&CK", "Risk Management"]
---

## The INTEL

**Nearly three in ten actively-exploited vulnerabilities in 2025 were being weaponized on or before the day they were disclosed. For those, "patch faster" was never an option — exploitation arrived before the fix existed. Stop planning your vulnerability program around a reaction window that, for the vulnerabilities that matter most, no longer exists.**

VulnCheck's 2026 Exploit Intelligence Report puts a hard number on the fear defenders couldn't previously quantify: **28.96% of the vulnerabilities added to CISA's Known Exploited Vulnerabilities (KEV) catalog in 2025 were exploited on or before the day their CVE was published** — up from 23.6% the year before. The 2026 Verizon DBIR, working from a completely separate dataset, put the same figure at **29%**. Two independent sources, the same fraction — which is exactly the kind of agreement worth trusting.

The case study is Microsoft SharePoint's "ToolShell." Microsoft patched two flaws on July 8, 2025. **Eleven days later** it disclosed those patches were *incomplete* — and that attackers were already exploiting the bypass, a critical unauthenticated remote-code-execution flaw, *before the complete fix existed.* Within days, three China-nexus actors were named; one deployed Warlock ransomware. By year-end that single flaw had drawn ten distinct threat actors and multiple ransomware families. VulnCheck ranked it the **#2 most-exploited vulnerability of 2025**.

---

## Why It Matters

Every vulnerability-management program is built on an unstated assumption: that there is a window between disclosure and exploitation, and the job is to patch inside it. The 2025 data breaks that assumption for the vulnerabilities most likely to hurt you. When roughly three in ten actively-exploited flaws are hit on or before disclosure day — and when a vendor's own "complete" patch can itself be bypassed and exploited within eleven days — patch speed alone is a losing race for internet-facing systems.

This does not mean patching stops mattering. It means the *strategy* has to widen. If you cannot reliably patch before exploitation, the leverage moves to reducing what an attacker can reach in the first place: taking edge and internet-facing systems off open exposure where they don't need it, segmenting so a single exploited box isn't a path to everything, and prioritizing the KEV list not as a to-do queue but as evidence of where the pre-disclosure risk actually lands. VulnCheck's own framing is that the KEV catalog is a starting point, not the whole map — attackers also revisit old, unpatched flaws (884 CVEs picked up first-time exploitation evidence in 2025, more than 160 of them dating from 2024).

The organizations that handle this well stop asking "how fast can we patch?" and start asking "what is exposed, to whom, and does it need to be?"

---

## What To Do — One Key Action

**Treat the patch window as zero for anything internet-facing. Shift the program's center of gravity from patch speed to exposure reduction — decommission or firewall edge systems that don't need open exposure, segment aggressively, and use the CISA KEV catalog as a prioritization signal for where pre-disclosure risk concentrates, not as a checklist you can always beat the clock on.**

This is a CISO-and-infrastructure move, and it is a reframe more than a tooling purchase. Keep patching — but stop betting the program on winning a race the 2025 data says you lose nearly a third of the time. The single highest-leverage change is to make internet-facing exposure a deliberate, minimized, reviewed decision rather than a default. When a flaw is exploited before it's disclosed, the only defense you controlled in advance was whether the vulnerable surface was reachable at all.

---

## MITRE ATT&CK

- **T1190 — Exploit Public-Facing Application:** The initial-access vector in the ToolShell chain and the broader pre-disclosure-exploitation pattern. The control posture is exposure reduction and segmentation — minimizing what is reachable — since patch timing cannot be relied on when exploitation precedes disclosure.
- **T1195 — Supply Chain Compromise:** An incomplete vendor patch that is itself bypassed shifts risk into the software-supply-chain relationship; the control is treating vendor patch cadence as a risk input, not a guarantee.

---

## Learn More

- [FIR Risk Tuesday E91 — The Window Closed](/tuesday/e91-the-window-closed/) — The full three-report synthesis
- [CISA Known Exploited Vulnerabilities Catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog) — The catalog at the center of the finding
- [VulnCheck 2026 Exploit Intelligence Report](https://vulncheck.com/) — Primary source

---

*Powered by [FIR Risk Platform](https://firrisk.ai/platform/) — AI-driven threat intelligence for enterprise risk leaders.*
