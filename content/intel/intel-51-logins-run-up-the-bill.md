---
title: "INTEL-51: Exploits Open the Door, Logins Run Up the Bill"
description: "Exploited software is the most common way attackers get in. But in the costliest 5% of cyber events, stolen logins were part of 58% of events and 91% of losses, and vendor or partner access was part of 20% of events and 65% of losses. Patching reduces how often you are breached; protecting identity reduces how much the worst events cost."
date: 2026-11-06
type: "intel"
intel_type: "TECHNIQUE"
tags: ["Identity Security", "Valid Accounts", "Third-Party Risk", "Initial Access", "Cyentia Institute", "MITRE ATT&CK", "CISO", "Risk Management"]
---

## The INTEL

**Exploited software is the most common way attackers get in. But in the costliest 5% of cyber events, stolen logins (valid accounts) were the way in for 58% of events, and those events account for 91% of losses, according to the Cyentia Institute.**

Across breaches of every size, exploitation now leads: 31% of breaches with a known entry point in the 2026 Verizon DBIR, and 32% of Mandiant's M-Trends 2026 investigations. In Cyentia's IRIS Xtreme 2026, the extreme tail looks different:

- **Valid accounts:** 58% of extreme events, 91% of losses
- **Trusted relationships** (access through a vendor or partner): 20% of events, 65% of losses
- **Exploited internet-facing applications:** 40% of events, 44% of losses, but 87% of stolen records

The shares overlap because one event can involve several methods. Valid accounts and trusted relationships often appear together, which Cyentia calls "about as close to an invisible threat as one can get."

---

## Why It Matters

The two main controls work on different parts of the risk. Patching internet-facing systems reduces how often you are breached and how much data leaves. Protecting identity, especially remote and vendor access, reduces how much the worst events cost.

A program ranked only by how often each threat occurs will put patching first, and it should stay a priority. But a program that also ranks by losses prevented will give identity and vendor access more weight than incident counts alone suggest.

This is hindsight evidence: Cyentia's events run to early 2025. The DBIR's 2025 data shows the same signal is still live: half of ransomware victims had a credential leak in the 95 days before the attack.

---

## What To Do — One Key Action

**Rank your controls by the losses they prevent, not only by how often incidents occur. Then check who can log in remotely, including vendors and partners, and how that access is protected and monitored.**

---

## MITRE ATT&CK

- **T1078 Valid Accounts** — 58% of extreme events, 91% of losses
- **T1199 Trusted Relationship** — 20% of events, 65% of losses
- **T1190 Exploit Public-Facing Application** — 40% of events, 87% of stolen records

---

## Learn More

- [IRIS Xtreme 2026 (Cyentia Institute)](https://www.cyentia.com/iris) — Primary source; initial access techniques (Table 3, p29)
- [FIR Risk Tuesday E96 — The Costliest 5%: What Confirmed Losses Teach Us About Planning](/tuesday/e96-the-costliest-five-percent/) — Full analysis
- [FIR Risk Tuesday E90 — Refinement, Not Revolution](/tuesday/e90-refinement-not-revolution/) — The 2026 Verizon DBIR
- [FIR Risk Tuesday E85 — The Responder's Report](/tuesday/e85-responders-report/) — Mandiant M-Trends 2026

---

*Powered by [FIR Risk Platform](https://firrisk.ai/platform/) — AI-driven threat intelligence for enterprise risk leaders.*
