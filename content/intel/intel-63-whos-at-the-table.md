---
title: "INTEL-63: Who's Really at the Table?"
seoTitle: "Malware-Free Attacks: 82% of Detections in 2025"
description: "Happy Thanksgiving. Everyone at the table looks like family, and attackers count on the same trust: 82% of CrowdStrike's 2025 detections involved no malware, up from 51% in 2020. Know your guest list: define normal for your 25 most powerful accounts, AI agents included."
meta:
  description: "82% of CrowdStrike 2025 detections were malware-free, up from 51% in 2020. Attackers sign in and blend in. Know normal for your top accounts. SIGNALS 2026."
date: 2026-11-26
type: "intel"
intel_type: "TREND"
tags: ["SIGNALS", "Identity Security", "Threat Detection", "MITRE ATT&CK", "MITRE ATLAS", "CrowdStrike", "Red Canary", "CISO", "Risk Management"]
---

## The INTEL

**Happy Thanksgiving. Today, everyone who walks through the door is welcome, because everyone at the table looks like family. Attackers count on the same trust at work. In 2025, 82% of what CrowdStrike detected involved no malware at all: just someone who looked like they belonged.**

CrowdStrike's malware-free share of detections, from its 2026 report:

- **2020: 51% · 2021: 62% · 2022: 71% · 2023: 75% · 2024: 79% · 2025: 82%.** Up every year for six years.
- **How they get a seat.** Attackers "operated through valid credentials, trusted identity flows, approved SaaS integrations, and inherited software supply chains… blending into normal activity." Defenders "are often forced to identify malicious intent within otherwise legitimate actions."
- **Others see the same shift.** At Red Canary, identity threats overtook endpoint threats in 2025, at 53% of detection volume (from 20%). Red Canary measures what it detects, so better visibility explains part of the jump. The direction matches CrowdStrike's.

---

## Why It Matters

Most security tools were built to spot the stranger: the malicious file, the unknown program. When the intruder signs in with a real account and uses the company's own tools, there is no stranger to spot. What is left to notice is behavior: the cousin who never helps in the kitchen suddenly carrying out the silverware. At work, that's a user who never touches the finance share copying all of it, or an admin signing in from a new device at 3 a.m.

**Something to be thankful for:** the front door is holding. Microsoft reports password attacks fell 26% this year, "strong evidence that security measures such as MFA and passkeys are forcing attackers to pivot." That pivot is why they now try to look like family instead.

**Our read:** the question for leaders is no longer "do we have good malware protection?" Most companies do. It is the SIGNALS board question: "If an attacker were logged in as one of our employees today, would we know?"

---

## What To Do — One Key Action

**Know your guest list. Pick your 25 most powerful accounts: admins, service accounts and AI agents with broad access. For each, ask the security team what "normal" looks like and which unusual action would raise an alert today. Where nobody can answer, that account is where an attacker would sit at the table unnoticed.**

---

## MITRE ATT&CK

- **T1078 — Valid Accounts:** 17.0% of Mandiant's 2025 investigations. ATT&CK v20 places it under a new tactic, Stealth: "appearing as normal behavior"
- MITRE mitigations listed in SIGNALS: M1026 Privileged Account Management · M1036 Account Use Policies · M1032 Multi-factor Authentication

**MITRE ATLAS** (attacks on AI systems, v5.6)

- **AML.T0012 — Valid Accounts:** in ATLAS, stolen credentials include "API keys that provide access to various AI resources and services"
- **AML.T0053 — AI Agent Tool Invocation:** an attacker with access to an AI agent can "invoke tools the agent has access to," including tools "not directly accessible by users." To your logs, that activity looks like the agent doing its job. ATLAS mitigations: AML.M0024 AI Telemetry Logging (including "identity of the agent") · AML.M0027 Single-User AI Agent Permissions Configuration

---

## Learn More

- [FIR SIGNALS 2026](/reports/signals-2026/) — Signal 02, plus the MITRE ATT&CK appendix in the PDF
- [CrowdStrike 2026 Global Threat Report](https://www.crowdstrike.com/global-threat-report/) — Primary source
- [Red Canary 2026 Threat Detection Report](https://redcanary.com/threat-detection-report/) — Primary source
- [FIR Risk INTEL-44 — The Basics Are Working](/intel/intel-44-the-basics-are-working/) — Why attackers pivoted away from passwords
- [FIR Risk INTEL-23 — The Permission Problem](/intel/intel-23-the-permission-problem/) — Escalation without exploits

---

*Powered by [FIR Risk Platform](https://firrisk.ai/platform/) — AI-driven threat intelligence for enterprise risk leaders.*
