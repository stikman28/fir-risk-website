---
title: "INTEL-61: Fixing Got Slower"
seoTitle: "Vulnerability Remediation Slowed in 2025: DBIR 2026"
description: "In 2025, attackers got faster and defenders got slower. Only 26% of critical known-exploited flaws were fully fixed, down from 38%, as organizations faced almost 50% more of them. A faster team still loses to rising volume: expose less, so there is less to fix."
meta:
  description: "Verizon DBIR 2026: 26% of critical KEV flaws fully fixed (from 38%), 43 days to fix, almost 50% more to fix. Why SIGNALS 2026 says expose less."
date: 2026-11-22
type: "intel"
intel_type: "TREND"
tags: ["SIGNALS", "Vulnerability Management", "Exposure Management", "Verizon DBIR", "CISA KEV", "MITRE ATLAS", "CISO", "Risk Management"]
---

## The INTEL

**In 2025, attackers got faster and defenders got slower. Both ends of the window moved the wrong way in the same year, and the reason on the defender's side is volume.**

The defender's side, from the Verizon DBIR 2026:

- Only **26%** of critical known-exploited vulnerabilities (those on CISA's KEV list) were fully fixed in 2025, down from **38%** the year before.
- The median time to fully fix one rose to **43 days**, from **32**.
- The reason: the median organization had **16** of these vulnerabilities to fix, up from 11. "That is almost 50% more."

The attacker's side:

- Microsoft: the median time from a flaw being found in the wild to a working exploit is "well below 24 hours."
- CrowdStrike: once inside, the average attacker moves through the network in **29 minutes**, down from 84 in 2022.

---

## Why It Matters

A 43-day fix cycle against a one-day exploit was already a losing race. What changed this year is the cause. Security teams didn't simply get worse: they were handed about 50% more critical fixes, and the fix rate fell.

**Our read:** this is why SIGNALS says "expose less," not "patch faster." A faster team still loses to rising volume. Fewer exposed systems means fewer critical fixes in the first place, and every fix you don't need is one the attacker can't race you to.

---

## What To Do — One Key Action

**Ask your security leader for two numbers from last year: how many critical known-exploited flaws the company had to fix, and what share were fully fixed. If the workload grew faster than the fixes, the answer is fewer exposed systems, not just a faster team.**

---

## MITRE ATT&CK

- **T1190 — Exploit Public-Facing Application:** the flaws that sit unfixed on exposed systems
- MITRE mitigation listed in SIGNALS: M1016 Vulnerability Scanning, paired with M1042 Disable or Remove Feature or Program

**MITRE ATLAS** (attacks on AI systems, v5.6)

- **AML.T0049 — Exploit Public-Facing Application:** internet-facing AI applications run the same fix race, with the same exploit clock
- **AML.M0023 — AI Bill of Materials:** a full listing of what each AI system is built from, which ATLAS says can "enable rapid response to reported vulnerabilities." You can't fix what you can't find
- **AML.M0016 — Vulnerability Scanning:** extends scanning to AI model files and their software dependencies, which "should be scanned for known vulnerabilities"

---

## Learn More

- [FIR SIGNALS 2026](/reports/signals-2026/) — Signal 01, with every figure checked at the source
- [Verizon 2026 Data Breach Investigations Report](https://www.verizon.com/business/resources/reports/dbir/) — Primary source
- [FIR Risk INTEL-60 — The Door You Opened on Purpose](/intel/intel-60-the-door-you-opened/) — The other half of exposure

---

*Powered by [FIR Risk Platform](https://firrisk.ai/platform/) — AI-driven threat intelligence for enterprise risk leaders.*
