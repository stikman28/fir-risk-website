---
title: "INTEL-40: Obscurity Is Not a Control"
description: "Anthropic's September 2026 threat report declares that security through obscurity 'is no longer viable': AI makes unusual configurations easy to understand and exploit, and makes previously marginal targets worth attacking. The one action: build a complete inventory of everything you expose to the internet, with an owner for each item."
date: 2026-10-20
type: "intel"
intel_type: "TREND"
tags: ["Attack Surface Management", "Vulnerability Management", "SMB", "AI Security", "Anthropic", "Patch Management", "CISO", "Risk Management"]
---

## The INTEL

**The quiet corner of your network is no longer safe. Anthropic's September 2026 threat report says it plainly: "The old adage of 'security through obscurity' is no longer viable in this new AI-assisted world: everything connected to the internet is a potential target for exploitation." With AI, the report says, diverse target environments become "trivial to understand," and unique and obscure configurations "are made clear and exploitable."**

The economics explain why. AI lowers the skill and labor an attacker needs per campaign "while leaving potential payoffs largely unchanged," which the report says "makes previously marginal targets viable and encourages higher-volume, lower-touch operations." Opportunistic groups now race to exploit newly published vulnerabilities before victims apply patches, and mass-scan internet-facing devices for anything they can open.

Exploit supply is no longer the bottleneck it was. The report describes a Chinese-speaking espionage group (GTG-10007), including two undergraduate students, that ran an automated exploit foundry: AI conducted vulnerability research around the clock and kept working while the operators were away. The group targeted roughly fifty organizations across education, retail, energy, healthcare, finance and government.

---

## Why It Matters

Many organizations, especially smaller ones, carry an unspoken assumption: we're not interesting enough to attack, and our odd legacy setup is too obscure to bother with. Both halves of that assumption just failed. Attackers don't need to find you interesting if finding you costs almost nothing, and AI reads an unusual configuration as easily as a common one.

The systems most at risk are the ones nobody remembers: the old VPN appliance, the test server left online, the admin panel a contractor set up years ago. You can't patch what you don't know you have.

---

## What To Do — One Key Action

**Build a complete inventory of everything your organization exposes to the internet (domains, IP ranges, VPN and firewall appliances, admin panels, cloud services and forgotten test systems) and assign a named owner to each one. Anything without an owner gets reviewed and either secured or shut down.**

Use an external scan to find what your own records miss. Attackers are already running one against you.

---

## MITRE ATT&CK

- **T1595 — Active Scanning · T1190 — Exploit Public-Facing Application:** Opportunistic actors scan the internet at scale and exploit whatever responds. AI doesn't change these techniques; it removes the labor that once made small or unusual targets not worth the effort.

---

## Learn More

- [Detecting and countering misuse of AI: September 2026 (Anthropic)](https://www.anthropic.com/threat-intelligence-report-september-2026) — Primary source, cases GTG-50014 and GTG-10007
- [FIR Risk Tuesday E93 — The Attacks Aren't New. The Economics Are.](/tuesday/e93-the-economics-changed/) — Full analysis of the report
- [CISA Known Exploited Vulnerabilities Catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog) — Prioritize the internet-facing flaws attackers are actively using

---

*Powered by [FIR Risk Platform](https://firrisk.ai/platform/) — AI-driven threat intelligence for enterprise risk leaders.*
