---
title: "INTEL-59: Six Years at the Top"
seoTitle: "Exploits: The #1 Way In for Six Years Running"
description: "Exploiting a flaw in something exposed to the internet has been the most common way into a company in Mandiant's investigations for six years running. This year Verizon, IBM and Microsoft agree. Count what you expose, and make that number shrink."
meta:
  description: "Exploits have been the #1 way in for six years of Mandiant investigations, and Verizon's 2026 DBIR now agrees. Why exposure is a SIGNALS 2026 signal."
date: 2026-11-18
type: "intel"
intel_type: "TREND"
tags: ["SIGNALS", "Vulnerability Management", "Exposure Management", "Mandiant", "Verizon DBIR", "MITRE ATLAS", "Board Governance", "Risk Management"]
---

## The INTEL

**Exploiting a flaw in something you expose to the internet has been the most common way into a company in Mandiant's investigations for six years running. This year, the other major datasets caught up. That is what makes it a signal, not a headline.**

What the sources say:

- **Mandiant (incident response):** "For the sixth year running, exploits represented the most frequently observed initial infection vector." 32% of investigations where the way in could be identified.
- **Verizon DBIR (breach data):** exploitation is now the #1 way in for the first time, at 31% of breaches, up from 20%. Credential abuse, the previous leader, fell to 13%.
- **IBM X-Force:** incidents caused by exploiting public-facing applications rose 44%, to 40% of cases.
- **Microsoft:** in its incident response work, exploiting public-facing applications rose from 15% to 24% of initial access.

Four different datasets, collected four different ways, pointing the same direction.

---

## Why It Matters

Vendor reports are full of spikes. A spike is a reason to look, not a reason to change strategy. SIGNALS kept a finding only if independent sources agree, it has lasted more than a year, and it changes a board decision. This one passes all three: the incident responders have seen it for six years, the breach data now agrees, and the decision it drives is clear.

**Our read:** treat exposure as a standing risk, not this year's emergency. Attackers keep coming through the front door because it keeps working. The question for leaders is no longer whether to act, but whether the number of doors is going down.

---

## What To Do — One Key Action

**Ask for one number every quarter: how many systems and services the company exposes to the internet, including its AI applications, and whether that count is going down. A shrinking footprint is the measure that matches six years of evidence.**

---

## MITRE ATT&CK

- **T1190 — Exploit Public-Facing Application:** seen in 27.7% of Mandiant's 2025 investigations
- **T1133 — External Remote Services:** seen in 23.8%, the other half of what you expose

**MITRE ATLAS** (attacks on AI systems, v5.6)

- **AML.T0049 — Exploit Public-Facing Application:** ATLAS applies the same technique to internet-facing AI applications, so they belong in the exposure count

---

## Learn More

- [FIR SIGNALS 2026](/reports/signals-2026/) — Signal 01, with every figure checked at the source
- [Mandiant M-Trends 2026](https://cloud.google.com/security/resources/m-trends) — Primary source
- [FIR Risk INTEL-45 — Stop Counting Patches](/intel/intel-45-stop-counting-patches/) — Why exposure beats patch counts as a board metric

---

*Powered by [FIR Risk Platform](https://firrisk.ai/platform/) — AI-driven threat intelligence for enterprise risk leaders.*
